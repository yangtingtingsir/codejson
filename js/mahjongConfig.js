var mahjongConfig = {

    localOffsetX: 0,    // x offset from center for all scene objects
    localOffsetY: 0,    // y offset from center for all scene objects

    fonts: [
        {
            fontName: 'gameFont_0',
            filePNG:  'fonts/nunitoEB_60_0.png',
            fileXML:  'fonts/nunitoEB_60_0.xml'
        },
        {
            fontName: 'gameFont_1',
            filePNG:  'fonts/nunitoEB_60_1.png',
            fileXML:  'fonts/nunitoEB_60_1.xml'
        },
        /*
        {
            fontName: 'gameFont_2',
            filePNG:  'fonts/*.png',
            fileXML:  'fonts/*.xml'
        },
        */
    ],

    sprites: [
        // debug reference
        {
            fileName: null,
            name: 'debugreference'
        },

        // mahjong
        {
            fileName: 'cellEmpty_2.png',
            name: 'cellEmpty'
        }, 
        {
            fileName: 'Table.png',
            name: 'table'
        }, 
        {
            fileName: 'TileSimpleEmpty.png',
            name: 'tile_empty'
        }, 
        {
            fileName: 'TileLeftBorder.png',
            name: 'tile_left_border'
        }, 
        {
            fileName: 'TileShadow.png',
            name: 'tile_shadow'
        }, 
        {
            fileName: 'ButtonHint.png',
            name: 'button_hint'
        },
        {
            fileName: 'ButtonHintHover.png',
            name: 'button_hint_hover'
        },
        {
            fileName: 'ButtonShuffle.png',
            name: 'button_shuffle'
        },
        {
            fileName: 'ButtonShuffleHover.png',
            name: 'button_shuffle_hover'
        },
        {
            fileName: 'ButtonUndo.png',
            name: 'button_undo'
        },
        {
            fileName: 'ButtonUndoHover.png',
            name: 'button_undo_hover'
        },
        {
            fileName: 'ButtonGameExit.png',
            name: 'button_gameexit'
        },
        {
            fileName: 'ButtonGameExitHover.png',
            name: 'button_gameexit_hover'
        },
        {
            fileName: 'PanelButtons.png',
            name: 'panel_buttons'
        },
        {
            fileName: 'CounterPanel.png',
            name: 'counter_panel'
        },
        // common gui sprites 
        {
            fileName: 'gui/MessagePanel.png',
            name: 'message_panel'
        },   
        {
            fileName: null,
            name: 'small_message_panel'
        }, 
        {
            fileName: 'gui/WinPanel.png',
            name: 'win_panel'
        }, 
        {
            fileName: 'gui/NoMatchesPanel.png',
            name: 'nomatches_panel'
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
            fileName: 'gui/ExtraLongPinkButton.png', 
            name: 'extralong_pink_button'
        }, 
        {
            fileName: 'gui/ExtraLongPinkButtonHover.png', 
            name: 'extralong_pink_button_hover'
        },
        {
            fileName: 'gui/LongPinkButton.png', 
            name: 'long_pink_button'
        }, 
        {
            fileName: 'gui/LongPinkButtonHover.png', 
            name: 'long_pink_button_hover'
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
            fileName: null, 
            name: 'pu_background'
        },   
        {
            fileName: 'gui/whiteBkg.png', 
            name: 'white_bkg'
        },    
        // debug 
        {
            fileName: 'DebugButton.png', 
            name: 'debug_button'
        }, 
        {
            fileName: 'DebugButtonHover.png', 
            name: 'debug_button_hover'
        },  
    ],
    
    createGraphic: function(scene){
       // scene.debugreference =  scene.addSpriteLocPos('debugreference', 0, 0).setDepth(7000).setAlpha(0.5);

        scene.table =  scene.addSpriteLocPos('table', 0, 0).setScale(1); 
        scene.table.depth = -1; 
    },

    createControls: function(scene) {
        let depth = 11;
        var debug = false;  // set to true to show debug buttons panel (levels scroll, auto play)

        function addSprite (spriteName, posX, posY, _depth)
        {
          var _sprite =  scene.addSpriteLocPos(spriteName, posX, posY); 
          _sprite.setDepth(_depth); 
          return _sprite;
        }

        function addButton (spriteNormal, spriteHover, isSwitch, posX, posY, originX, originY, _depth)
        {
          var _button = new SceneButton(scene, spriteNormal, spriteHover, isSwitch);   
          scene.buttons.push(_button);
          _button.create(posX, posY, originX, originY,);
          _button.setDepth(_depth); 
          _button.button.setScale(1);
          return _button;
        }

        var offsetY = -880;
        scene.levelText = scene.add.bitmapText(scene.centerX - 220, scene.centerY + offsetY, 'gameFont_0', 'LEVEL', 40, 1).setOrigin(0.5).setDepth(depth).setTint(0xafa6a0);
        scene.levelNumberText = scene.add.bitmapText(scene.centerX - 220, scene.centerY + offsetY + 55, 'gameFont_0', (LevelHolder.currentLevel + 1), 80, 1).setOrigin(0.5).setDepth(depth);

        scene.scoreText = scene.add.bitmapText(scene.centerX - 0, scene.centerY + offsetY, 'gameFont_0', 'SCORE', 40, 1).setOrigin(0.5).setDepth(depth).setTint(0xafa6a0);
        scene.scoreAmountText = scene.add.bitmapText(scene.centerX - 0, scene.centerY + offsetY + 55, 'gameFont_0', 0, 80, 1).setOrigin(0.5).setDepth(depth);

        scene.matchesText = scene.add.bitmapText(scene.centerX + 220, scene.centerY + offsetY, 'gameFont_0', 'MATCHES', 40, 1).setOrigin(0.5).setDepth(depth).setTint(0xafa6a0);
        scene.matchesCountText = scene.add.bitmapText(scene.centerX + 220, scene.centerY + offsetY + 55, 'gameFont_0', 0, 80, 1).setOrigin(0.5).setDepth(depth);

        scene.changePossibleMatchesEvent.add((count)=> {
            scene.matchesCountText.text = count;
        }, this);

        scene.changeScoreEvent.add((count)=> {
            scene.scoreAmountText.text = count;           
        }, this);

        // scene buttons  
        offsetY = 870;
        scene.buttonsPanel = addSprite('panel_buttons', 0, 960, depth).setScale(1).setOrigin(0.5, 1);
		scene.hintButton = addButton('button_hint', 'button_hint_hover', false, -165, offsetY, 0.5, 0.5, depth);  
        scene.hintButton.addClickEvent(()=>{scene.soundController.playClip('button_click', false); scene.select_Hint(); }, scene);  
        scene.cHintPanel = addSprite('counter_panel', -130, offsetY - 50, depth).setOrigin(0.5);
        scene.hintCountText = scene.add.bitmapText(scene.centerX -130,scene.centerY + offsetY - 55, 'gameFont_0', HintsHolder.count, 27, 1).setOrigin(0.5).setDepth(depth).setTint(0xafa6a0);

		scene.shuffleButton = addButton('button_shuffle', 'button_shuffle_hover', false, 0 , offsetY, 0.5, 0.5, depth);  
        scene.shuffleButton.addClickEvent(()=>{scene.soundController.playClip('button_click', false); scene.shuffleGrid();}, scene);
        scene.cShufflePanel = addSprite('counter_panel', 35, offsetY-50, depth).setOrigin(0.5);
        scene.shufflesCountText = scene.add.bitmapText(scene.centerX + 35,scene.centerY + offsetY - 55, 'gameFont_0', ShufflesHolder.count, 27, 1).setOrigin(0.5).setDepth(depth).setTint(0xafa6a0);

		scene.undoButton = addButton('button_undo', 'button_undo_hover', false, 165 , offsetY, 0.5, 0.5, depth);  
        scene.undoButton.addClickEvent(()=>{scene.soundController.playClip('button_click', false); scene.restoreUndoState();},  scene);  
        scene.cUndoPanel = addSprite('counter_panel', 200, offsetY-50, depth).setOrigin(0.5);
        scene.undoCountText = scene.add.bitmapText(scene.centerX + 200,scene.centerY + offsetY - 55, 'gameFont_0', 0, 27, 1).setOrigin(0.5).setDepth(depth).setTint(0xafa6a0);

        scene.undoButton = addButton('button_gameexit', 'button_gameexit_hover', false, -410 , offsetY, 0.5, 0.5, depth);  
        scene.undoButton.addClickEvent(()=>{ scene.soundController.playClip('button_click', false); scene.exitGame(); },  scene); 
        
        // debug 
        if(!debug) return;
        // levels scrolling
        scene.nextButton = addButton('debug_button', 'debug_button_hover', false, -150 , -730, 0.5, 0.5, depth); 
        scene.nextButton.addClickEvent(()=>{LevelHolder.currentLevel++, scene.reloadGame();}, scene); 
        scene.nbText = scene.add.bitmapText(scene.centerX -150, scene.centerY - 737, 'gameFont_0', '>', 80, 1).setOrigin(0.5).setDepth(depth); //.setTint(0xafa6a0);

        scene.prefButton = addButton('debug_button', 'debug_button_hover', false, -290 , -730, 0.5, 0.5, depth); 
        scene.prefButton.addClickEvent(()=>{LevelHolder.currentLevel--, scene.reloadGame();}, scene); 
        scene.pbText = scene.add.bitmapText(scene.centerX -290, scene.centerY - 737, 'gameFont_0', '<', 80, 1).setOrigin(0.5).setDepth(depth);

        // auto play start, stop
        var autoPlayButton = new SceneButton(scene, 'debug_button', 'debug_button_hover', false);
        autoPlayButton.create(220 , -730, 0.5, 0.5); autoPlayButton.button.setDepth(depth);
        autoPlayButton.addClickEvent(()=>{scene.autoPlay();}, scene); 
        scene.pbText = scene.add.bitmapText(scene.centerX + 220, scene.centerY - 737, 'gameFont_0', 'auto', 60, 1).setOrigin(0.5).setDepth(depth);
    },

    // refresh counters text fields
    refreshGUI : function(scene){
        scene.shufflesCountText.text = ShufflesHolder.count;
        scene.hintCountText.text = HintsHolder.count;
        scene.undoCountText.text = scene.undoStates.length;
    },    
    
    createWinPUHandler: function(popup)
    {     
        let yOffset = 0;
        var perc =  ScoreHolder.score / ScoreHolder.averageScore * 100;
        if(perc > 100) perc = 100;

        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0 + yOffset, 'white_bkg').setOrigin(0.5).setScale(2000).setInteractive().setTint(0x1C1F1F);
        popup.add(backGround);

        let panel = popup.scene.add.sprite(0, -190 + yOffset, 'win_panel').setOrigin(0.5);
        popup.add(panel);

        // add title
        popup.title = popup.scene.add.bitmapText(0, -470 + yOffset, 'gameFont_0', perc < 100 ? 'GOOD!': 'EXCEPTIONAL!', 80, 1).setOrigin(0.5).setTint(0x8e2910);
        popup.add(popup.title);

        popup.score = popup.scene.add.bitmapText(0, 100 + yOffset, 'gameFont_0', 'Score', 40, 1).setOrigin(0.5);
        popup.add(popup.score);
        popup.scoreCount = popup.scene.add.bitmapText(0, 160 + yOffset, 'gameFont_0', perc.toFixed(2), 80, 1).setOrigin(0.5);
        popup.add(popup.scoreCount);

        // add buttons
        popup.addButton('levelButton','extralong_pink_button', 'extralong_pink_button_hover', false, 0, 363 + yOffset);
        popup['levelButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['levelButton'].clickEvent.add(()=>{ LevelHolder.currentLevel++;  popup.scene.reloadGame(); }, popup);

        popup.levelText = popup.scene.add.bitmapText(0, 357 + yOffset, 'gameFont_1', 'Level ' + (LevelHolder.currentLevel + 2), 80, 1).setOrigin(0.5);
        popup.add(popup.levelText);
    },

    createNoMatchesPUHandler: function(popup)
    {     
        let yOffset = 0;
        var perc =  ScoreHolder.score / ScoreHolder.averageScore * 100;
        if(perc > 100) perc = 100;

        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0 + yOffset, 'white_bkg').setOrigin(0.5).setScale(2000).setInteractive().setTint(0x1C1F1F);
        popup.add(backGround);

        let panel = popup.scene.add.sprite(0, 10 + yOffset, 'nomatches_panel').setOrigin(0.5);
        popup.add(panel);

        // add title
        popup.title = popup.scene.add.bitmapText(0, -370 + yOffset, 'gameFont_0', 'No Matches', 80, 1).setOrigin(0.5).setTint(0xafa6a0);
        popup.add(popup.title);

        popup.shufflesIcon = popup.scene.add.sprite(0, -130 + yOffset, 'button_shuffle').setOrigin(0.5);
        popup.add(popup.shufflesIcon);
        popup.counterPanel = popup.scene.add.sprite(35, -180 + yOffset, 'counter_panel').setOrigin(0.5);
        popup.add(popup.counterPanel);

        popup.scText = popup.scene.add.bitmapText(35, -184 + yOffset, 'gameFont_0', ShufflesHolder.count, 27, 1).setOrigin(0.5).setTint(0xafa6a0);
        popup.add(popup.scText);
        popup.usText = popup.scene.add.bitmapText(0, -30 + yOffset, 'gameFont_0', 'Use Shuffle   -1', 40, 1).setOrigin(0.5).setTint(0xafa6a0);
        popup.add(popup.usText);

        // add buttons
        popup.addButton('shuffleButton','long_button', 'long_button_hover', false, 0, 130 + yOffset);
        popup['shuffleButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['shuffleButton'].clickEvent.add(()=>{if (ShufflesHolder.count > 0) { popup.scene.guiController.closePopUp(popup); popup.scene.shuffleGrid();} }, popup);

        popup.addButton('restartButton','long_pink_button', 'long_pink_button_hover', false, 0, 280 + yOffset);
        popup['restartButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['restartButton'].clickEvent.add(()=>{popup.scene.guiController.closePopUp(popup); popup.scene.reloadGame(); }, popup);

        popup.shuffleText = popup.scene.add.bitmapText(0, 123 + yOffset, 'gameFont_1', 'Shuffle', 80, 1).setOrigin(0.5);
        popup.add(popup.shuffleText);
        popup.restartText = popup.scene.add.bitmapText(0, 273 + yOffset, 'gameFont_1', 'Restart', 80, 1).setOrigin(0.5);
        popup.add(popup.restartText);
    },

    // just for blocking controls
    createEmptyPUHandler: function(popup)
    {
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0, 'white_bkg').setOrigin(0.5).setScale(2000).setInteractive().setAlpha(0.01);
        popup.add(backGround);
    },
    
    // only message
    createSmallMessagePUHandler:function(popup)
    {
        let yOffset = -0; 
        // add background and panel
        let backGround = popup.scene.add.sprite(0, -0 + yOffset, 'white_bkg').setOrigin(0.5).setScale(2000).setTint(0x1C1F1F);
        backGround.setInteractive(); // block bottom controls
        popup.add(backGround);
        backGround.setAlpha(0.5);

        let panel = popup.scene.add.sprite(0, 0 + yOffset, 'message_panel').setOrigin(0.5);
        popup.add(panel);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, 0 + yOffset, 'gameFont_0', 'Message', 40, 1).setOrigin(0.5).setTint(0xafa6a0);
        popup.add(popup.messageText);
    },

    // match score flyer 
    createFlyerPUHandler: function(popup)
    {
        popup.scoreText = popup.scene.add.bitmapText(0, 0, 'gameFont_0', 0, 80, 1).setOrigin(0.5).setTint(0xff0000);
        popup.add(popup.scoreText);
    }
}

