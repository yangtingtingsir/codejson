 //"use strict";
let slotGame;
let slotConfig;
let coinSpinAnim;

// window loads event
window.onload = function() {

    // phaser game configuration object
    var gameConfig = {    
        type: Phaser.WEBGL,             // render type
        width: 1850,                    // game width, in pixels
        height: 1080,                   // game height, in pixels
        transparent: true,              // without background 
        scene: [SlotGame],              // scenes used by the game  
        audio: 
	   {
			                            // disableWebAudio: true
       },
       scale: {
           mode: Phaser.Scale.FIT // SHOW_ALL, RESIZE, FIT, autoCenter: Phaser.Scale.CENTER_BOTH   
      }
    };
   
    slotGame = new Phaser.Game(gameConfig);                 // game constructor
    window.focus();                                         // pure javascript to give focus to the page/frame 
                                                            // scale  resize();  window.addEventListener("resize", resize, false); - not used
}

// SlotGame scene
class SlotGame extends Phaser.Scene{
  
    // constructor
    constructor(){
        super("SlotGame"); // scene key 
    }

    loadSceneConfig()
    {
        slotConfig = slotConfig3x5;
    }

    // method to be executed when the scene preloads
    preload(){
         // create preloader
         var progressBar = this.add.graphics();
         var progressBox = this.add.graphics();
         progressBar.depth = 20;
         progressBox.depth = 19;
         progressBox.fillStyle(0xD8BFD8, 1);
         progressBox.fillRect((slotGame.config.width / 2) - 10 - 160, (slotGame.config.height / 2) - 10, 320, 50);
 
         this.load.on('progress', function (value) {
             //console.log(value);
             progressBar.clear();
             progressBar.fillStyle(0x4169E1, 1);
             progressBar.fillRect((slotGame.config.width / 2) -160, (slotGame.config.height / 2), 300 * value, 30);
         });
                     
         this.load.on('fileprogress', function (file) {
             //console.log('fileprogress: '+ file.src);
         });
 
         this.load.on('complete', function () {
             //console.log('complete');
             progressBar.destroy();
             progressBox.destroy();
         });

        this.updateEvent = new MKEvent();
        this.loadSceneConfig();

        // 1) loading png images, sprite sheets
        slotConfig.sprites.forEach((s)=>{
            if(s.fileName != null) {
            // if(this.textures.exists(s.name))  this.textures.remove(s.name);                                  // uncomment for game with multiple slot scenes
            this.load.image(s.name, "png/" + s.fileName);
            }
        });   // load png textures from png folder
        slotConfig.symbols.forEach((s)=>{
            if(s.fileName != null) {
                // if(this.textures.exists(s.name)) this.textures.remove(s.name);                                // uncomment for game with multiple slot scenes   
                this.load.image(s.name, "png/Symbols/" + s.fileName);
            }   
        });
        slotConfig.symbols.forEach((s)=>{
            if(s.fileNameBlurred != null) {
                // if(this.textures.exists(s.name + 'Blurred')) this.textures.remove(s.name + 'Blurred');        // uncomment for game with multiple slot scenes
                this.load.image(s.name + 'Blurred', "png/SymbolsBlurred/" + s.fileNameBlurred);
            }
        });
        slotConfig.symbols.forEach((s)=>{
            if(s.animation != null) {
                // if(this.textures.exists(s.name + 'Sheet')) this.textures.remove(s.name + 'Sheet');            // uncomment for game with multiple slot scenes
                this.load.spritesheet(s.name + 'Sheet', "png/SymbolsSheet/" + s.animation, {frameWidth: slotConfig.frameWidth, frameHeight: slotConfig.frameHeight});
            }
        });

        this.load.spritesheet("coinspin", "png/CoinSheet.png", { frameWidth: 113, frameHeight: 113});

        // 2) loading sounds
//        this.load.audio('box_click_clip', ['audio/box_click.ogg', 'audio/box_click.mp3' ]);  // this.load.audio('wheel_spin_clip', 'audio/spin_sound.mp3'); this.load.audio('coins_clip', 'audio/win_coins.wav');
//        this.load.audio('wincoins_clip', ['audio/mixkit_win.wav']); // this.load.audio('win_clip', ['audio/win_sound.ogg','audio/win_sound.mp3']);
//        this.load.audio('button_click', ['audio/button.wav']); 
//        this.load.audio('spin_clip', ['audio/spin_sound.wav']); 
//        this.load.audio('win_clip', ['audio/win_coins.wav']);
//        this.load.audio('lose_clip', ['audio/lose.wav']);
//        this.load.audio('background_clip', ['audio/background.wav']);
//        this.load.audio('scatter_clip', ['audio/scatter.wav']);
//        this.load.audio('respin_clip', ['audio/respin.wav']);

        // 3) loading bitmap fonts
        slotConfig.fonts.forEach((f)=>{this.load.bitmapFont(f.fontName, f.filePNG, f.fileXML);});
    }

