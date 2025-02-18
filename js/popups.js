// --------------- MESSAGES -------------------

// message with yes, no, close buttons
function createGameMessagePUHandlerYNC(popup)
{
    let yOffset = -70; 
    // add background and panel
    let backGround = popup.scene.add.sprite(0, -40 + yOffset, 'white_bkg').setOrigin(0.5).setScale(2000);
    backGround.setInteractive(); // block bottom controls
    backGround.tint = 0x51443d;
    popup.add(backGround);
    let panel = popup.scene.add.sprite(0, 0 + yOffset, 'message_panel').setOrigin(0.5);
    popup.add(panel);

    // add caption
    popup.captionText = popup.scene.add.bitmapText(0, -50 + yOffset, 'gameFont_1', 'Caption', 40, 1).setOrigin(0.5);
    popup.captionText.setLetterSpacing(1.2);
    popup.add(popup.captionText);

    // add message
    popup.messageText = popup.scene.add.bitmapText(0, 30 + yOffset, 'gameFont_2', 'Message', 40, 1).setOrigin(0.5);
    popup.add(popup.messageText);

    // add buttons
    popup.addButton('okButton','small_button', 'small_button_hover', false, -90, 160 + yOffset);
    popup.addButton('noButton','small_button', 'small_button_hover', false, 90, 160 + yOffset);
    popup.addButton('exitButton','exit_button', 'exit_button_hover', false, 218, -150 + yOffset);
    popup['okButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
    popup['noButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
    popup['exitButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);

    // add button text
    popup.okText = popup.scene.add.bitmapText(-90, 145 + yOffset, 'gameFont_1', 'Ok', 40, 1).setOrigin(0.5);
    popup.add(popup.okText);

    popup.noText = popup.scene.add.bitmapText(90, 145 + yOffset, 'gameFont_1', 'No', 40, 1).setOrigin(0.5);
    popup.add(popup.noText);
}

// message with close button
function createGameMessagePUHandler(popup)
{
    let yOffset = -70; 
    // add background and panel
    let backGround = popup.scene.add.sprite(0, -40 + yOffset, 'white_bkg').setOrigin(0.5).setScale(2000);
    backGround.setInteractive(); // block bottom controls
    backGround.tint = 0x51443d;
    popup.add(backGround);
    let panel = popup.scene.add.sprite(0, 0 + yOffset, 'message_panel').setOrigin(0.5);
    popup.add(panel);

    // add caption
    popup.captionText = popup.scene.add.bitmapText(0, -50 + yOffset, 'gameFont_1', 'Caption', 40, 1).setOrigin(0.5);
    popup.captionText.setLetterSpacing(1.2);
    popup.add(popup.captionText);

    // add message
    popup.messageText = popup.scene.add.bitmapText(0, 30 + yOffset, 'gameFont_2', 'Message', 40, 1).setOrigin(0.5);
    popup.add(popup.messageText);

    // add buttons
    popup.addButton('exitButton','exit_button', 'exit_button_hover', false, 218, -150 + yOffset);
    popup['exitButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
}


