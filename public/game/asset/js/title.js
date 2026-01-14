let TitleScene = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize: function TitleScene() {
        Phaser.Scene.call(this, { key: 'TitleScene' });
    },

    create: function () {
        this.add.sprite(0, 0, ASSET_KEY_BG[0]).setOrigin(0);
        let spr_bg = this.add.sprite(0, 0, ASSET_KEY_BG[1]).setOrigin(0).setAlpha(0);

        this.tweens.add({
            targets: spr_bg,
            alpha: { from: 0, to: 1 },
            ease: 'Linear', //'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 3000,
            delay: 3000,
            yoyo: true,
            loop: -1,
        });

        var screen_width_size = window.innerWidth;
        var screen_height_size = window.innerHeight;

        var resize = (screen_width_size / 2 - 20) / 200;
        console.log('resize ' + resize);

        if (resize * 263 * 2 > screen_height_size - 350) {
            resize = (screen_height_size - 350) / 2 / 263;
        }
        console.log('screen_width_size : ' + screen_width_size);
        console.log('screen_height_size : ' + screen_height_size);
        var x_1 = 860 / 2 - 200 * resize;
        var x_2 = 860 / 2 + 10;
        console.log('resize ' + resize * 263 * 2 + ' ' + screen_height_size);
        //console.log("x "+x);

        this.add.sprite(860 / 2, 60, ASSET_KEY_BG_TITLE).setScale(resize);

        this.LevelButton_0 = this.addButton(
            x_1,
            150,
            ASSET_KEY_LEVEL_BUTTON[0],
            this.onClick_LevelButton_0,
            this,
            0,
            1,
            2,
            2,
        ).setScale(resize);
        this.LevelButton_1 = this.addButton(
            x_2,
            150,
            ASSET_KEY_LEVEL_BUTTON[1],
            this.onClick_LevelButton_1,
            this,
            0,
            1,
            2,
            2,
        ).setScale(resize);
        this.LevelButton_2 = this.addButton(
            x_1,
            170 + resize * 263,
            ASSET_KEY_LEVEL_BUTTON[2],
            this.onClick_LevelButton_2,
            this,
            0,
            1,
            2,
            2,
        ).setScale(resize);
        this.LevelButton_3 = this.addButton(
            x_2,
            170 + resize * 263,
            ASSET_KEY_LEVEL_BUTTON[3],
            this.onClick_LevelButton_3,
            this,
            0,
            1,
            2,
            2,
        ).setScale(resize);

        this.StartButton = this.addButton(
            205,
            screen_height_size - 200,
            ASSET_KEY_START_BUTTON,
            this.onClick_StartButton,
            this,
            0,
            1,
            2,
            0,
        );

        let sprIndex = IsMuteBgm === false ? 0 : 1;
        this.addToggleButton(250, 18, ASSET_KEY_BGM_BUTTON, this.onClick_BgmButton, this, sprIndex);

        sprIndex = IsMuteEffectSound === false ? 0 : 1;
        this.addToggleButton(
            300,
            18,
            ASSET_KEY_EFFECT_SOUND_BUTTON,
            this.onClick_EffectSoundButton,
            this,
            sprIndex,
        );

        this.Snd_LevelButton = this.sound.add(ASSET_KEY_SOUND_LEVEL_BUTTON);
        this.Snd_StartButton = this.sound.add(ASSET_KEY_SOUND_START_BUTTON);

        this.scene.get('LoadingScene').Snd_MainBgm.setMute(IsMuteBgm);

        this.Snd_LevelButton.setMute(IsMuteEffectSound);
        this.Snd_StartButton.setMute(IsMuteEffectSound);

        // this.sound.pauseOnBlur = false;
    },

    update: function () {
        switch (User.Level) {
            case 0:
                this.LevelButton_0.setFrame(2);
                break;
            case 1:
                this.LevelButton_1.setFrame(2);
                break;
            case 2:
                this.LevelButton_2.setFrame(2);
                break;
            case 3:
                this.LevelButton_3.setFrame(2);
                break;
            default:
                return;
        }

        if (User.Point < MIN_BET_POINT) {
            this.StartButton.setFrame(3);
            this.StartButton.input.enabled = false;
        }

        if (User.ReceivedData === true) {
            User.ReceivedData = false;
            // User.RequestData = false;
            this.StartButton.input.enabled = true;
            this.scene.start('GameScene');
        }
    },

    onClick_LevelButton_0: function (pointer) {
        User.Level = 0;
        this.LevelButton_1.setFrame(0);
        this.LevelButton_2.setFrame(0);
        this.LevelButton_3.setFrame(0);

        this.Snd_LevelButton.play();
    },

    onClick_LevelButton_1: function (pointer) {
        User.Level = 1;
        this.LevelButton_0.setFrame(0);
        this.LevelButton_2.setFrame(0);
        this.LevelButton_3.setFrame(0);

        this.Snd_LevelButton.play();
    },

    onClick_LevelButton_2: function (pointer) {
        User.Level = 2;
        this.LevelButton_0.setFrame(0);
        this.LevelButton_1.setFrame(0);
        this.LevelButton_3.setFrame(0);

        this.Snd_LevelButton.play();
    },

    onClick_LevelButton_3: function (pointer) {
        User.Level = 3;
        this.LevelButton_0.setFrame(0);
        this.LevelButton_1.setFrame(0);
        this.LevelButton_2.setFrame(0);

        this.Snd_LevelButton.play();
    },

    onClick_StartButton: function (pointer) {
        if (pointer.event.button !== 0) return;

        if (User.RequestData === false) {
            if (User.Point >= MIN_BET_POINT) {
                this.StartButton.input.enabled = false;
                this.Snd_StartButton.play();

                User.RequestData = true;

                let sendData = { level: User.Level };

                $.ajaxSetup({
                    headers: { Authorization: `Bearer ` + ACCESS_TOKEN },
                });
                $.ajax({
                    url: GAME_START_API_URL,
                    dataType: 'json',
                    type: 'post',
                    contentType: 'application/json; charset=utf-8',
                    traditional: true,
                    data: JSON.stringify(sendData),
                    success: function (response) {
                        let result = response.result;

                        if (result === 'success') {
                            User.SetGameStart(response);
                        } else {
                            alert(response.message);
                        }
                    },
                    error: function (error) {
                        console.log('status : ' + error.status);
                        console.log('message : ' + error.responseText);
                        if (error.status == 403) {
                            alert('Server Error');
                            location.href = '/';
                        } else {
                            alert(error.responseText);
                        }
                    },
                });
            }
        }
    },

    onClick_BgmButton: function (pointer) {
        if (pointer.event.button !== 0) return;

        IsMuteBgm = !IsMuteBgm;
        this.scene.get('LoadingScene').Snd_MainBgm.setMute(IsMuteBgm);
    },

    onClick_EffectSoundButton: function (pointer) {
        if (pointer.event.button !== 0) return;

        IsMuteEffectSound = !IsMuteEffectSound;
        this.Snd_LevelButton.setMute(IsMuteEffectSound);
        this.Snd_StartButton.setMute(IsMuteEffectSound);
    },
});