    // method to be executed once the scene has been created
    create(){   
        // 0) events
        this.endWinSearchEvent = new MKEvent(); 
        this.endWinCalcEvent = new MKEvent(); 
        this.winCoinsEvent = new MKEvent();
        this.endFreeGamesEvent = new MKEvent();
        this.freeSpinWinEvent = new MKEvent();
        this.jackPotWinEvent = new MKEvent();
        this.startFreeGamesEvent = new MKEvent();
        this.startSpinEvent = new MKEvent();
        this.startWinShowEvent = new MKEvent();
        this.endWinShowEvent = new MKEvent();


        // 1) main properties
        this.centerX = (slotGame.config.width / 2) + slotConfig.localOffsetX;
        this.centerY = (slotGame.config.height / 2) + slotConfig.localOffsetY;
        this.useWild = (slotConfig.useWild && slotConfig.hasOwnProperty('wild') && slotConfig.wild !== null);
        this.isCascadeSpin = false;         // cascade spin flag (used only in cascade slot)
        this.sumCascadeCoins = 0;           // used only in cascade slot
        this.isFreeSpin = false;            // free spin flag
        this.reelSpin = false;              // reel spin flag
        this.playFreeSpins = false;
        this.startFreeGames = false;
        this.endFreeGames = false;
        this.cTime = 0;
        this.useWildInFirstPosition = slotConfig.useWildInFirstPosition;
        this.useLineBetMultiplier = slotConfig.useLineBetMultiplier;
        this.useLineBetFreeSpinMultiplier = slotConfig.useLineBetFreeSpinMultiplier;
        this.symbolsDict = {};
        slotConfig.symbols.forEach((s)=>{if(s.fileName != null) this.symbolsDict[s.name] = s;});
        this.spinCount = 0;
        this.waitAuto = 0;  // ms, one-time wait, auto reset

        // 2) pay tables
        this.payTable = [];
        slotConfig.payLines.forEach((pLine)=>{ this.payTable.push(new PayLine(this, pLine.line, pLine.pay, pLine.freeSpins, slotConfig.wild)); });
        this.payTableFull = createFullPaytable(this.payTable, this.useWild);
        console.log('paytable full length: ' + this.payTableFull.length);  // this.payTableFull.forEach((pLine)=>{console.log(pLine);});
        this.scatterPayTable = slotConfig.scatterPayTable;

        // 3) create slot graphic
        slotConfig.createSlotGraphic(this);
        coinSpinAnim = this.anims.create({            // create coin spin animation for particles  
                        key: 'spin',
                        frames: this.anims.generateFrameNumbers('coinspin'),
                        frameRate: 16,
                        repeat: -1
                        });
        this.coinParticles = this.add.particles('coinspin').setDepth(2000); // on top of all objects

        // 4) main objects
        this.slotPlayer = new SlotPlayer(slotConfig.defaultCoins); // default coins
        this.reels = slotConfig.createReels(this);
        this.lineButtons = (slotConfig.createLineButtons) ? slotConfig.createLineButtons(this) : null;  // add line buttons - optional
        this.soundController = new SoundController(this);
        this.guiController = new GuiController(this);
        this.slotControls = new SlotControls(this, this.slotPlayer, slotConfig.lines, slotConfig.lineColor, slotConfig.lineBetMaxValue, slotConfig.jackpot.defaultAmount);
        this.winController = new WinController(this, this.slotControls.linesController, slotConfig.useScatter, slotConfig.scatter, slotConfig.jackpot, slotConfig.winShowTime);
   
        // 5) add sounds 
//        this.box_click_clip = this.sound.add('box_click_clip');
//        this.win_clip = this.sound.add('win_clip');
//        this.button_click = this.sound.add('button_click');
//        this.spin_clip = this.sound.add('spin_clip');
//        this.wincoins_clip = this.sound.add('wincoins_clip');
//        this.lose_clip = this.sound.add('lose_clip');
//        this.background_clip = this.sound.add('background_clip');
//        this.scatter_clip = this.sound.add('scatter_clip');
//        this.respin_clip = this.sound.add('respin_clip');
 
        // 6) controls
        slotConfig.createControls(this, this.slotControls);
        this.slotControls.init(slotConfig.selectedLines, true);
   
        // 7) state machine
        this.stateMachine = new StateMachine();
        this.iddleState = new IddleState(this, this.stateMachine);
        this.winState = new WinState(this, this.stateMachine);
        this.loseState = new LoseState(this, this.stateMachine);
        this.spinState = new SpinState(this, this.stateMachine);
        this.preSpinState = new PreSpinState(this, this.stateMachine);
        this.freeInputWinState = new FreeInputWinState(this, this.stateMachine);
        this.stateMachine.initialize(this.iddleState);
        this.endWinCalcEvent.add((win)=>
            {
                if (win)
                {
                    this.stateMachine.changeState(this.winState);
                    this.lampsBlink(true);
                }
                else this.stateMachine.changeState(this.loseState); 
            }, this);
        
        // 8) coroutines
        this.loseCorout = null;
        this.winCorout = null;
        this.freeInputWinCorout = null;

        // 9) play background music
        this.soundController.playMusic('background_clip');

        // 9a animate ballons
        this.animLanternLeftComplete = true;
        this.animLanternRightComplete = true;
        this.nextAnimTime = 0;

        // 10) debug
        // this.fpsText = this.add.bitmapText(this.centerX, this.centerY - 520, 'gameFont_1', 'fps: ', 40, 1).setOrigin(0.5);

        /*
         this.input.on('pointerdown',function(pointer){
            //var pointX = pointer.x; var pointY = pointer.y;
            var pointX = slotGame.input.mousePointer.worldX;
            var pointY = slotGame.input.mousePointer.worldY;
            console.log('posX:' + (pointX - (slotGame.config.width / 2))+ "; posY: " + (pointY - (slotGame.config.height / 2)));      
        });
        */

        // 11) tests
        // this.showWinCoinsMessage(20, 20000);

 /*
         var wMess = this.guiController.showMessageYNC('CONGRATULATION!', 'YOUR WIN: ' + '20' + ' COINS!', this, 
         ()=>{this. guiController.closePopUp(wMess);}, ()=>{this. guiController.closePopUp(wMess);},()=>{this. guiController.closePopUp(wMess);},);
 */

        // var aboutPU = this.guiController.showPopUp(slotConfig.createAboutPUHandler);
        // var settingsPU = this.guiController.showPopUp(slotConfig.createSettingsPUHandler);
        // var infoPU = this.guiController.showPopUp(slotConfig.createInfoPUHandler);
        // var fgPU = this.guiController.showPopUp(slotConfig.createFreeGamesPUHandler); fgPU.messageText.text = 10;
        // var bwPU = this.guiController.showPopUp(slotConfig.createBigWinPUHandler); bwPU.messageText.text = 748;
        // var hwPU = this.guiController.showPopUp(slotConfig.createHugeWinPUHandler); hwPU.messageText.text = 3486;
        // var mwPU = this.guiController.showPopUp(slotConfig.createMegaWinPUHandler); mwPU.messageText.text = 35683;
        // var jpwPU = this.guiController.showPopUp(slotConfig.createJackpotWinPUHandler); jpwPU.messageText.text = 31369033;
        // this.showCoins(true);
    }

