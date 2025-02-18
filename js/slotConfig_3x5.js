// 3x5 20 lines donuts
var slotConfig_3x5 = {
    symbolSizeY: 250, 
    spinTime: 2000,                 // time, milliseconds
    winShowTime: 3000,              // time, milliseconds
    showWinCoinsMessage : false,    // displaying a message with the amount of money won
    winMessageTime: 2400,           // win message show time
    minWin : 200,                      // to show big, mega, huge popup
    useBigWinCongratulation : true,    // to show big, mega, huge popup
    showWinFreeSpinsMessage : true,    // show free spin message
    showFreeGameMessage : true,

    symbAnimFrameRate: 22,      // symbols animation frame rate
    frameWidth : 277,           // frame width
    frameHeight : 277,          // frame height

    playSpinSound: false,

    lineColor : 0xFFEA31,       // line color
    showWinLines : true,

    lineBetMaxValue: 20,        // slot line bet maxvalue
    useWild: true,              // use wild flag, wild can be substitute for any symbol
                                // to create winning combinations (exclude first reel)
    wild: 'Wild',               // wild symbol name
    useScatter: true,           // use scatter flag - we will use the scatter functionality
    scatter: 'Scatter',         // scatter symbol name
    selectedLines: 'all',       //'all' / 'first' - selectad lines at start

    useWildInFirstPosition: false,              // substitute of the first symbol not allowed
    useLineBetMultiplier: true,                 // win multiplied by bet
    useLineBetFreeSpinMultiplier: false,        // free spins win multiplied by bet
    defaultCoins: 100000,                       // default player credit 100 000

    localOffsetX: 0,                            // x offset from center for all scene objects
    localOffsetY: 70,                           // y offset from center for all scene objects

    maxHold: 2,                                 // the maximum number of slot reels that can be held
    
    fonts: [
        /*
        {
            fontName: 'gameFont_0',
            filePNG:  'fonts/RousseauDeco_42_0.png',
            fileXML:  'fonts/RousseauDeco_42_0.xml'
        },
        */
        {
            fontName: 'gameFont_1',
            filePNG:  'fonts/RousseauDeco_42_1.png',
            fileXML:  'fonts/RousseauDeco_42_1.xml'
        },
        {
            fontName: 'gameFont_2',
            filePNG:  'fonts/RousseauDeco_42_2.png',
            fileXML:  'fonts/RousseauDeco_42_2.xml'
        },
        {
            fontName: 'gameFont_3',
            filePNG:  'fonts/RousseauDeco_42_3.png',
            fileXML:  'fonts/RousseauDeco_42_3.xml'
        },

    ],

    sprites: [
        // debug reference
        {
            fileName: null,
            name: 'debugreference'
        },

        // common sprites 
        {
            fileName: 'SlotMachine_3x5.png',
            name: 'slot'
        },
        {
            fileName: 'BottomPanel.png',
            name: 'bottom_panel'
        },
        {
            fileName: 'TopPanel.png',
            name: 'top_panel'
        },
        {
            fileName: 'PanelJackpot.png',
            name: 'paneljackpot'
        },
        {
            fileName: 'ButtonPlus.png',
            name: 'button_plus'
        },
        {
            fileName: 'ButtonPlusHover.png',
            name: 'button_plus_hover'
        },
        {
            fileName: 'ButtonMinus.png',
            name: 'button_minus'
        },
        {
            fileName: 'ButtonMinusHover.png',
            name: 'button_minus_hover'
        },
        {
            fileName: 'PanelTotalBet.png',
            name: 'panel_totalbet'
        },
        {
            fileName: 'PanelLineBet.png',
            name: 'panel_linebet'
        },
        {
            fileName: 'PanelWin.png',
            name: 'panel_win'
        },
        {
            fileName: 'PanelLines.png',
            name: 'panel_lines'
        },
        {
            fileName: 'PanelBalance.png',
            name: 'panel_balance'
        },
        {
            fileName: null,
            name: 'panel_menu'
        },
        {
            fileName: 'ButtonLine.png',
            name: 'button_line'
        },
        {
            fileName: 'ButtonLineHover.png',
            name: 'button_line_hover'
        },
        {
            fileName: 'ButtonMaxBet.png',
            name: 'button_maxbet'
        },
        {
            fileName: 'ButtonMaxBetHover.png',
            name: 'button_maxbet_hover'
        },
        {
            fileName: 'ButtonSpin.png',
            name: 'button_spin'
        },
        {
            fileName: 'ButtonSpinHover.png',
            name: 'button_spin_hover'
        },
        {
            fileName: 'ButtonAutoSpin.png',
            name: 'button_autospin'
        },
        {
            fileName: 'ButtonAutoSpinHover.png',
            name: 'button_autospin_hover'
        },
        {
            fileName: 'ButtonHold.png',
            name: 'button_hold'
        },
        {
            fileName: 'ButtonHoldHover.png',
            name: 'button_hold_on'
        },
        {
            fileName: null,
            name: 'progress_base'
        },
        {
            fileName: null,
            name: 'progress_fill'
        },
        {
            fileName: null,
            name: 'progress_spot'
        },

        // common gui sprites 
        {
            fileName: 'ButtonMenu.png',
            name: 'button_menu'
        },
        {
            fileName: 'ButtonMenuHover.png',
            name: 'button_menu_hover'
        },
        {
            fileName: 'ButtonInfo.png',
            name: 'button_info'
        },
        {
            fileName: 'ButtonInfoHover.png',
            name: 'button_info_hover'
        },
        {
            fileName: 'ButtonSettings.png',
            name: 'button_settings'
        },
        {
            fileName: 'ButtonSettingsHover.png',
            name: 'button_settings_hover'
        },
        {
            fileName: 'ButtonRules.png',
            name: 'button_rules'
        },
        {
            fileName: 'ButtonRulesHover.png',
            name: 'button_rules_hover'
        },
        {
            fileName: 'gui/ButtonOn.png',
            name: 'button_on'
        },
        {
            fileName: 'gui/ButtonOff.png',
            name: 'button_off'
        },
        {
            fileName: 'gui/MessagePanel.png',
            name: 'message_panel'
        },   
        {
            fileName: 'gui/SmallMessagePanel.png',
            name: 'small_message_panel'
        }, 
        {
            fileName: 'gui/AboutPanel.png',
            name: 'about_panel'
        },  
        {
            fileName: 'gui/SettingsPanel.png',
            name: 'settings_panel'
        }, 
        {
            fileName: 'gui/FreeSpinPanel.png',
            name: 'freespin_panel'
        }, 
        {
            fileName: 'gui/BigWinPanel.png',
            name: 'bigwin_panel'
        }, 
        {
            fileName: 'gui/HugeWinPanel.png',
            name: 'hugewin_panel'
        }, 
        {
            fileName: 'gui/MegaWinPanel.png',
            name: 'megawin_panel'
        }, 
        {
            fileName: null,
            name: 'settings_title'
        },
        {
            fileName: 'gui/PayLinesTable.png',
            name: 'paylines_table'
        },
        {
            fileName: null,
            name: 'minor_title'
        },
        {
            fileName: null,
            name: 'major_title'
        },
        {
            fileName: null,
            name: 'rules_title'
        },
        {
            fileName: null,
            name: 'special_title'
        },
        {
            fileName: 'gui/SymbolPlate.png',
            name: 'symbol_plate'
        },
        {
            fileName: null,
            name: 'specsymbol_plate'
        },
        {
            fileName: 'gui/Logo.png',
            name: 'logo'
        }, 
        {
            fileName: 'gui/ExitButton.png',
            name: 'exit_button'
        }, 
        {
            fileName: 'gui/ExitButtonHover.png',
            name: 'exit_button_hover'
        },   
        {
            fileName: null, 
            name: 'middle_button'
        }, 
        {
            fileName: null, 
            name: 'middle_button_hover'
        },   
        {
            fileName: 'gui/LongButton.png', 
            name: 'long_button'
        }, 
        {
            fileName: 'gui/LongButtonHover.png', 
            name: 'long_button_hover'
        }, 
        {
            fileName: 'gui/ExtraLongButton.png', 
            name: 'extralong_button'
        }, 
        {
            fileName: 'gui/ExtraLongButtonHover.png', 
            name: 'extralong_button_hover'
        },
        {
            fileName: 'gui/SmallButton.png', 
            name: 'small_button'
        }, 
        {
            fileName: 'gui/SmallButtonHover.png', 
            name: 'small_button_hover'
        }, 
        {
            fileName: 'gui/InfoPanel.png', 
            name: 'info_panel'
        },  
        {
            fileName: null, 
            name: 'help_title'
        },  
        {
            fileName: 'gui/JackpotWinPanel.png', 
            name: 'jackpotwin_panel'
        },   
        {
            fileName: null, 
            name: 'jackpotwin_title'
        }, 
        {
            fileName: null, 
            name: 'pu_background'
        },   
        {
            fileName: 'gui/grayBkg_01.png', 
            name: 'gray_01'
        }, 
        {
            fileName: 'gui/whiteBkg.png', 
            name: 'white_bkg'
        },
        {
            fileName: 'gui/NextButtonHover.png', 
            name: 'next_button_hover'
        },
        {
            fileName: 'gui/NextButton.png', 
            name: 'next_button'
        },  
        {
            fileName: 'gui/PrevButtonHover.png', 
            name: 'prev_button_hover'
        },   
        {
            fileName: 'gui/PrevButton.png', 
            name: 'prev_button'
        },        
        {
            fileName: 'gui/SoundOn.png',  
            name: 'soundon'
        },  
        {
            fileName: 'gui/SoundOff.png',  
            name: 'soundoff'
        }, 
        {
            fileName: 'gui/MusicOn.png', 
            name: 'musicon'
        }, 
        {
            fileName: 'gui/MusicOff.png',
            name: 'musicoff'
        },     
        {
            fileName: 'gui/NaviMarker.png', 
            name: 'navi_dot'
        },    
        {
            fileName: 'gui/NaviMarkerActive.png', 
            name: 'navi_dot_active'
        },   
        {
            fileName: 'gui/LampOff.png', 
            name: 'lamp_off'
        },  
        {
            fileName: 'gui/LampOn.png', 
            name: 'lamp_on'
        },  
        {
            fileName: 'gui/ChestGamePanel.png', 
            name: 'chestgame_panel'
        },  
        {
            fileName: 'gui/ChestOpened.png', 
            name: 'chest_opened'
        }, 
        {
            fileName: 'gui/ChestPanel.png', 
            name: 'chest_panel'
        }, 
        {
            fileName: 'gui/ChestClosed.png', 
            name: 'chest_closed'
        }, 
        {
            fileName: 'gui/ChestGameCoin.png', 
            name: 'chestgame_coin'
        }, 
    ],

    symbols:
    [
        {
            fileName: 'White.png',                      // filename or null
            name: 'White',                              // sprite name
            fileNameBlurred: 'WhiteBlurred.png',        // blurry symbol file name, folder png/SymbolsBlurred
            animation: 'CommonSheet.png',               // animation sheet file name, folder png/SymbolsSheet
            hideWinSymbol: false,                       // temporary hide the win symbol during the win animation
            useWildSubstitute: true                     // use wild substitute for the symbol
        },
        {
            fileName: 'Red.png',           
            name: 'Red',                   
            fileNameBlurred: 'RedBlurred.png', 
            animation: 'CommonSheet.png',
            hideWinSymbol: false, 
            useWildSubstitute: true
        },
        {
            fileName: 'Asymb.png',          
            name: 'Asymb',                   
            fileNameBlurred: 'AsymbBlurred.png', 
            animation: 'CommonSheet.png',
            hideWinSymbol: false, 
            useWildSubstitute: true
        },
        {
            fileName: 'Lily.png',          
            name: 'Lily',                   
            fileNameBlurred: 'LilyBlurred.png', 
            animation: 'CommonSheet.png',
            hideWinSymbol: false, 
            useWildSubstitute: true
        },
        {
            fileName: 'Brown.png',          
            name: 'Brown',                   
            fileNameBlurred: 'BrownBlurred.png', 
            animation: 'CommonSheet.png',
            hideWinSymbol: false, 
            useWildSubstitute: true
        },
        {
            fileName: 'Jsymb.png',          
            name: 'Jsymb',                   
            fileNameBlurred: 'JsymbBlurred.png', 
            animation: 'CommonSheet.png',
            hideWinSymbol: false, 
            useWildSubstitute: true
        },
        {
            fileName: 'Ksymb.png',          
            name: 'Ksymb',                   
            fileNameBlurred: 'KsymbBlurred.png', 
            animation: 'CommonSheet.png',
            hideWinSymbol: false, 
            useWildSubstitute: true
        },
        {
            fileName: 'Qsymb.png',          
            name: 'Qsymb',                   
            fileNameBlurred: 'QsymbBlurred.png', 
            animation: 'CommonSheet.png',
            hideWinSymbol: false, 
            useWildSubstitute: true
        },
        {
            fileName: 'Wild.png',          
            name: 'Wild',                   
            fileNameBlurred: 'WildBlurred.png', 
            animation: 'WildSheet.png',
            hideWinSymbol: false,
            useWildSubstitute: true
        },
        {
            fileName: 'Scatter.png',          
            name: 'Scatter',                   
            fileNameBlurred: 'ScatterBlurred.png', 
            animation: 'ScatterSheet.png',
            hideWinSymbol: false,
            useWildSubstitute: true
        },
        {
            fileName: 'Jackpot.png',          
            name: 'Jackpot',                   
            fileNameBlurred: 'JackpotBlurred.png', 
            animation: 'JackpotSheet.png',
            hideWinSymbol: false,
            useWildSubstitute: true
        }
    ],

    reels:[
        {//0
            symbolImages: ['Red', 'Brown', 'Jsymb', 'Red', 'Qsymb', 'White', 'Lily', 'Ksymb', 'Red', 'Asymb', 'Scatter', 'White'], 
            offsetX: -624,
            offsetY: -110,
            windowImage: 'reel',    // not used
            windowsCount: 3,    
            addSpinTime: 0, // additional spin time for reel milliseconds   
        },
        {//1
            symbolImages: ['Red', 'White', 'Red','Qsymb', 'Brown', 'Jsymb', 'White', 'Ksymb','Asymb', 'Lily', 'Scatter', 'White', 'Red', 'Brown', 'Lily', 'White', 'Wild'], 
            offsetX: -312,
            offsetY: -110,
            windowImage: 'reel',        // not used
            windowsCount: 3,    
            addSpinTime: 100, // additional spin time for reel milliseconds   
        },
        { // 2
            symbolImages: ['Scatter', 'Red', 'Ksymb', 'Wild', 'White', 'Jackpot', 'Qsymb', 'Jackpot', 'White', 'Brown', 'Jsymb', 'Asymb', 'Red', 'Lily', 'Wild'],
            offsetX: 0,
            offsetY: -110,
            windowImage: 'reel',        // not used
            windowsCount: 3,
            addSpinTime: 200, // additional spin time for reel milliseconds   
        },
        { // 3
            symbolImages: ['White', 'Jackpot', 'Brown', 'Jackpot', 'Jsymb', 'Qsymb', 'Red', 'Wild', 'White', 'Ksymb', 'Asymb', 'Red', 'Scatter', 'White', 'Red','Lily', 'Wild'],
            offsetX: 312,
            offsetY: -110,
            windowImage: 'reel',        // not used
            windowsCount: 3,
            addSpinTime: 300, // additional spin time for reel milliseconds     
        },
        { // 4
            symbolImages: ['White', 'Jackpot', 'Red', 'White', 'Wild','Brown', 'Jsymb', 'White', 'Qsymb', 'Asymb', 'Wild', 'Scatter','Red', 'Ksymb', 'Lily', 'Wild', 'Jackpot'],
            offsetX: 624,
            offsetY: -110,
            windowImage: 'reel',        // not used
            windowsCount: 3,
            addSpinTime: 400, // additional spin time for reel milliseconds     
        }
    ],

    // reels_simulate: [0, 0, -1, -1, -1],                  // -1 avoid reel simulate
    // reels_simulate: [10, 10, -1, -1, -1],                // >=2 scatter win 
    // reels_simulate: [-1, -1, 5, 1, 16],                  // jackpot 

    // just uncomment this piece of code and you will get 20 slot lines
    lines: [				// predefined  slot lines positions 0 - most bottom window on reels
		    [1,1,1,1,1],	// line 0 
		    [2,2,2,2,2],	// line 1 
		    [0,0,0,0,0],	// line 2 
		    [2,1,0,1,2],	// line 3 
		    [0,1,2,1,0],	// line 4 
		    [1,2,1,2,1],	// line 5 
		    [1,0,1,0,1],	// line 6 
		    [2,2,1,0,0],	// line 7 
		    [0,0,1,2,2],	// line 8 
		    [1,0,1,2,1],	// line 9 
		    [1,2,1,0,1],	// line 10 
		    [2,1,1,1,2],	// line 11 
		    [0,1,1,1,0],	// line 12 
		    [2,1,2,1,2],	// line 13 
		    [0,1,0,1,0],	// line 14 
		    [1,1,2,1,1],	// line 15 
		    [1,1,0,1,1],	// line 16 
		    [2,2,0,2,2],	// line 17 
		    [0,0,2,0,0],	// line 18 
		    [2,0,0,0,2],	// line 19 
    ],

    payLines:[
        {
            line: ['White', 'White', 'White', 'White', 'White'],
            pay: 3,
            freeSpins: 0
        },
        {
            line: ['White', 'White', 'White', 'White', 'any'],
            pay: 2,
            freeSpins: 0
        },
        {
            line: ['White', 'White', 'White', 'any', 'any'],
            pay: 1,
            freeSpins: 0
        },
        {
            line: ['Red', 'Red', 'Red', 'Red', 'Red'],
            pay: 5,
            freeSpins: 0
        },
        {
            line: ['Red', 'Red', 'Red', 'Red', 'any'],
            pay: 3,
            freeSpins: 0
        },
        {
            line: ['Red', 'Red', 'Red', 'any', 'any'],
            pay: 1,
            freeSpins: 0
        },
        {
            line: ['Brown', 'Brown', 'Brown', 'Brown', 'Brown'],
            pay: 7,
            freeSpins: 0
        },
        {
            line: ['Brown', 'Brown', 'Brown', 'Brown', 'any'],
            pay: 3,
            freeSpins: 0
        },
        {
            line: ['Brown', 'Brown', 'Brown', 'any', 'any'],
            pay: 2,
            freeSpins: 0
        },
        {
            line: ['Lily', 'Lily', 'Lily', 'Lily', 'Lily'],
            pay: 8,
            freeSpins: 0
        },
        {
            line: ['Lily', 'Lily', 'Lily', 'Lily', 'any'],
            pay: 3,
            freeSpins: 0
        },
        {
            line: ['Lily', 'Lily', 'Lily', 'any', 'any'],
            pay: 2,
            freeSpins: 0
        },
        {
            line: ['Jsymb', 'Jsymb', 'Jsymb', 'Jsymb', 'Jsymb'],
            pay: 17,
            freeSpins: 0
        },
        {
            line: ['Jsymb', 'Jsymb', 'Jsymb', 'Jsymb', 'any'],
            pay: 13,
            freeSpins: 0
        },
        {
            line: ['Jsymb', 'Jsymb', 'Jsymb', 'any', 'any'],
            pay: 11,
            freeSpins: 0
        },
        {
            line: ['Qsymb', 'Qsymb', 'Qsymb', 'Qsymb', 'Qsymb'],
            pay: 19,
            freeSpins: 0
        },
        {
            line: ['Qsymb', 'Qsymb', 'Qsymb', 'Qsymb', 'any'],
            pay: 13,
            freeSpins: 0
        },
        {
            line: ['Qsymb', 'Qsymb', 'Qsymb', 'any', 'any'],
            pay: 11,
            freeSpins: 0
        },
        {
            line: ['Ksymb', 'Ksymb', 'Ksymb', 'Ksymb', 'Ksymb'],
            pay: 20,
            freeSpins: 0
        },
        {
            line: ['Ksymb', 'Ksymb', 'Ksymb', 'Ksymb', 'any'],
            pay: 14,
            freeSpins: 0
        },
        {
            line: ['Ksymb', 'Ksymb', 'Ksymb', 'any', 'any'],
            pay: 11,
            freeSpins: 0
        },
        {
            line: ['Asymb', 'Asymb', 'Asymb', 'Asymb', 'Asymb'],
            pay: 25,
            freeSpins: 0
        },
        {
            line: ['Asymb', 'Asymb', 'Asymb', 'Asymb', 'any'],
            pay: 15,
            freeSpins: 0
        },
        {
            line: ['Asymb', 'Asymb', 'Asymb', 'any', 'any'],
            pay: 11,
            freeSpins: 0
        },
    ],
    
    scatterPayTable:[
        {
            scattersCount: 3,
            pay: 0,
            freeSpins: 3,
            winEventString: null // this method will be called when winnings are shown (slotGame-> *winShowC)
        },
        {
            scattersCount: 4,
            pay: 0,
            freeSpins: 4,
            winEventString: null // this method will be called when winnings are shown (slotGame-> *winShowC)
        },
        {
            scattersCount: 5,
            pay: 0,
            freeSpins: 0,
            winEventString: 'slotConfig.showChestsPU_6' // this method will be called when winnings are shown (slotGame-> *winShowC) - chest mini-game
        }    
    ],
    
    // jackpot settings
    jackpot:
    {
        symbolName: 'Jackpot',
        symbolsCount: 6,
        defaultAmount: 1000,        // coins amout at start
        increaseValue: 1,           // jackpot increment after spin
    },

    createSlotGraphic: function(scene){
        // scene.background =  scene.addSpriteLocPos('background', 0, 0); //?.setScale(1.5);
        // scene.background.depth = -5;

        scene.debugreference =  scene.addSpriteLocPos('debugreference', 0, -67); //?.setScale(1.5);
        scene.debugreference.depth = 2000;
        scene.debugreference.setAlpha(0.0);

        scene.slot =  scene.addSpriteLocPos('slot', 0, -95); 
        scene.slot.depth = -1;

        scene.bottomPanel =  scene.addSpriteLocPos('bottom_panel', 0, 388); 
        scene.topPanel =  scene.addSpriteLocPos('top_panel', 0, -518); 
        scene.topPanel.setDepth(11); 
        scene.paneljackpot =  scene.addSpriteLocPos('paneljackpot', 0, -520);    
        scene.paneljackpot.setDepth(11); 
    },

    createReels: function(scene) {
        var _reels = [];
        for(var ri = 0; ri < this.reels.length; ri++)
        {
            _reels.push(new Reel(scene, this.reels[ri], ri, this.symbolSizeY, this.reels[ri].windowsCount, true, this.spinTime, this.symbAnimFrameRate));
        }
        return _reels;
    },

    // optional line buttons order
    lineButtonsLeftOrder: [4, 2, 8, 10, 6, 1, 7, 9, 3, 5],
    lineButtonsRightOrder:[14, 20, 12, 18, 16, 11, 17, 13, 15, 19],

    // the number of buttons must equal the number of lines
    createLineButtons: function(scene) {
        if(!this.lineButtonsLeftOrder || !this.lineButtonsRightOrder) return null;
        var lineButtons = [];
        for(var i = 0; i < this.lineButtonsLeftOrder.length; i++)
     {
         var lB = new LineButton(scene, 'button_line', 'button_line_hover', this.lineButtonsLeftOrder[i]);
         lineButtons.push(lB); 
         lB.create(-828,  -455 + 77 * i, 0.5, 0.5, 'gameFont_2', 48);
        }

        for(var i = 0; i < this.lineButtonsRightOrder.length; i++)
        {
            var lB = new LineButton(scene, 'button_line', 'button_line_hover', this.lineButtonsRightOrder[i]);
            lineButtons.push(lB); 
            lB.create(828, -455 + 77 * i, 0.5, 0.5, 'gameFont_2', 48);
            lB.button.setScale(-1, 1);
        }

     lineButtons.sort((a, b) => a.number - b.number);
     return lineButtons;
    },

    createControls: function(scene, slotControls) {
        let depth = 11;
        slotControls.spinTextString = 'spin';

        // panels
        slotControls.linesPanel = scene.addSpriteLocPos('panel_lines', -680, 425); 
        slotControls.linesPanel.setDepth(depth); 
        slotControls.linebetPanel = scene.addSpriteLocPos('panel_linebet', -385, 425);
        slotControls.linebetPanel.setDepth(depth); 
        slotControls.totalbetPanel = scene.addSpriteLocPos('panel_totalbet', 682, 425);
        slotControls.totalbetPanel.setDepth(depth); 
        slotControls.balancePanel = scene.addSpriteLocPos('panel_balance', 388, 425); 
        slotControls.balancePanel.setDepth(depth); 
        slotControls.winPanel = scene.addSpriteLocPos('panel_win', 0, 425); 
        slotControls.winPanel.setDepth(depth); 
        // slotControls.menuPanel = scene.addSpriteLocPos('panel_menu', -730, -230); 
        // slotControls.menuPanel.setDepth(depth); 
        // slotControls.menuPanel.setVisible(false);

        // maxbet button
        slotControls.slotMaxBetButton = new SceneButton(scene, 'button_maxbet', 'button_maxbet_hover', false);   
        slotControls.buttons.push(slotControls.slotMaxBetButton);
        slotControls.slotMaxBetButton.create(-199, 350, 0.5, 0.5);
        slotControls.slotMaxBetButton.addClickEvent(slotControls.maxBet_Click, slotControls);     
        slotControls.slotMaxBetButton.setDepth(depth); 

        // autoSpin button
        slotControls.slotAutoSpinButton = new SceneButton(scene, 'button_autospin', 'button_autospin_hover', true); 
        slotControls.buttons.push(slotControls.slotAutoSpinButton);
        slotControls.slotAutoSpinButton.create(200, 350, 0.5, 0.5);
        slotControls.slotAutoSpinButton.button.setVisible(true);   
        slotControls.changeAutoSpinModeEvent.add((autoSpin)=>
        {
            if (!autoSpin)
            {
                slotControls.slotAutoSpinButton.release();
            }
        }, this);
        slotControls.slotAutoSpinButton.setDepth(depth); 

        // spin button
        slotControls.slotSpinButton = new SpinButton(scene, 'button_spin', 'button_spin_hover', false);   
        slotControls.buttons.push(slotControls.slotSpinButton);
        slotControls.slotSpinButton.create(0, 328, 0.5, 0.5);    
        slotControls.slotSpinButton.clickEvent.add(scene.handleAnimation, scene);  
        slotControls.slotSpinButton.setDepth(depth); 

        // menu button
        slotControls.menuButton = new SceneButton(scene, 'button_menu', 'button_menu_hover', true);   
        slotControls.buttons.push(slotControls.menuButton);
        slotControls.menuButton.create(-800, -530, 0.5, 0.5);
        slotControls.menuButton.addClickEvent(()=>{ 
            console.log('menu click');
            slotControls.settingsButton.button.setVisible(!slotControls.settingsButton.button.visible);  
            slotControls.rulesButton.button.setVisible(!slotControls.rulesButton.button.visible); 
            slotControls.slotInfoButton.button.setVisible(!slotControls.slotInfoButton.button.visible); 
            // slotControls.menuPanel.setVisible(!slotControls.menuPanel.visible); 
            scene.soundController.playClip('button_click');}, this);
        slotControls.menuButton.button.setVisible(true); 
        slotControls.menuButton.setDepth(depth); 

        // settings button
        slotControls.settingsButton = new SceneButton(scene, 'button_settings', 'button_settings_hover', false);   
        slotControls.buttons.push(slotControls.settingsButton);
        slotControls.settingsButton.create(-800 + 1*115, -530, 0.5, 0.5);
        slotControls.settingsButton.addClickEvent(()=>{ 
            console.log('settings click');
            var pu = scene.guiController.showPopUp(this.createSettingsPUHandler);
            scene.soundController.playClip('button_click');}, this);
        slotControls.settingsButton.button.setVisible(false);  
        slotControls.settingsButton.setDepth(depth); 

        // rules button
       slotControls.rulesButton = new SceneButton(scene, 'button_rules', 'button_rules_hover', false);   
       slotControls.buttons.push(slotControls.rulesButton);
       slotControls.rulesButton.create(-800 + 2*115, -530, 0.5, 0.5);
       slotControls.rulesButton.addClickEvent(()=>{
           var pu = scene.guiController.showPopUp(this.createInfoPUHandler);
           scene.soundController.playClip('button_click');
       }, this);   
       slotControls.rulesButton.button.setVisible(false); 
       slotControls.rulesButton.setDepth(depth); 

       // info button
       slotControls.slotInfoButton = new SceneButton(scene, 'button_info', 'button_info_hover', false);   
       slotControls.buttons.push(slotControls.slotInfoButton);
       slotControls.slotInfoButton.create(-800 + 3*115, -530, 0.5, 0.5);
       slotControls.slotInfoButton.addClickEvent(()=>{
            console.log('info click');
           var pu = scene.guiController.showPopUp(this.createAboutPUHandler);
           scene.soundController.playClip('button_click');
       }, this);   
       slotControls.slotInfoButton.button.setVisible(false); 
       slotControls.slotInfoButton.setDepth(depth); 

        // totalbet minus button - not used
        /*
        slotControls.totalBetMinusButton = new SceneButton(scene, 'button_minus','button_minus_hover', false);   
        slotControls.buttons.push(slotControls.totalBetMinusButton);
        slotControls.totalBetMinusButton.create(-373 - 102, 401, 0.5, 0.5);
        slotControls.totalBetMinusButton.addClickEvent(slotControls.lineBetMinus_Click, slotControls);
        slotControls.totalBetMinusButton.setDepth(depth); 
        */
        // totalbet plus button - not used
        /*
        slotControls.totalBetPlusButton = new SceneButton(scene, 'button_plus','button_plus_hover', false);   
        slotControls.buttons.push(slotControls.totalBetPlusButton);
        slotControls.totalBetPlusButton.create(-373 + 100, 401, 0.5, 0.5);
        slotControls.totalBetPlusButton.addClickEvent(slotControls.lineBetPlus_Click, slotControls);
        slotControls.totalBetPlusButton.setDepth(depth);        
        */
        // sound button
        // slotControls.soundButton = new SceneButton(scene, 'button_on', 'button_off', true);   
        // slotControls.buttons.push(slotControls.soundButton);
        // slotControls.soundButton.create(-860, -300, 0.5, 0.5);
        // slotControls.soundButton.addClickEvent(()=>{scene.soundController.soundOn(!scene.soundController._soundOn);}, scene);
        // slotControls.soundButton.button.setVisible(true); 

        // lines loop button - not used
        // slotControls.slotLinesLoopButton = new SceneButton(scene, 'button_lines', 'button_lines_hover', false);   
        // slotControls.buttons.push(slotControls.slotLinesLoopButton);
        // slotControls.slotLinesLoopButton.create(-700, 212 + 220, 0.5, 0.5);
        // slotControls.slotLinesLoopButton.addClickEvent(slotControls.linesLoop_Click, slotControls);

        // lines minus button 
         slotControls.linesMinusButton = new SceneButton(scene, 'button_minus','button_minus_hover', false);   
         slotControls.buttons.push(slotControls.linesMinusButton);
         slotControls.linesMinusButton.create(-680 - 95, 428, 0.5, 0.5);
         slotControls.linesMinusButton.addClickEvent(slotControls.linesMinus_Click, slotControls);
         slotControls.linesMinusButton.setDepth(depth); 
         
        // lines plus button 
         slotControls.linesPlusButton = new SceneButton(scene, 'button_plus','button_plus_hover', false);   
         slotControls.buttons.push(slotControls.linesPlusButton);
         slotControls.linesPlusButton.create(-680 + 95, 428, 0.5, 0.5);
         slotControls.linesPlusButton.addClickEvent(slotControls.linesPlus_Click, slotControls);
         slotControls.linesPlusButton.setDepth(depth); 

        // line bet minus button 
        slotControls.lineBetMinusButton = new SceneButton(scene, 'button_minus','button_minus_hover', false);   
        slotControls.buttons.push(slotControls.lineBetMinusButton);
        slotControls.lineBetMinusButton.create(-385 - 95, 428, 0.5, 0.5);
        slotControls.lineBetMinusButton.addClickEvent(slotControls.lineBetMinus_Click, slotControls);
        slotControls.lineBetMinusButton.setDepth(depth); 
        
       // line bet plus button 
        slotControls.lineBetPlusButton = new SceneButton(scene, 'button_plus','button_plus_hover', false);   
        slotControls.buttons.push(slotControls.lineBetPlusButton);
        slotControls.lineBetPlusButton.create(-385 + 95, 428, 0.5, 0.5);
        slotControls.lineBetPlusButton.addClickEvent(slotControls.lineBetPlus_Click, slotControls);
        slotControls.lineBetPlusButton.setDepth(depth); 

        // adding the text fields
        slotControls.linesText = scene.add.bitmapText(scene.centerX - 780, scene.centerY + 370, 'gameFont_2', 'Lines', 41, 1).setOrigin(0.5);
        slotControls.linesText.depth = depth;
        slotControls.linesCountText = scene.add.bitmapText(scene.centerX - 680, scene.centerY + 425, 'gameFont_1', slotControls.selectedLinesCount, 48, 1).setOrigin(0.5);
        slotControls.linesCountText.depth = depth;

        slotControls.lineBetText = scene.add.bitmapText(scene.centerX - 462, scene.centerY + 370, 'gameFont_2', 'Line Bet', 41, 1).setOrigin(0.5);
        slotControls.lineBetText.depth = depth;
        slotControls.lineBetAmountText = scene.add.bitmapText(scene.centerX - 385, scene.centerY + 425, 'gameFont_1', slotControls.lineBet, 48, 1).setOrigin(0.5);
        slotControls.lineBetAmountText.depth = depth;
 
        slotControls.totalBetText = scene.add.bitmapText(scene.centerX + 747, scene.centerY + 370, 'gameFont_2', 'Total Bet', 41, 1).setOrigin(0.5);
        slotControls.totalBetText.depth = depth; 
        slotControls.totalBetSumText = scene.add.bitmapText(scene.centerX + 801, scene.centerY + 425, 'gameFont_1', slotControls.getTotalBet(), 48, 1).setOrigin(1, 0.5);
        slotControls.totalBetSumText.depth = depth;
 
        slotControls.creditText = scene.add.bitmapText(scene.centerX + 465, scene.centerY + 370, 'gameFont_2', 'Balance', 41, 1).setOrigin(0.5);
        slotControls.creditText.depth = depth;
        slotControls.creditSumText = scene.add.bitmapText(scene.centerX + 450, scene.centerY + 425, 'gameFont_1', '' + scene.slotPlayer.coins, 48, 1).setOrigin(0.5);
        slotControls.creditSumText.depth = depth;
         
        slotControls.winText = scene.add.bitmapText(scene.centerX - 125, scene.centerY + 425, 'gameFont_2', 'Win', 41, 1).setOrigin(0, 0.5);
        slotControls.winText.depth = depth;
        slotControls.winAmountText = scene.add.bitmapText(scene.centerX + 132, scene.centerY + 425, 'gameFont_1', '0', 48, 1).setOrigin(1, 0.5);
        slotControls.winAmountText.depth = depth;

        slotControls.jackpotText = scene.add.bitmapText(scene.centerX - 190, scene.centerY - 520, 'gameFont_2', 'Jackpot', 48, 1).setOrigin(0, 0.5);
        slotControls.jackpotText.setVisible(true);
        slotControls.jackpotText.depth = depth;
        slotControls.jackpotAmountText = scene.add.bitmapText(scene.centerX + 190, scene.centerY - 520, 'gameFont_1', '0', 48, 1).setOrigin(1, 0.5);
        slotControls.jackpotAmountText.setVisible(true);
        slotControls.jackpotAmountText.depth = depth;

        slotControls.autoSpinText = scene.add.bitmapText(scene.centerX + 122, scene.centerY + 163 + 220, 'gameFont_2', 'AUTO', 37, 1).setOrigin(0.5);
        slotControls.autoSpinText.setLetterSpacing(-5);
        slotControls.autoSpinText.depth = depth;
        slotControls.autoSpinText.setVisible(false);

        slotControls.autoSpinText1 = scene.add.bitmapText(scene.centerX + 122, scene.centerY + 190 + 220, 'gameFont_2', 'SPIN', 37, 1).setOrigin(0.5);
        slotControls.autoSpinText1.setLetterSpacing(-1);
        slotControls.autoSpinText1.depth = depth;
        slotControls.autoSpinText1.setVisible(false);

        slotControls.maxBetText = scene.add.bitmapText(scene.centerX - 122, scene.centerY + 163 + 220, 'gameFont_2', 'MAX', 37, 1).setOrigin(0.5);
        slotControls.maxBetText.setLetterSpacing(-6);
        slotControls.maxBetText.depth = depth;
        slotControls.maxBetText.setVisible(false);

        slotControls.maxBetText1 = scene.add.bitmapText(scene.centerX - 124, scene.centerY + 190 + 220, 'gameFont_2', 'BET', 37, 1).setOrigin(0.5);
        slotControls.maxBetText1.setLetterSpacing(4);
        slotControls.maxBetText1.depth = depth;
        slotControls.maxBetText1.setVisible(false);
        
        slotControls.spinText = scene.add.bitmapText(scene.centerX - 0, scene.centerY + 308, 'gameFont_3', slotControls.spinTextString, 72, 1).setOrigin(0.5);
        slotControls.spinText.setLetterSpacing(5);
        slotControls.spinText.depth = depth;

        slotControls.infoText = scene.add.bitmapText(scene.centerX, scene.centerY + 400 + 200, 'gameFont_2', 'info', 30, 1).setOrigin(0.5);
        slotControls.infoText.setVisible(false);
        slotControls.infoText.depth = depth;

        slotControls.freeSpinCountText = scene.add.bitmapText(scene.centerX, scene.centerY + 400 + 200, 'gameFont_1', '99', 130, 1).setOrigin(0.5); // not used
        slotControls.freeSpinCountText.setVisible(false);
        slotControls.freeSpinCountText.depth = depth;

        // hold feature - not used
        /*
        slotControls.holdButtons = [];
        for(var ri = 0; ri < this.reels.length; ri++)
        {
            var butt = 'holdButton' + ri;
            slotControls[butt] = new SceneButton(scene, 'button_hold', 'button_hold_on', true);   
            slotControls.buttons.push(slotControls[butt]);
            slotControls.holdButtons.push(slotControls[butt]);
            slotControls[butt].create(-624 + ri * 312, -480, 0.5, 0.5);
            slotControls[butt].setDepth(depth); 
            slotControls[butt].button.setVisible(true); 
            slotControls[butt].reelNumber = ri;
        }

         slotControls.holdMultiplierTextL = scene.add.bitmapText(scene.centerX - 880, scene.centerY - 130, 'gameFont_1', 'x 1', 84, 1).setOrigin(1, 0.5);      // left side text
         slotControls.holdMultiplierTextL.setVisible(true);
         slotControls.holdMultiplierTextL.depth = depth -1;
         slotControls.holdMultiplierTextR = scene.add.bitmapText(scene.centerX + 890, scene.centerY - 130, 'gameFont_1', 'x 1', 84, 1).setOrigin(0, 0.5);      // right side text
         slotControls.holdMultiplierTextR.setVisible(true);
         slotControls.holdMultiplierTextR.depth = depth - 1;

         slotControls.hold = new HoldFeature(scene, slotControls.holdButtons, this.maxHold); // create hold feature 
        */
    },
   
    createInfoPUHandler: function(popup)
    {
        function createSymbolPlate5x (popup, parentContainer, symbSpriteName, posX, posY, price3x,price4x, price5x)
        {
            let symbContainer = popup.scene.add.container(posX, posY);
            parentContainer.add(symbContainer);
            let symbPanel = popup.scene.add.sprite(30, 0, 'symbol_plate').setOrigin(0.5);
            symbContainer.add(symbPanel);
            let symbIcon = popup.scene.add.sprite(-100, 0, symbSpriteName).setOrigin(0.5).setScale(0.8);
            symbContainer.add(symbIcon);
    
            let textXPos = -0;
            let text3x = popup.scene.add.bitmapText(textXPos, 40, 'gameFont_2', '3X', 45, 1).setOrigin(0, 0.5);
            symbContainer.add(text3x);
            let text3x1 = popup.scene.add.bitmapText(textXPos + 55, 40, 'gameFont_1', '- ' + price3x, 45, 1).setOrigin(0, 0.5);
            symbContainer.add(text3x1);
    
            let text4x = popup.scene.add.bitmapText(textXPos, 0, 'gameFont_2', '4X', 45, 1).setOrigin(0, 0.5);
            symbContainer.add(text4x);
            let text4x1 = popup.scene.add.bitmapText(textXPos + 55, 0, 'gameFont_1', '- ' + price4x, 45, 1).setOrigin(0, 0.5);
            symbContainer.add(text4x1);

            let text5x = popup.scene.add.bitmapText(textXPos, -40, 'gameFont_2', '5X', 45, 1).setOrigin(0, 0.5);
            symbContainer.add(text5x);
            let text5x1 = popup.scene.add.bitmapText(textXPos + 55, -40, 'gameFont_1', '- ' + price5x, 45, 1).setOrigin(0, 0.5);
            symbContainer.add(text5x1);
        };

        function createSpecSymbolPlate(popup, parentContainer, symbSpriteName, posX, posY, info)
        {
            let symbContainer = popup.scene.add.container(posX, posY);
            parentContainer.add(symbContainer);
            let symbIcon = popup.scene.add.sprite(0, 0, symbSpriteName).setOrigin(0.5, 0.5).setScale(0.8);
            symbContainer.add(symbIcon);
    
            let textInfo = popup.scene.add.bitmapText(145, 0, 'gameFont_2', info, 34, 0).setOrigin(0, 0.5);
            // textInfo.tint = 0xd675dc;
            symbContainer.add(textInfo);
        };
    
        function refreshInfoPu (containers, selectors, index)
        {
            for(let i = 0; i < containers.length; i++)
            {
                containers[i].visible = (index === i);
                if(popup.scene.textures.exists('navi_dot_active') && popup.scene.textures.exists('navi_dot'))
                {
                    selectors[i].setTexture((index === i) ? 'navi_dot_active' : 'navi_dot');
                }
            }
        };

        let index = 0;
        let containers = [];
        let selectors = [];
        let offsetY = -100;

        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0 + offsetY, 'white_bkg').setOrigin(0.5).setScale(2000); 
        backGround.setInteractive(); // block bottom controls
        backGround.tint = 0x51443d;
        popup.add(backGround);

        let panel = popup.scene.add.sprite(15, -33 + offsetY, 'info_panel').setOrigin(0.5);
        popup.add(panel);

        // let title = popup.scene.add.sprite(0, -388 + offsetY, 'help_title').setOrigin(0.5);
        // popup.add(title);

        popup.addButton('exitButton','exit_button', 'exit_button_hover', false, 682, -375 + offsetY);
        popup.addButton('nextButton','next_button', 'next_button_hover', false, 200, 500 + offsetY);
        popup.addButton('prevButton','prev_button', 'prev_button_hover', false, -200, 500 + offsetY);
        popup['exitButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['nextButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['prevButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);

        popup['exitButton'].clickEvent.add(()=>{popup.scene.guiController.closePopUp(popup);});

        popup['nextButton'].clickEvent.add(()=>
        {
            if(index < containers.length - 1) index++;
            else index = 0;
            refreshInfoPu(containers, selectors, index);
        }, this);

        popup['prevButton'].clickEvent.add(()=>
        {
            if(index > 0) index--;
            else index = containers.length - 1;
            refreshInfoPu(containers, selectors, index);
        }, this);

        // create paylines panel
        let linesContainer = popup.scene.add.container(0, 0 + offsetY);
        containers.push(linesContainer);
        popup.add(linesContainer);
        let linesTitle = popup.scene.add.bitmapText(0, -380, 'gameFont_1', 'Pay Lines', 100, 1).setOrigin(0.5); // text  popup.scene.add.sprite(0, -305, 'paylines_title').setOrigin(0.5);
        linesContainer.add(linesTitle);
        let linesTable =  popup.scene.add.sprite(0, -40, 'paylines_table').setOrigin(0.5);
        linesContainer.add(linesTable);
        let linesText = popup.scene.add.bitmapText(0, 250, 'gameFont_2', 
        'Bet lines win if the winning symbols are in succession from the leftmost reel to right', 40, 1).setOrigin(0.5);
        linesContainer.add(linesText);

        // create minor symbols panel
        let minorContainer = popup.scene.add.container(0, 0 + offsetY);
        containers.push(minorContainer);
        popup.add(minorContainer);
        let minorTitle = popup.scene.add.bitmapText(0, -380, 'gameFont_1', 'Minor Symbols', 100, 1).setOrigin(0.5); // popup.scene.add.sprite(0, -410, 'minor_title').setOrigin(0.5); // image
        minorContainer.add(minorTitle);

        let row1Y = -150;
        let row2Y = row1Y + 280;
        let col1X = -500;
        let colDist = 500;
        let col2X = col1X + colDist;
        let col3X = col2X + colDist;

        // minor row 1
        createSymbolPlate5x(popup, minorContainer, 'White',  col1X + 0.5 * colDist, row1Y, 1, 2, 3);
        createSymbolPlate5x(popup, minorContainer, 'Red', col2X + 0.5 * colDist, row1Y, 1, 3, 5);

        // minor row 2
        createSymbolPlate5x(popup, minorContainer, 'Brown', col1X + 0.5 * colDist, row2Y, 2, 3, 7);
        createSymbolPlate5x(popup, minorContainer, 'Lily', col2X + 0.5 * colDist, row2Y, 2, 3, 8);
        minorContainer.visible = false;

        // create major symbols panel
        let majorContainer = popup.scene.add.container(0, 0 + offsetY);
        containers.push(majorContainer);
        popup.add(majorContainer);
        let majorTitle = popup.scene.add.bitmapText(0, -380, 'gameFont_1', 'Major  Symbols', 100, 1).setOrigin(0.5); // popup.scene.add.sprite(0, -410, 'major_title').setOrigin(0.5); // image
        majorContainer.add(majorTitle);

        // major row 1
        createSymbolPlate5x(popup, majorContainer , 'Jsymb', col1X + 0.5 * colDist, row1Y, 11, 13, 17);
        createSymbolPlate5x(popup, majorContainer , 'Qsymb', col2X + 0.5 * colDist, row1Y, 11, 13, 19);

        // major row 2
        createSymbolPlate5x(popup, majorContainer , 'Ksymb', col1X + 0.5 * colDist, row2Y, 11, 14, 20);
        createSymbolPlate5x(popup, majorContainer , 'Asymb', col2X + 0.5 * colDist, row2Y, 11, 15, 25);
        majorContainer.visible = false;

        // create special symbols panel
        let specialContainer = popup.scene.add.container(0, 0 + offsetY);
        containers.push(specialContainer);
        popup.add(specialContainer);
        let specialTitle = popup.scene.add.bitmapText(0, -380, 'gameFont_1', 'Special  Symbols', 100, 1).setOrigin(0.5); // popup.scene.add.sprite(0, -410, 'special_title').setOrigin(0.5); // image
        specialContainer.add(specialTitle);
    
        // special row 1
        createSpecSymbolPlate(popup, specialContainer, 'Wild', -423, -200 + 5, 'Wild can be used with any symbols on the reels to create \nwinning combinations (exclude first reel).');
        createSpecSymbolPlate(popup, specialContainer, 'Scatter', -423 , -20 + 5, 
        'Any 5 scatter symbols on the screen trigger a big mini-game.\n'+
        'Any 4 scatter  on the screen  give the player 4 free spins.\n'+
        'Any 3 scatter  on the screen  give the player 3 free spins.');
        createSpecSymbolPlate(popup, specialContainer, 'Jackpot', -423 , 170 + 5, 'Any 6 jackot symbols scattered on the screen = Jackpot Win.');
        specialContainer.visible = false;

        // create rules panel
        let rulesContainer = popup.scene.add.container(0, 0 + offsetY);
        containers.push(rulesContainer);
        popup.add(rulesContainer);
        let rulesTitle =  popup.scene.add.bitmapText(0, -380, 'gameFont_1', 'Rules', 100, 1).setOrigin(0.5); //popup.scene.add.sprite(0, -410, 'rules_title').setOrigin(0.5); // image
        rulesContainer.add(rulesTitle);

        let aboutTitle = popup.scene.add.bitmapText(-635, -140 - 85, 'gameFont_1', 'About the game', 60, 0).setOrigin(0,0.5); // text
        rulesContainer.add(aboutTitle);
        let aboutText = popup.scene.add.bitmapText(-635, -100 - 85, 'gameFont_2',
        'Donuts slot is a pack of Slot Games with 5 reels and  20 paylines  oriented from \n' +
        'left  to  right. The games have 8 regular symbols that win  if  three or  more  are \n'+  
        'lined  up in sequence on  a  payline, beginning from the leftmost  position. The 4 \n'+
        'high pay symbols and the 4 low pay symbols. The slot also features a chest mini-game.', 40, 0).setOrigin(0, 0); // text
        rulesContainer.add(aboutText);


        let howTitle = popup.scene.add.bitmapText(-635, 80, 'gameFont_1', 'How to play', 60, 0).setOrigin(0,0.5); // text
        rulesContainer.add(howTitle);
        let howText = popup.scene.add.bitmapText(-635, 120, 'gameFont_2',
        '- Place your bet \n- Press the Spin button to start game \n- You can also use Max Bet button to auto bet', 40, 0).setOrigin(0, 0); // text
        rulesContainer.add(howText);

        // create navi selectors
        let dotDist = 50;
        let offsetDots = dotDist * (containers.length - 1) / 2;
        if(popup.scene.textures.exists('navi_dot_active') && popup.scene.textures.exists('navi_dot'))
        {
            for(let i = 0; i < containers.length; i++)
            {
                var selector = popup.scene.add.sprite(-offsetDots + i * dotDist, 490 + offsetY, 'navi_dot').setOrigin(0.5);
                selectors.push(selector);
                popup.add(selector);
            }
        }
        refreshInfoPu(containers, selectors, index);
    },

    createAboutPUHandler: function(popup)
    {     
        let yOffset = -70;
        // add background and panel
        let backGround = popup.scene.add.sprite(-10, 0 + yOffset, 'white_bkg').setOrigin(0.5).setScale(2000); // popup.scene.add.sprite(0, 0 + yOffset, 'pu_background').setOrigin(0.5).setScale(1);
        backGround.setInteractive(); // block bottom controls
        backGround.tint = 0x51443d;
        popup.add(backGround);

        let panel = popup.scene.add.sprite(20, -38 + yOffset, 'about_panel').setOrigin(0.5);
        popup.add(panel);

        // add title
        // popup.title = popup.scene.add.bitmapText(0, -145 + yOffset, 'gameFont_1', 'About', 80, 1).setOrigin(0.5);
        // popup.add(popup.title);

        // add logo
        let logo = popup.scene.add.sprite(0, -110 + yOffset, 'logo').setOrigin(0.5);
        popup.add(logo);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, 55 + yOffset, 'gameFont_2', 'Need Help?', 42, 1).setOrigin(0.5);
        popup.messageText.setLetterSpacing(1.2);
        popup.add(popup.messageText);

        // add buttons
        popup.addButton('supportButton','long_button', 'long_button_hover', false, 0, 150 + yOffset);
        popup.addButton('exitButton','exit_button', 'exit_button_hover', false, 228, -315  + yOffset);

        popup['supportButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['supportButton'].clickEvent.add(()=>{window.open("http://www.mkeystudio.com"); }, popup);
        
        popup['exitButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['exitButton'].clickEvent.add(()=>{popup.scene.guiController.closePopUp(popup);});

        // add support button text
        popup.supText = popup.scene.add.bitmapText(0, 135 + yOffset, 'gameFont_2', 'Support', 48, 1).setOrigin(0.5);
        // popup.supText.setLetterSpacing(6);
        popup.add(popup.supText);
    },

    createSettingsPUHandler: function(popup)
    {    
        function refreshIcons (popup)
        {
            popup.soundIcon.setTexture( popup.scene.soundController._soundOn ? 'soundon' : 'soundoff');
            popup.musicIcon.setTexture( popup.scene.soundController._musicOn ? 'musicon' : 'musicoff');
            // console.log('refresh');
        }

        let yOffset = -70;   
        // add background and panel
        let backGround = popup.scene.add.sprite(-10, 0 + yOffset, 'white_bkg').setOrigin(0.5).setScale(2000); 
        backGround.setInteractive(); // block bottom controls
        backGround.tint = 0x51443d;
        popup.add(backGround);

        let panel = popup.scene.add.sprite(13, -15 + yOffset, 'settings_panel').setOrigin(0.5);
        popup.add(panel);

        // add title
        // let title = popup.scene.add.sprite(0, -300 + yOffset, 'settings_title').setOrigin(0.5);
        // popup.add(title);

        // sound and music text
        popup.soundText = popup.scene.add.bitmapText(0, -165 + yOffset, 'gameFont_2', 'Audio', 48, 1).setOrigin(0.5);
        popup.soundText.setLetterSpacing(1.2);
        popup.add(popup.soundText);


        // sound and music buttons
        popup.addButton('soundButton','button_on', 'button_off', true, -96, -73 + yOffset);
        popup.addButton('musicButton','button_on', 'button_off', true,  190, -73 + yOffset);

        popup['soundButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['soundButton'].clickEvent.add(()=>{popup.scene.soundController.soundOn(!popup.scene.soundController._soundOn);refreshIcons (popup);}, popup);
        if(!popup.scene.soundController._soundOn) popup['soundButton'].setPressed();

        popup['musicButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['musicButton'].clickEvent.add(()=>{popup.scene.soundController.musicOn(!popup.scene.soundController._musicOn);refreshIcons (popup);}, popup);
        if(!popup.scene.soundController._musicOn) popup['musicButton'].setPressed();

        popup.soundIcon = popup.scene.add.sprite(-231, -82 + yOffset, 'soundon').setOrigin(0.5);
        popup.add(popup.soundIcon);
        popup.musicIcon = popup.scene.add.sprite(56, -82 + yOffset, 'musicon').setOrigin(0.5);
        popup.add(popup.musicIcon);

        // privacy ant terms buttons
//        popup.addButton('privacyButton','extralong_button', 'extralong_button_hover', false, -2, 83 + yOffset);
        popup.addButton('exitButton','exit_button', 'exit_button_hover', false, 295, -295 + yOffset);
//        popup.addButton('termsButton','extralong_button', 'extralong_button_hover', false, -2, 183 + yOffset);

//        popup['privacyButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
//        popup['privacyButton'].clickEvent.add(()=>{window.open("http://www.mkeystudio.com"); }, popup);
//        
//        popup['termsButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
//        popup['termsButton'].clickEvent.add(()=>{window.open("http://www.mkeystudio.com"); }, popup);

        popup['exitButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['exitButton'].clickEvent.add(()=>{popup.scene.guiController.closePopUp(popup);});

        // privacy ant terms buttons text
//        popup.privacyText = popup.scene.add.bitmapText(2, 70 + yOffset, 'gameFont_1', 'Privacy Policy', 48, 1).setOrigin(0.5);
//        popup.privacyText.setLetterSpacing(1.6);
//        popup.add(popup.privacyText);

//        popup.termsText = popup.scene.add.bitmapText(2, 170 + yOffset, 'gameFont_1', 'Terms of use', 48, 1).setOrigin(0.5);
//        popup.termsText.setLetterSpacing(1.6);
//        popup.add(popup.termsText);
        refreshIcons(popup);
    },

    createFreeGamesPUHandler: function(popup)
    {
        let yOffset = -70;   
        // add background and panel
        let backGround = popup.scene.add.sprite(-10, 0 + yOffset, 'white_bkg').setOrigin(0.5).setScale(2000); 
        backGround.setInteractive(); // block bottom controls
        backGround.tint = 0x51443d;
        popup.add(backGround);

        let panel = popup.scene.add.sprite(0, -5 + yOffset, 'freespin_panel').setOrigin(0.5);
        popup.add(panel);

        // popup.captionText = popup.scene.add.bitmapText(0, -30 + yOffset, 'gameFont_2', 'Free Spins', 94, 1).setOrigin(0.5);
        // popup.captionText.setLetterSpacing(1.4);
        // popup.add(popup.captionText);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, -30 + yOffset, 'gameFont_1', '0', 86, 1).setOrigin(0.5);
        popup.messageText.setLetterSpacing(1.4);
        popup.add(popup.messageText);

        // add buttons
        popup.addButton('okButton','long_button', 'long_button_hover', false, 0, 270 + yOffset);
        popup['okButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['okButton'].clickEvent.add(()=>{popup.scene.guiController.closePopUp(popup);});
        // add button text
        popup.okText = popup.scene.add.bitmapText(0, 253 + yOffset, 'gameFont_2', 'Start', 50, 1).setOrigin(0.5);
        popup.add(popup.okText);

        // add lamps
        let lampsArray = [];
        function addLamp(posX, posY)
        {
            var lamp = new Lamp (popup.scene, posX, posY, false, 'lamp_off', 'lamp_on', panel.depth + 1);  // ,
            popup.add(lamp.lamp);
            lampsArray.push(lamp);
        }

        addLamp(134, -174); addLamp(151, -97); addLamp(127, -18);
        addLamp(-134, -174); addLamp(-151, -97); addLamp(-127, -18);
        popup.lampsTimeCoder = new TimeCoder(this, '010111010111', 200, (on)=>{lampsArray.forEach((l)=>{l.setOn(on);})}); 
         function update(time, delta) // lamps blink
         {
            popup.lampsTimeCoder.update(delta);
         }

         function closeHandler()
         {
             popup.scene.updateEvent.remove(update);
         }
         popup.scene.updateEvent.add(update, this);
         popup.closeEvent.add(closeHandler, this);
    },

    createFreeSpinsWinPUHandler: function(popup)
    {
        let yOffset = -70;   
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0 + yOffset, 'white_bkg').setOrigin(0.5).setScale(2000);
        backGround.setInteractive(); // block bottom controls
        backGround.setAlpha(0.2);
        backGround.tint = 0x51443d;
        popup.add(backGround);
        let panel = popup.scene.add.sprite(0, -5 + yOffset, 'freespin_panel').setOrigin(0.5);
        popup.add(panel);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, -30 + yOffset, 'gameFont_1', '0', 86, 1).setOrigin(0.5);
        popup.messageText.setLetterSpacing(1.4);
        popup.add(popup.messageText);

        // add lamps
        let lampsArray = [];
        function addLamp(posX, posY)
        {
            var lamp = new Lamp (popup.scene, posX, posY, false, 'lamp_off', 'lamp_on', panel.depth + 1);  // ,
            popup.add(lamp.lamp);
            lampsArray.push(lamp);
        }

        addLamp(134, -174); addLamp(151, -97); addLamp(127, -18);
        addLamp(-134, -174); addLamp(-151, -97); addLamp(-127, -18);
        popup.lampsTimeCoder = new TimeCoder(this, '010111010111', 200, (on)=>{lampsArray.forEach((l)=>{l.setOn(on);})}); 
         function update(time, delta) // lamps blink
         {
            popup.lampsTimeCoder.update(delta);
         }

         function closeHandler()
         {
             popup.scene.updateEvent.remove(update);
         }
         popup.scene.updateEvent.add(update, this);
         popup.closeEvent.add(closeHandler, this);
    },

    createBigWinPUHandler: function(popup)
    {
        let yOffset = -70; 
        // add background and panel
        let backGround = popup.scene.add.sprite(-10, 0 + yOffset, 'white_bkg').setOrigin(0.5).setScale(2000); 
        backGround.setInteractive(); // block bottom controls
        backGround.tint = 0x51443d;
        popup.add(backGround);
 
        let panel = popup.scene.add.sprite(0, -5 + yOffset, 'bigwin_panel').setOrigin(0.5); // -110
        popup.add(panel);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, -30 + yOffset, 'gameFont_1', '0', 86, 1).setOrigin(0.5); // 190
        popup.messageText.setLetterSpacing(1.4);
        popup.add(popup.messageText);

         // add lamps
         let lampsArray = [];
         function addLamp(posX, posY)
         {
            var lamp = new Lamp (popup.scene, posX, posY, false, 'lamp_off', 'lamp_on', panel.depth + 1);  // ,
            popup.add(lamp.lamp);
            lampsArray.push(lamp);
         }
     
         addLamp(175, -174); addLamp(190, -97); addLamp(172, -18);
         addLamp(-175, -174); addLamp(-190, -97); addLamp(-172, -18);

    
         popup.lampsTimeCoder = new TimeCoder(this, '010111010111', 200, (on)=>{lampsArray.forEach((l)=>{l.setOn(on);})}); 

         function update(time, delta) // lamps blink
         {
            popup.lampsTimeCoder.update(delta);
         }
 
         function closeHandler()
         {
             popup.scene.updateEvent.remove(update);
             // console.log('stop big win Update')
         }
         popup.scene.updateEvent.add(update, this);
         popup.closeEvent.add(closeHandler, this);
    },

    createHugeWinPUHandler: function(popup)
    {
        let yOffset = -70; 
        // add background and panel
        let backGround = popup.scene.add.sprite(-10, 0 + yOffset, 'white_bkg').setOrigin(0.5).setScale(2000); 
        backGround.setInteractive(); // block bottom controls
        backGround.tint = 0x51443d;
        popup.add(backGround);
 
        let panel = popup.scene.add.sprite(0, -5 + yOffset, 'hugewin_panel').setOrigin(0.5); // -110
        popup.add(panel);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, -30 + yOffset, 'gameFont_1', '0', 86, 1).setOrigin(0.5); // 190
        popup.messageText.setLetterSpacing(1.4);
        popup.add(popup.messageText);

         // add lamps
         let lampsArray = [];
         function addLamp(posX, posY)
         {
            var lamp = new Lamp (popup.scene, posX, posY, false, 'lamp_off', 'lamp_on', panel.depth + 1);  // ,
            popup.add(lamp.lamp);
            lampsArray.push(lamp);
         }
     
        // addLamp(-57, -240); addLamp(0, -250); addLamp(57, -240);
         addLamp(175, -174); addLamp(190, -97); addLamp(172, -18);
         addLamp(-175, -174); addLamp(-190, -97); addLamp(-172, -18);

         popup.lampsTimeCoder = new TimeCoder(this, '010111010111', 200, (on)=>{lampsArray.forEach((l)=>{l.setOn(on);})}); 

         function update(time, delta) // lamps blink
         {
            popup.lampsTimeCoder.update(delta);
         }
 
         function closeHandler()
         {
             popup.scene.updateEvent.remove(update);
         }
         popup.scene.updateEvent.add(update, this);
         popup.closeEvent.add(closeHandler, this);
    },

    createMegaWinPUHandler: function(popup)
    {
        let yOffset = -70; 
        // add background and panel
        let backGround = popup.scene.add.sprite(-10, 0 + yOffset, 'white_bkg').setOrigin(0.5).setScale(2000); 
        backGround.setInteractive(); // block bottom controls
        backGround.tint = 0x51443d;
        popup.add(backGround);
 
        let panel = popup.scene.add.sprite(0, -5 + yOffset, 'megawin_panel').setOrigin(0.5); // -110
        popup.add(panel);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, -30 + yOffset, 'gameFont_1', '0', 86, 1).setOrigin(0.5); // 190
        popup.messageText.setLetterSpacing(1.4);
        popup.add(popup.messageText);

         // add lamps
         let lampsArray = [];
         function addLamp(posX, posY)
         {
            var lamp = new Lamp (popup.scene, posX, posY, false, 'lamp_off', 'lamp_on', panel.depth + 1);  // ,
            popup.add(lamp.lamp);
            lampsArray.push(lamp);
         }
     
         // addLamp(-145, -168); addLamp(-110, -213); addLamp(110, -213);addLamp(145, -168);
         // addLamp(-57, -240); addLamp(0, -250); addLamp(57, -240);
         addLamp(175, -174); addLamp(190, -97); addLamp(172, -18);
         addLamp(-175, -174); addLamp(-190, -97); addLamp(-172, -18);
 
         popup.lampsTimeCoder = new TimeCoder(this, '010111010111', 200, (on)=>{lampsArray.forEach((l)=>{l.setOn(on);})}); 

         function update(time, delta) // lamps blink
         {
            popup.lampsTimeCoder.update(delta);
         }
 
         function closeHandler()
         {
             popup.scene.updateEvent.remove(update);
         }
         popup.scene.updateEvent.add(update, this);
         popup.closeEvent.add(closeHandler, this);
    },

    createJackpotWinPUHandler: function(popup)
    {
        let yOffset = -70; 
        // add background and panel
        let backGround = popup.scene.add.sprite(-10, 0 + yOffset, 'white_bkg').setOrigin(0.5).setScale(2000); 
        backGround.setInteractive(); // block bottom controls
        backGround.tint = 0x51443d;
        popup.add(backGround);
 
        let panel = popup.scene.add.sprite(0, -5 + yOffset, 'jackpotwin_panel').setOrigin(0.5); // -110
        popup.add(panel);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, -30 + yOffset, 'gameFont_1', '0', 86, 1).setOrigin(0.5); // 190
        // popup.messageText.setLetterSpacing(1.4);
        popup.add(popup.messageText);

         // add lamps
         let lampsArray = [];
         function addLamp(posX, posY)
         {
            var lamp = new Lamp (popup.scene, posX, posY, false, 'lamp_off', 'lamp_on', panel.depth + 1);  // ,
            popup.add(lamp.lamp);
            lampsArray.push(lamp);
         }
     
         //addLamp(-145, -168); addLamp(-110, -213); addLamp(110, -213);addLamp(145, -168);
         //addLamp(-57, -240); addLamp(0, -250); addLamp(57, -240);
         addLamp(175, -174); addLamp(190, -97); addLamp(172, -18);
         addLamp(-175, -174); addLamp(-190, -97); addLamp(-172, -18);
 
         popup.lampsTimeCoder = new TimeCoder(this, '010111010111', 200, (on)=>{lampsArray.forEach((l)=>{l.setOn(on);})}); 

         function update(time, delta) // lamps blink
         {
            popup.lampsTimeCoder.update(delta);
         }
 
         function closeHandler()
         {
             popup.scene.updateEvent.remove(update);
         }
         popup.scene.updateEvent.add(update, this);
         popup.closeEvent.add(closeHandler, this);
    },

    // just for blocking controls
    createEmptyPUHandler: function(popup)
    {
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0, 'gray_01').setOrigin(0.5).setScale(1000);
        backGround.setInteractive(); // block bottom controls
        popup.add(backGround);

      // popup.debugText = popup.scene.add.bitmapText(0, 0, 'gameFont_2', 'EMPTY PU', 55, 1).setOrigin(0.5);
      // popup.add(popup.debugText);
    },

    // only message
    createSmallMessagePUHandler:function(popup)
    {
        let yOffset = -70; 
        // add background and panel
        let backGround = popup.scene.add.sprite(0, -40 + yOffset, 'white_bkg').setOrigin(0.5).setScale(2000);
        backGround.setInteractive(); // block bottom controls
        backGround.tint = 0x51443d;
        popup.add(backGround);
        backGround.setAlpha(0.2);

        let panel = popup.scene.add.sprite(0, 0 + yOffset, 'small_message_panel').setOrigin(0.5);
        popup.add(panel);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, 0 + yOffset, 'gameFont_2', 'Message', 41, 1).setOrigin(0.5);
        popup.add(popup.messageText);
    },

    // there are a lot of coins in the 6 chests
    createChestGamePUHandler_6: function(popup)
    {
        let yOffset = -70; 
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0 + yOffset, 'white_bkg').setOrigin(0.5).setScale(2000); 
        backGround.setInteractive(); // block bottom controls
        backGround.tint = 0x51443d;
        popup.add(backGround);
 
        let panel = popup.scene.add.sprite(0, -5 + yOffset, 'chestgame_panel').setOrigin(0.5); // -110
        popup.add(panel);
        popup.closeEvent.add(()=>{popup.scene.showCoins(false);}, this);

        let chestArray = [];
        function addChest(chestName, posX, posY, coins)
        {
            // create chest button
            popup.add(popup.scene.add.sprite(posX, posY + yOffset, 'chest_panel'));
            popup.addButton(chestName,'chest_closed', 'chest_opened', true, posX, posY + yOffset);
            popup[chestName].coins = coins;
            chestArray.push(popup[chestName]);
            popup['coinimage_'+ chestName] = popup.scene.add.sprite(-40 + posX, 3 + yOffset + posY, 'chestgame_coin').setOrigin(0.5);
            popup.add(popup['coinimage_'+ chestName]);
            popup['coinimage_'+ chestName].setVisible(false);
            popup['mess_'+ chestName] = popup.scene.add.bitmapText(-5 + posX, 3 + yOffset + posY, 'gameFont_1', coins, 50, 1).setOrigin(0, 0.5); 
            popup.add(popup['mess_'+ chestName]);
            popup['mess_'+ chestName].setVisible(false);
            
            // add click event
            popup[chestName].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
            popup[chestName].clickEvent.add(()=>{
                popup['mess_'+ chestName].setVisible(true); 
                popup.scene.showCoins(true);
                popup['coinimage_'+ chestName].setVisible(true);
               
                chestArray.forEach((chest)=>
                {
                    chest.setInteractable(false);
                });
                new SimpleTweenFloat(this, 0, 1, 3000, (p, dp) =>{ },  ()=>
                {
                    popup.scene.slotPlayer.addCoins(popup[chestName].coins);
                    popup.scene.guiController.closePopUp(popup);
                }); // just delay action   before close
/**/
            }, popup);
        }

        function shuffle(array){ 
            for (let i = array.length - 1; i > 0; i--) { 
              const j = Math.floor(Math.random() * (i + 1)); 
              [array[i], array[j]] = [array[j], array[i]]; 
            } 
            return array; 
          };  

        let chestCoins = [10, 20, 50, 100, 150, 200];
        let shufflechestCoins = shuffle(chestCoins); 

        var rowY1 = -140;
        var rowY2 = 122;
        addChest('chest_2', -299, rowY1, shufflechestCoins[0]); addChest('chest_1', -20, rowY1, shufflechestCoins[1]);  addChest('chest_3', 259, rowY1, shufflechestCoins[2]);
        addChest('chest_5', -299, rowY2, shufflechestCoins[3]); addChest('chest_4', -20, rowY2, shufflechestCoins[4]); addChest('chest_6', 259, rowY2, shufflechestCoins[5]);
        
        popup.messageText = popup.scene.add.bitmapText(0, 283 + yOffset, 'gameFont_2', 'Choose any chest', 48, 1).setOrigin(0.5);      
        popup.add(popup.messageText);
    },
    
    // there are a lot of coins in the 6 chests
    showChestsPU_6: function(scene)
    {
        scene.guiController.showPopUp(slotConfig.createChestGamePUHandler_6); 
    },

}