var gridConfig = {
    cellSizeX : 81,
    cellSizeY : 101,
    cellTextureName: 'cellEmpty',
}

var tileConfig = {
    tileEmptyTexture: 'tile_empty',
    leftBorderTexture: 'tile_left_border',
    shadowTexture: 'tile_shadow',
    depth: 5,
    frontDepth: 1000,
    sizeX: 2,
    sizeY: 2,
    layerOffsetX: -15, 
    layerOffsetY: -16, 
}

var classicThemeConfig = {
    "simpleSprites": [
      "TileClassicBamboo1.png",
      "TileClassicBamboo2.png",
      "TileClassicBamboo3.png",
      "TileClassicBamboo4.png",
      "TileClassicBamboo5.png",
      "TileClassicBamboo6.png",
      "TileClassicBamboo7.png",
      "TileClassicBamboo8.png",
      "TileClassicBamboo9.png",
      "TileClassicDots1.png"  ,
      "TileClassicDots2.png"  ,
      "TileClassicDots3.png"  ,
      "TileClassicDots4.png"  ,
      "TileClassicDots5.png"  ,
      "TileClassicDots6.png"  ,
      "TileClassicDots7.png"  ,
      "TileClassicDots8.png"  ,
      "TileClassicDots9.png"  ,
      "TileClassicEast.png"   ,
      "TileClassicGreen.png"  ,
      "TileClassicNorth.png"  ,
      "TileClassicRed.png"    ,
      "TileClassicSouth.png"  ,
      "TileClassicSymbol1.png",
      "TileClassicSymbol2.png",
      "TileClassicSymbol3.png",
      "TileClassicSymbol4.png",
      "TileClassicSymbol5.png",
      "TileClassicSymbol6.png",
      "TileClassicSymbol7.png",
      "TileClassicSymbol8.png",
      "TileClassicSymbol9.png",
      "TileClassicWest.png"   ,
      "TileClassicWhite.png"
    ],
    "groups": [
      {
        "folder": "group_1/",
        "collection": [
          "TileClassicBamboo.png"       ,
          "TileClassicChrisanthenum.png",
          "TileClassicOrchid.png"       ,
          "TileClassicPlum.png"
        ]
      },
      {
        "folder": "group_2/",
        "collection": [
          "TileClassicAutumn.png",
          "TileClassicSpring.png",
          "TileClassicSummer.png",
          "TileClassicWinter.png"
        ]
      }
    ],
    "folder": "png/tiles_classic/"
}