    update(time, delta) // https://newdocs.phaser.io/docs/3.52.0/focus/Phaser.Scene-update
    {   
        this.cTime = time;
        simpleTweener.update(delta);
        this.updateEvent.events.forEach((eW)=>{ if (eW != null && eW.action != null) eW.action.call(eW.context, time, delta); });

        if(this.animLanternLeftComplete) this.animLanternLeft();
        if(this.animLanternRightComplete) this.animLanternRight();

        if (this.fpsText) this.fpsText.text = 'fps: ' + Math.round(slotGame.loop.actualFps);    // for debugging puposes only, can be disabled
    }

    runSlot()
    {
        // 0) prepare, set flags
        let anyWin = false;
        let lineCoins = 0;          // lines win coins
        let scatterCoins = 0;       // scatter win coins
        let jpCoins = 0;            // jack pot win coins
        let winSpins = 0;
        this.isCascadeSpin = false;
        this.reelSpin = true;
        if (this.slotControls.auto && !this.isFreeSpin) this.slotControls.incAutoSpinsCounter();
        this.slotPlayer.setWinCoinsCount(0);
        this.slotControls.linesController.hideAllLines();
        if(this.loseCorout !== null) this.loseCorout.stop();
        if(this.winCorout !== null) this.winCorout.stop();
        if(this.freeInputWinCorout !== null) this.freeInputWinCorout.stop();
        this.lampsBlink(false);
        this.slotControls.addJackpotAmount(slotConfig.jackpot.increaseValue);
        this.startSpinEvent.invoke();

        // 1) start spin sound
        this.soundController.stopSounds(); // this.soundController.stopAll(); 
        if(slotConfig.playSpinSound) this.soundController.playClip('spin_clip', true);
        
        // 2) create spin sequence
        this.spinCount++;
        var sA = new SequencedActions();
        sA.add((callBack) =>{spinReels(this, this.reels, slotConfig, callBack);}, this);
        sA.add((callBack) =>{
            console.log('spin complete');
            this.soundController.stopSounds(); // this.soundController.stopAll(); 
            callBack();
        }, this);

        sA.add((callBack) =>{
            this.winController.searchWinSymbols();
            anyWin = this.winController.hasAnyWinn();                                                                                   // for respins
            this.endWinSearchEvent.events.forEach((eW)=>{if (eW != null && eW.action != null) eW.action.call(eW.context, anyWin);});    // for respins
            callBack();
            }, this);  // search spin result

        sA.add((callBack) =>{
            anyWin = this.winController.hasAnyWinn() || this.slotControls.respinFeature.hasAnyWin(); 
            if(anyWin)
            {
                lineCoins = this.winController.getLineWinCoins();
                scatterCoins = this.winController.getScatterWinCoins();
                jpCoins = this.winController.getJackpotWinCoins();
                if(jpCoins > 0) this.jackPotWinEvent.events.forEach((eW)=>{if (eW != null && eW.action != null) eW.action.call(eW.context, wjpCoins);}); 

                if (this.useLineBetMultiplier) 
                {
                    lineCoins *= this.slotControls.lineBet;
                    scatterCoins *= this.slotControls.lineBet; 
                }
                var summCoins = jpCoins + lineCoins + scatterCoins;
                if (summCoins > 0) this.winCoinsEvent.events.forEach((eW)=>{if (eW != null && eW.action != null) eW.action.call(eW.context, summCoins);}); 

                winSpins = this.winController.getWinSpins();
                winSpins += this.slotControls.respinFeature.winSpins;
                console.log('winSpins: ' + winSpins);
                if (this.useLineBetFreeSpinMultiplier) winSpins *= this.slotControls.lineBet;
                if (winSpins > 0) this.freeSpinWinEvent.events.forEach((eW)=>{if (eW != null && eW.action != null) eW.action.call(eW.context, winSpins);}); 
            }
            else
            {
                this.isCascadeSpin = false;
            }
            this.endWinCalcEvent.events.forEach((eW)=>{if (eW != null && eW.action != null) eW.action.call(eW.context, anyWin);});   // start win show or loose show
            callBack();
        }, this);

        sA.add((callBack) =>{callBack();}, this);

        sA.start();
    }