class AnimatedCoinParticle extends Phaser.GameObjects.Particles.Particle
{
    constructor (emitter)
    {
        super(emitter);

        this.t = 0;
        this.i = 0;
        this.framesCount = 6;
    }
	
    update (delta, step, processors)
    {
        var result = super.update(delta, step, processors);
        this.t += delta;

        if (this.t >= coinSpinAnim.msPerFrame)
        {
            this.i++;
            if (this.i > this.framesCount-1)
            {
                this.i = 0;
            }
            this.frame = coinSpinAnim.frames[this.i].frame;
            this.t -= coinSpinAnim.msPerFrame;
        }
        return result;
    }
}

class ProgressSlider
{
    constructor(scene, baseLocPosX, baseLocPosY, baseSprite, fillLocPosX, fillLocPosY, fillSprite, spotSprite, depth)
    {
        this.fillAmount = 0;
        this.scene = scene;
        this.fillLocPosX = fillLocPosX;
        this.fillLocPosY = fillLocPosY;
        this.baseSprite = scene.addSpriteLocPos(baseSprite, baseLocPosX, baseLocPosY); 
        this.baseSprite.setDepth(depth);
        this.fillSprite = scene.addSpriteLocPos(fillSprite, fillLocPosX, fillLocPosY); 
        this.fillSprite.setDepth(depth + 1);

        this.sizeX = this.fillSprite.width;
        this.sizeY = this.fillSprite.height;
        // console.log('mask sizeX: ' + sizeX  + ' ;mask sizeY: ' + sizeY);

        this.spotSprite = scene.addSpriteLocPos(spotSprite, fillLocPosX - this.sizeX / 2, fillLocPosY); 
        this.spotSprite.setDepth(depth + 2);

        this.shapePosX = scene.centerX + fillLocPosX - this.sizeX / 2;
        this.shapePosY = scene.centerY + fillLocPosY + this.sizeY / 2;
        this.shape = scene.add.graphics();
        this.shape.fillStyle(0xffffff);
        this.shape.beginPath();
        this.shape.fillRect(this.shapePosX, this.shapePosY, this.sizeX, -this.sizeY);
        this.shape.depth = depth + 2;
        this.shape.setVisible(false);

        this.gMask = this.shape.createGeometryMask();
        this.fillSprite.setMask(this.gMask);   

        this.setFillAmount(this.fillAmount);
    }

    setFillAmount(amount)
    {
        if(amount > 1) amount = 1;
        if(amount < 0) amount = 0;
        this.fillAmount = amount;
        var _sizeX = this.sizeX * amount;
        this.shape.clear();
        this.shape.fillRect(this.shapePosX, this.shapePosY, _sizeX, -this.sizeY);  
        this.spotSprite.setPosition(this.shapePosX +_sizeX, this.scene.centerY + this.fillLocPosY);
        this.spotSprite.setVisible(this.fillAmount > 0);
    }
}