var simpleThemeConfig = {
    "simpleSprites": [
      "TileSimpleBamboo1.png",
      "TileSimpleBamboo2.png",
      "TileSimpleBamboo3.png",
      "TileSimpleBamboo4.png",
      "TileSimpleBamboo5.png",
      "TileSimpleBamboo6.png",
      "TileSimpleBamboo7.png",
      "TileSimpleBamboo8.png",
      "TileSimpleBamboo9.png",
      "TileSimpleDots1.png",
      "TileSimpleDots2.png",
      "TileSimpleDots3.png",
      "TileSimpleDots4.png",
      "TileSimpleDots5.png",
      "TileSimpleDots6.png",
      "TileSimpleDots7.png",
      "TileSimpleDots8.png",
      "TileSimpleDots9.png",
      "TileSimpleEast.png",
      "TileSimpleGreen.png",
      "TileSimpleNorth.png",
      "TileSimpleRed.png",
      "TileSimpleSouth.png",
      "TileSimpleSymbol1.png",
      "TileSimpleSymbol2.png",
      "TileSimpleSymbol3.png",
      "TileSimpleSymbol4.png",
      "TileSimpleSymbol5.png",
      "TileSimpleSymbol6.png",
      "TileSimpleSymbol7.png",
      "TileSimpleSymbol8.png",
      "TileSimpleSymbol9.png",
      "TileSimpleWest.png",
      "TileSimpleWhite.png"
    ],
    "groups": [
      {
        "folder": "group_1/",
        "collection": [
          "TileSimpleBamboo.png",
          "TileSimpleChrisanthenum.png",
          "TileSimpleOrchid.png",
          "TileSimplePlum.png"
        ]
      },
      {
        "folder": "group_2/",
        "collection": [
          "TileSimpleAutumn.png",
          "TileSimpleSpring.png",
          "TileSimpleSummer.png",
          "TileSimpleWinter.png"
        ]
      }
    ],
    "folder": "png/tiles_simple/"
}