    // add sprite relative to scene center
    addSpriteLocPos(name, posX, posY)
    {
        return  this.add.sprite(this.centerX + posX, this.centerY + posY, name);
    } 

    // wait miliseconds coroutine
    *wait_ms(ms) 
    {
        var timeTarget = this.cTime + ms;
        while (timeTarget > this.cTime)
        {
          //  console.log('wait_ms: ' + (-this.cTime + timeTarget));
            yield (timeTarget - this.cTime);
        }
    }

    // start win show coroutine
    winShow(completeCallBack)
    {
        this.miniGame = null;
        this.winCorout = new Coroutiner(this, this.winShowC(completeCallBack));
        this.winCorout.start();
    }

    // win show coroutine
    *winShowC(completeCallBack)
    {
        console.log("win show start: " + this.spinCount);
        this.startWinShowEvent.invoke();
        if(this.waitAuto > 0)  { yield* this.wait_ms(this.waitAuto); this.waitAuto = 0;}

        //3a ------ any win show event -------
        while(this.miniGame !== null || !this.guiController.hasNoPopUp())
        {
            console.log("wait: this.miniGame and popups:  " + this.miniGame  + " : " + this.guiController.hasNoPopUp());
            yield null;
        }

        // 3b0 ---- show particles, line flashing  -----------
        let winShowEnd = false;
        this.winController.winSymbolShowOnce(()=>{ winShowEnd = true; });

        yield* this.wait_ms(1000);

        //3b1 --------- check Jack pot -------------
        while(this.miniGame !== null || !this.guiController.hasNoPopUp())
        {
            yield null;
        }

        //3c0 -----------------calc coins -------------------
        let jpCoins = this.winController.getJackpotWinCoins();
        let winCoins = this.winController.getLineWinCoins() + this.winController.getScatterWinCoins();
        if (this.useLineBetMultiplier) winCoins *= this.slotControls.lineBet;
        this.slotPlayer.setWinCoinsCount(winCoins + jpCoins);
        this.slotPlayer.addCoins(winCoins + jpCoins);
       
        while(this.miniGame !== null || !this.guiController.hasNoPopUp())
        {
            yield null;
        }

        console.log('jackpot win : ' + jpCoins);
        if(jpCoins > 0)
        {      
            this.showJackpotWinMessage(jpCoins, slotConfig.winMessageTime * 2);
            this.soundController.playClip('wincoins_clip', false);    
            this.slotControls.resetJackpot();     
        }

        //3c1 ----------- calc free spins ----------------
        let winSpins = this.winController.getWinSpins() ;
        winSpins += this.slotControls.respinFeature.winSpins;       // respin
        let winLinesCount = this.winController.winLines.length;
        if (this.useLineBetFreeSpinMultiplier) winSpins *= this.slotControls.lineBet;

        // win coins, big win, win spins sounds and messages
        let bigWin = (winCoins > 0 && winCoins >= slotConfig.minWin && slotConfig.useBigWinCongratulation);
        if(bigWin)
        { 
            console.log('big win congratulation : ' + winCoins);
            this.showBigWinMessage(winCoins, slotConfig.winMessageTime * 2);
            this.soundController.playClip('wincoins_clip', false);         
        }
        else if(winCoins > 0 )
        { 
            console.log('win coins congratulation : ' + winCoins);
            if(slotConfig.showWinCoinsMessage) this.showWinCoinsMessage(winCoins, slotConfig.winMessageTime);
            this.soundController.playClip('wincoins_clip', false);
        }

        while(this.miniGame !== null || !this.guiController.hasNoPopUp())
        {
            yield null;
        }

        if (winSpins > 0) 
        {
            if(winCoins > 0) yield* this.wait_ms(1000);   // delay between messages
            console.log('win free spins congratulation : ' + winSpins);
            if(slotConfig.showWinFreeSpinsMessage) this.showWinFreeSpinsMessage(winSpins, slotConfig.winMessageTime);
            setTimeout(()=>
            { 
                this.soundController.playClip('win_clip', false);
            }, winCoins > 0 ? 1500 : 100);
            
        }
  
        this.slotControls.addFreeSpins(winSpins);
        while(this.miniGame !== null || !this.guiController.hasNoPopUp())
        {
            yield null;
        }

        this.playFreeSpins = (this.slotControls.autoPlayFreeSpins && this.slotControls.hasFreeSpin());
        this.startFreeGames = !this.isFreeSpin && this.playFreeSpins;
        this.endFreeGames = this.isFreeSpin && !this.playFreeSpins;
        if (this.endFreeGames) this.endFreeGamesEvent.invoke();
        while(this.miniGame !== null || !this.guiController.hasNoPopUp())
        {
            yield null;
        }

        //3d0 ----- invoke scatter win event -----------
        if (this.winController.scatterWin != null && this.winController.scatterWin.winEvent != null) 
        {
            yield* this.wait_ms(1000);
            this.winController.scatterWin.winEvent.invoke();
            while(this.miniGame !== null || !this.guiController.hasNoPopUp())
            {
                yield null;
            }
        }

        // 3d1 -------- add levelprogress --------------
        this.slotPlayer.addLevelProgress((this.useLineBetProgressMultiplier) ? this.winSpinLevelProgress * winLinesCount * this.slotControls.lineBet : this.winSpinLevelProgress * winLinesCount); // for each win line
        while(this.miniGame !== null || !this.guiController.hasNoPopUp())
        {
            yield null;
        }

        // 3d2 ------------ start line events ----------
      //  this.winController.startLineEvents();
        while(this.miniGame !== null || !this.guiController.hasNoPopUp())
        {
            yield null;
        }
       
        // start free games events
        if (this.startFreeGames) 
        {
            // var fgPU = this.guiController.showMessage("START FREE GAME", winSpins, this, () => { this.guiController.closePopUp(fgPU);});    
            if(slotConfig.showFreeGameMessage) {
                var fgPU = this.guiController.showPopUp(slotConfig.createFreeGamesPUHandler);
                fgPU.messageText.text = winSpins;
            }

            this.startFreeGamesEvent.invoke();
            while(this.miniGame !== null || !this.guiController.hasNoPopUp())
            {
                yield null;
            }
        }

        //3e ---- ENABLE player interaction -----------
        this.reelsSpin = false;
        // this.soundController.playMusic('');
        
        /*
        if (this.slotControls.auto && this.slotControls.autoSpinsCounter >= slotConfig.maxAutoSpins)
        {
            this.slotControls.resetAutoSpinsMode();
        }
        */
        while(!winShowEnd)
        {
            yield null;
        }

        this.endWinShowEvent.invoke();
 
        if(this.waitAuto > 0) 
        {  
            yield* this.wait_ms(this.waitAuto);
            this.waitAuto = 0;
        }

        while(this.miniGame !== null || !this.guiController.hasNoPopUp())
        {
            yield null;
        }

        //if (logStatistic) SlotStatistic.PrintStatistic();
        completeCallBack();
        console.log('win show end: ' + this.spinCount);
    }

