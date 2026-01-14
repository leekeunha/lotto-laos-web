
Phaser.Scene.prototype.addButton = function(x, y, key, callback, callbackContext, outFrame, overFrame, downFrame, upFrame)
{
    let btn = this.add.sprite(x, y, key, outFrame).setOrigin(0);
    btn.setInteractive({useHandCursor: true});
    btn.on('pointerout',  function (ptr)       { this.setFrame(outFrame) } );
    btn.on('pointerover', function (ptr, x, y) { this.setFrame(overFrame) } );
    btn.on('pointerdown', function (ptr){
        if(ptr.event.button !== 0){
            return;
        }
        this.setFrame(downFrame)
    });
    btn.on('pointerup', function (ptr)         { this.setFrame(upFrame) });
    btn.on('pointerdown', callback.bind(callbackContext));

    return btn;
};

Phaser.Scene.prototype.addToggleButton = function(x, y, key, callback, callbackContext, Frame)
{
    let btn = this.add.sprite(x, y, key, Frame).setOrigin(0);
    btn.setInteractive({useHandCursor: true});
    btn.on('pointerdown', function(ptr)
    {
        if(ptr.event.button !== 0){
            return;
        }

        if( Frame === 0 ) Frame = 1;
        else if( Frame === 1 ) Frame = 0;
        this.setFrame(Frame);
    });
    btn.on('pointerdown', callback.bind(callbackContext) );

    return btn;
};