    // start win show coroutine while waiting for player action
    freeInputWinShow (completeCallBack)
    {
        this.freeInputWinCorout = new Coroutiner(this, this.freeInputWinShowC(completeCallBack));
        this.freeInputWinCorout.start();
    }

    // win show coroutine while waiting for player action
    *freeInputWinShowC (completeCallBack)
    {
        yield* this.wait_ms(1000);
        if(this.showAgainWin) // before the spin we can show the winning lines again
        {
            let winShowEnd = false;
            this.winController.winSymbolShowOnce(()=>{ winShowEnd  = true; });

            while (!winShowEnd )
            {
                //  console.log('wait win symbols show');
                yield null;
            }
        }
        completeCallBack(this.slotControls.auto || this.playFreeSpins);
    }

    // start lose show coroutine
    loseShow(completeCallBack)
    {
        this.loseCorout = new Coroutiner(this, this.loseShowC(completeCallBack));
        this.loseCorout.start();
    }

     // lose show coroutine
    *loseShowC(completeCallBack)
    {
        this.soundController.playClip('lose_clip', false);
        console.log('lose show, spinCount: ' + this.spinCount);
        console.log('play lose sound');  // play sound loseSound
        this.slotPlayer.addLevelProgress(this.loseSpinLevelProgress);
        this.playFreeSpins = (this.slotControls.autoPlayFreeSpins && this.slotControls.hasFreeSpin());
        this.reelSpin = false;
        /*
        if (this.slotControls.auto && this.slotControls.autoSpinsCounter >= this.slotControls.autoSpinCount)
        {
            this.slotControls.resetAutoSpinsMode();
        }
        */
        yield* this.wait_ms(1000);  // wait 1 sec before call completeCallBack
        completeCallBack(this.slotControls.auto || this.playFreeSpins);
    }

    // not used
    handleAnimation(){
        if(!this.handle) return;
        if(this.hAnim) return;
        this.hAnim = true;

        var sA_0 = new SequencedActions(); 
        var sA_1 = new SequencedActions(); 

        let hBPosY_0 = this.handleBall.y;
        let hBPosY_1 = this.handleBall.y + 305;
        let hBPosX = this.handleBall.x;
        let aTime = 200;

        sA_0.add((callBack) =>{
            new SimpleTweenFloat(this, 1.0, 0, aTime,                                                        
            (v, dv) =>{ this.handle.setScale(1, v);},   
            ()=> { callBack(); });
        }, this);
        sA_0.add((callBack) =>{
            new SimpleTweenFloat(this, 0, 1.0, aTime,                                                       
            (v, dv) =>{ this.handle.setScale(1, v);},   
            ()=> {this.handle.setScale(1,1); callBack(); });
        }, this);
        sA_0.start();

        sA_1.add((callBack) =>{
            new SimpleTweenFloat(this, hBPosY_0, hBPosY_1, aTime,                                                        
            (v, dv) =>{ this.handleBall.setPosition(hBPosX, v);},   
            ()=> { callBack(); });
        }, this);
        sA_1.add((callBack) =>{
            new SimpleTweenFloat(this, hBPosY_1, hBPosY_0, aTime,                                                       
                (v, dv) =>{ this.handleBall.setPosition(hBPosX, v);},    
            ()=> { this.hAnim = false; this.handleBall.setPosition(hBPosX, hBPosY_0); callBack(); });
        }, this);
        sA_1.start();
    }

    showBigWinMessage(winCoins, time)
    {
        var bwPU = this.guiController.showPopUp(slotConfig.createBigWinPUHandler);
        bwPU.messageText.text = winCoins;
        if(time && time > 0) this.timeoutMess = setTimeout(()=>{this. guiController.closePopUp(bwPU); if(this.timeoutMess) clearTimeout(this.timeoutMess);}, time);
    }

    showWinCoinsMessage(winCoins, time)
    {    
        var wMess = this.guiController.showMessage(' ', 'Your win: ' + winCoins + ' coins!', this, 
        ()=>{
            if(this.timeoutMess) clearTimeout(this.timeoutMess);
            this.timeoutMess = null; 
            this. guiController.closePopUp(wMess);});
            if(time && time > 0) this.timeoutMess = setTimeout(()=>{this. guiController.closePopUp(wMess);}, time);
    }

    showWinFreeSpinsMessage(winSpins, time)
    {
        var wMess = this.guiController.showPopUp(slotConfig.createFreeSpinsWinPUHandler);
        wMess.messageText.text = winSpins;
        if(time && time > 0) new SimpleTweenFloat (this, 0, 1, time, (p, dp)=>{}, ()=>{this. guiController.closePopUp(wMess);} ); // close message
        /*
        var wMess = this.guiController.showMessage(' ', 'Your win: ' + winSpins + ' Free Spins!', this,
        ()=>{
            if(this.timeoutMess) clearTimeout(this.timeoutMess);
            this.timeoutMess = null; 
            this. guiController.closePopUp(wMess);});
            if(time && time > 0) this.timeoutMess = setTimeout(()=>{this. guiController.closePopUp(wMess);}, time);
        */
    }

    // not used
    showJackpotWinMessage(winCoins, time)
    {
        var jpPU = this.guiController.showPopUp(slotConfig.createJackpotWinPUHandler);
        jpPU.messageText.text = winCoins;
        this.showCoins(true);
        if(time && time > 0) this.timeoutMessJP = setTimeout(()=>{
            this. guiController.closePopUp(jpPU); 
            this.showCoins(false); 
            if(this.timeoutMessJP) clearTimeout(this.timeoutMessJP);}, time);
    }

    // not used
    lampsBlink(blink)
    {
        if(!this.lampsArray) return;
        if(blink && !this.lampsIntervalID )
        {
            this._lampsOn = false;
            this.lampsIntervalID = setInterval(()=>
            {
                this.lampsArray.forEach((l)=>{l.setOn(this._lampsOn);});
                this._lampsOn = !this._lampsOn;
            }, 1000);
        }
       else if(!blink && this.lampsIntervalID)
       {
            clearInterval(this.lampsIntervalID);
            this.lampsArray.forEach((l)=>{l.setOn(true);});
            this.lampsIntervalID = null;
       }
    }

    // show coins particles
    showCoins(show)
    {
        if(show && this.coinParticles){
        this.coinsEmitter = this.coinParticles.createEmitter({
            x: this.centerX,
            y: -100,
            frame: 0,
            quantity: 3,
            frequency: 200,
            angle: { min: -30, max: 30 },
            speedX:  { min: -200, max: 200 },
            speedY: { min: -100, max: -200 },
            scale: { min: 0.3, max: 0.5 },
            gravityY: 400,
            lifespan: { min: 10000, max: 15000 },
            particleClass: AnimatedCoinParticle
        });
    }
    else {
        if(this.coinsEmitter!=null)
            {
                this.coinsEmitter.stop();
            }
        }
    }

    // not used
    animLanternLeft(){
        if(this.lanternleft == null)return;
        this.animLanternLeftComplete = false;
        this.angleLeftB = Phaser.Math.Between(-4, -8);
        this.durLeftB = Phaser.Math.Between(1000, 1400);

        // start 2 tweens
        this.tweens.add({
            targets: [this.lanternleft],
            angle: this.angleLeftB,
            duration: this.durLeftB,
            ease: "Sine.easeInOut",
            callbackScope: this,
            onComplete: function(tween)
            {
                this.tweens.add({
                    targets: [this.lanternleft],
                    angle: this.lanternleft.angle - 2 * this.angleLeftB,
                    duration: this.durLeftB,
                    ease: "Sine.easeInOut",
                    callbackScope: this,
                    onComplete: function(tween)
                        {
                            this.animLanternLeftComplete = true;
                        }
                    })
                },          
            });
    }

    // not used
    animLanternRight(){
        if(this.lanternright == null) return;    
        this.animLanternRightComplete = false;
        this.angleRightB = Phaser.Math.Between(4, 8);
        this.durRightB = Phaser.Math.Between(1000, 1400);
    
        // start 2 tweens
        this.tweens.add({
            targets: [this.lanternright],
            angle: this.angleRightB,
            duration: this.durRightB,
            ease: "Sine.easeInOut",
            callbackScope: this,
            onComplete: function(tween)
            {
                this.tweens.add({
                        targets: [this.lanternright],
                        angle: this.lanternright.angle - 2 * this.angleRightB,
                        duration: this.durRightB,
                        ease: "Sine.easeInOut",
                        callbackScope: this,
                        onComplete: function(tween)
                            {
                                this.animLanternRightComplete = true;
                            }
                        })
                    },          
                });
    }
}

// ---helper functions--- 

// return symbol data from the config_.js file
function getSymboldData(_slotConfig, spriteName)
{
    for(var si = 0; si < _slotConfig.symbols.length; si++)
    {
            if(_slotConfig.symbols[si].name === spriteName) return _slotConfig.symbols[si];
    }
    return null;
} 

function spinReels(scene, reels, _slotConfig, completeCallback){

    var pA = new ParallelActions();
    var ri = 0;
    var holdReels = (scene.slotControls.hold != null) ? scene.slotControls.hold.holdReels : [false, false, false, false, false]; 

    reels.forEach((r)=>{
        pA.add((callBack)=>
        {
            var rand = (_slotConfig.reels_simulate && _slotConfig.reels_simulate[ri] >= 0) ? _slotConfig.reels_simulate[ri] : r.getRandomOrderPosition();
            if(!holdReels[ri]) r.spin(rand, ()=>{callBack();}); 
            else callBack();
            ri++;
        });         
    });
    pA.start(completeCallback);
}

function createFullPaytable(payTable, useWild)
{
    var payTableFull = [];
    for (var j = 0; j < payTable.length; j++)
    {
        payTableFull.push(payTable[j]);
        var wildLines = payTable[j].getWildLines();
        if (useWild) wildLines.forEach((wl)=>{payTableFull.push(wl);}); 
    }
    return payTableFull;
}

function getTime() {
    //make a new date object
    let d = new Date();

    //return the number of milliseconds since 1 January 1970 00:00:00.
    return d.getTime();
}
