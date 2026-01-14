let GameScene = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize: function GameScene() {
        Phaser.Scene.call(this, { key: 'GameScene' });
    },

    init: function () {
        this.CellArray = [];
        this.Spr_CellWin = [];
        this.Spr_CellLose = [];
        this.Text_CellWinPoint = [];
        this.Number_Reward = [];
        this.Number_TotalReward = [];
        this.Number_WinPrize = [];

        this.Spr_PopupWin = [];
        this.Spr_PopupLose = [];

        this.Point = 0;
        this.Reward = 0;
        this.NextReward = 0;
        this.WinPrize = 0;
        this.IsGameOver = false;
        this.IsGameStop = false;
    },

    create: function () {
        let center_x = this.cameras.main.centerX;
        let center_y = this.cameras.main.centerY;
        let xpos = 0;
        let ypos = 0;

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

        // background
        this.add.sprite(0, 0, ASSET_KEY_BG[0]).setOrigin(0);
        let spr_bg = this.add.sprite(0, 0, ASSET_KEY_BG[1]).setOrigin(0).setAlpha(0);

        this.BGEffect = this.tweens.add({
            targets: spr_bg,
            alpha: { start: 0, to: 1 },
            ease: 'Cubic', // 'Linear', 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 40,
            yoyo: true,
            repeat: 4,
        });
        this.BGEffect.stop();

        let sprIndex = IsMuteBgm === false ? 0 : 1;
        this.addToggleButton(15, 15, ASSET_KEY_BGM_BUTTON, this.onClick_BgmButton, this, sprIndex);

        sprIndex = IsMuteEffectSound === false ? 0 : 1;
        this.addToggleButton(
            58,
            15,
            ASSET_KEY_EFFECT_SOUND_BUTTON,
            this.onClick_EffectSoundButton,
            this,
            sprIndex,
        );

        this.add
            .sprite(860 / 2 + 180 * resize, 80, ASSET_KEY_UI_LEVEL[User.Level])
            .setScale(resize / 2);

        this.add.sprite(130, 57, ASSET_KEY_CELL_PANEL).setOrigin(0);
        this.add.sprite(860 / 2, 60, ASSET_KEY_BG_TITLE).setScale(resize);

        this.add.sprite(170, 548, ASSET_KEY_UI_REWARD_PANEL[1]).setOrigin(0);
        this.add.sprite(337, 515, ASSET_KEY_UI_REWARD_PANEL[0]).setOrigin(0);

        this.Point = User.Point;
        this.Reward = User.Reward;
        this.NextReward = User.NextReward;

        this.SetNumber(this.NextReward, 16, ASSET_KEY_NUMBER_REWARD);
        this.SetNumber(this.Reward, 28, ASSET_KEY_NUMBER_TOTAL_REWARD);

        const cell_gap = 75;

        for (let iter = CELL_COUNT - 1; iter >= 0; iter--) {
            xpos = 243 + (iter % 5) * cell_gap;
            ypos = 141 + Math.floor(iter / 5) * cell_gap;

            this.CellArray[iter] = this.add
                .sprite(xpos, ypos, ASSET_KEY_CELL[0])
                .setOrigin(0)
                .setInteractive({ useHandCursor: true });
            this.CellArray[iter].Index = iter;
            this.CellArray[iter].Result = -1;

            this.Spr_CellWin[iter] = this.add
                .sprite(xpos, ypos, ASSET_KEY_CELL_RESULT[0])
                .setOrigin(0)
                .setVisible(false);
            this.Spr_CellLose[iter] = this.add
                .sprite(xpos, ypos, ASSET_KEY_CELL_RESULT[1])
                .setOrigin(0)
                .setVisible(false);
        }

        // this.Spr_MouseOverCell = this.add
        //   .sprite(0, 0, ASSET_KEY_CELL[1])
        //   .setOrigin(0)
        //   .setVisible(false);

        let style = {
            fontFamily: 'NotoSans',
            fontSize: '20px',
            fontStyle: '',
            color: '#FFFFFF',
            align: 'center',
        };

        for (let iter = CELL_COUNT - 1; iter >= 0; iter--) {
            xpos = 280 + (iter % 5) * cell_gap;
            ypos = 192 + Math.floor(iter / 5) * cell_gap;
            this.Text_CellWinPoint[iter] = this.add
                .text(xpos, ypos, 0, style)
                .setOrigin(0.5, 0)
                .setVisible(false);
        }

        this.GetPrizeButton = this.addButton(
            202,
            633,
            ASSET_KEY_GET_PRIZE_BUTTON,
            this.onClick_GetPrizeButton,
            this,
            0,
            1,
            2,
            0,
        ).setFrame(3);
        this.GetPrizeButton.input.enabled = false;

        let aniConfig = {
            key: ANI_KEY_GET_PRIZE_EFFECT,
            frames: this.anims.generateFrameNumbers(ASSET_KEY_GET_PRIZE_BUTTON_EFFECT, {
                start: 0,
                end: 24,
            }),
            hideOnComplete: true,
        };

        this.anims.create(aniConfig);
        this.Spr_GetPrizeEffect = this.add
            .sprite(202, 633, ASSET_KEY_GET_PRIZE_BUTTON_EFFECT)
            .setOrigin(0)
            .setVisible(false);

        // Cell Effect
        aniConfig = {
            key: ANI_KEY_CELL_EFFECT_LOSE,
            frames: this.anims.generateFrameNumbers(ASSET_KEY_CELL_EFFECT[1], {
                start: 0,
                end: 12,
            }),
            hideOnComplete: true,
        };

        this.anims.create(aniConfig);
        this.Spr_CellEffectLose = this.add
            .sprite(0, 0, ASSET_KEY_CELL_EFFECT[1])
            .setOrigin(0)
            .setVisible(false);

        aniConfig = {
            key: ANI_KEY_CELL_EFFECT_WIN,
            frames: this.anims.generateFrameNumbers(ASSET_KEY_CELL_EFFECT[0], {
                start: 0,
                end: 12,
            }),
            hideOnComplete: true,
        };

        this.anims.create(aniConfig);
        this.Spr_CellEffectWin = this.add
            .sprite(0, 0, ASSET_KEY_CELL_EFFECT[0])
            .setOrigin(0)
            .setVisible(false);

        this.Spr_GameOver = this.add
            .sprite(center_x, center_y, ASSET_KEY_GAME_OVER)
            .setAlpha(0)
            .setVisible(false);

        // Popup
        xpos = 231;
        ypos = 115;

        for (let iter = 0; iter < 2; iter++) {
            this.Spr_PopupWin[iter] = this.add
                .sprite(xpos, ypos, ASSET_KEY_POPUP_WIN[iter])
                .setOrigin(0)
                .setVisible(false);
            this.Spr_PopupLose[iter] = this.add
                .sprite(xpos, ypos, ASSET_KEY_POPUP_LOSE[iter])
                .setOrigin(0)
                .setVisible(false);
        }

        aniConfig = {
            key: ANI_KEY_POPUP_EFFECT_WIN,
            frames: this.anims.generateFrameNumbers(ASSET_KEY_POPUP_EFFECT[0], {
                start: 0,
                end: 24,
            }),
            hideOnComplete: true,
        };

        this.anims.create(aniConfig);
        this.Spr_PopupEffectWin = this.add
            .sprite(xpos, ypos, ASSET_KEY_POPUP_EFFECT[0])
            .setOrigin(0)
            .setVisible(false);

        aniConfig = {
            key: ANI_KEY_POPUP_EFFECT_LOSE,
            frames: this.anims.generateFrameNumbers(ASSET_KEY_POPUP_EFFECT[1], {
                start: 0,
                end: 24,
            }),
            hideOnComplete: true,
        };

        this.anims.create(aniConfig);
        this.Spr_PopupEffectLose = this.add
            .sprite(xpos, ypos, ASSET_KEY_POPUP_EFFECT[1])
            .setOrigin(0)
            .setVisible(false);

        xpos = 284;
        ypos = 454;

        this.RetryGameButton = this.addButton(
            xpos,
            ypos,
            ASSET_KEY_POPUP_BUTTON[0],
            this.onClick_RetryGame,
            this,
            0,
            1,
            2,
            0,
        ).setVisible(false);

        xpos = 435;
        this.ExitGameButton = this.addButton(
            xpos,
            ypos,
            ASSET_KEY_POPUP_BUTTON[1],
            this.onClick_ExitGame,
            this,
            0,
            1,
            2,
            0,
        ).setVisible(false);

        this.Snd_CellClick = this.sound.add(ASSET_KEY_SOUND_CELL_CLICK);
        this.Snd_Win = this.sound.add(ASSET_KEY_SOUND_WIN);
        this.Snd_Lose = this.sound.add(ASSET_KEY_SOUND_LOSE);
        this.Snd_GetPrize = this.sound.add(ASSET_KEY_SOUND_GET_PRIZE);
        this.Snd_PopupWin = this.sound.add(ASSET_KEY_SOUND_POPUP_WIN);
        this.Snd_PopupLose = this.sound.add(ASSET_KEY_SOUND_POPUP_LOSE);

        this.scene.get('LoadingScene').Snd_MainBgm.setMute(IsMuteBgm);
        this.Snd_CellClick.setMute(IsMuteEffectSound);
        this.Snd_Win.setMute(IsMuteEffectSound);
        this.Snd_Lose.setMute(IsMuteEffectSound);
        this.Snd_GetPrize.setMute(IsMuteEffectSound);
        this.Snd_PopupWin.setMute(IsMuteEffectSound);
        this.Snd_PopupLose.setMute(IsMuteEffectSound);

        this.input.on('gameobjectover', this.onOver_Cell, this);
        this.input.on('gameobjectout', this.onOut_Cell, this);
        this.input.on('gameobjectdown', this.onClick_Cell, this);

        if (User.GameHistroy) {
            for (let iter = User.GameHistroy.length - 1; iter >= 0; iter--) {
                let TargetIndex = User.GameHistroy[iter].cell_index;
                let TargetPoint = User.GameHistroy[iter].win_point;

                this.CellArray[TargetIndex].input.enabled = false;
                this.CellArray[TargetIndex].setVisible(false);

                this.Spr_CellWin[TargetIndex].setVisible(true);

                this.Text_CellWinPoint[TargetIndex].setVisible(true);
                this.Text_CellWinPoint[TargetIndex].setText(TargetPoint);
            }

            this.GetPrizeButton.setFrame(0);
            this.GetPrizeButton.input.enabled = true;
        }
    },

    update: function (time, delta) {
        if (this.IsGameOver === true || this.IsGameStop === true) {
            this.GetPrizeButton.setFrame(3);
            this.GetPrizeButton.input.enabled = false;

            if (this.IsGameOver === true) {
                if (User.Point < MIN_BET_POINT) {
                    this.RetryGameButton.setFrame(3);
                    this.RetryGameButton.input.enabled = false;
                }
            }
        }
    },

    // Mouse Event Handler
    onOver_Cell: function (pointer, Cell) {
        if (Cell.Index === undefined || this.IsGameOver === true || this.IsGameStop === true)
            return;
        // this.Spr_MouseOverCell.setVisible(true).setPosition(Cell.x, Cell.y);
    },

    onOut_Cell: function (pointer, Cell) {
        // this.Spr_MouseOverCell.setVisible(false);
    },

    onClick_Cell: function (pointer, Cell) {
        if (Cell.Index === undefined || this.IsGameOver === true || this.IsGameStop === true)
            return;

        if (User.RequestData === false) {
            User.RequestData = true;
            User.ReceivedData = false;

            this.input.enabled = false;
            Cell.input.enabled = false;

            this.GetPrizeButton.input.enabled = false;
            // this.Spr_MouseOverCell.setVisible(false);
            this.Snd_CellClick.play();

            let sendData = { game_id: User.GameID, cell_index: Cell.Index };
            const _this = this;
            $.ajaxSetup({
                headers: { Authorization: `Bearer ` + ACCESS_TOKEN },
            });

            $.ajax({
                url: JUDGEMENT_API_URL,
                dataType: 'json',
                type: 'post',
                async: false,
                contentType: 'application/json; charset=utf-8',
                traditional: true,
                data: JSON.stringify(sendData),
                success: function (response) {
                    let result = response.result;
                    // console.log("====================================");
                    // console.log("test", response);
                    // console.log("====================================");
                    if (result === 'success') {
                        _this.Process_JudgementCell(response);
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
    },

    onClick_GetPrizeButton: function (pointer) {
        if (User.RequestData === false) {
            User.RequestData = true;
            User.ReceivedData = false;
            this.input.enabled = false;
            this.GetPrizeButton.input.enabled = false;
            this.Snd_GetPrize.play();

            for (let iter = CELL_COUNT - 1; iter >= 0; iter--) {
                this.CellArray[iter].input.enabled = false;
            }

            let sendData = { game_id: User.GameID, reward: User.Reward };
            let response_data = null;

            $.ajaxSetup({
                headers: { Authorization: `Bearer ` + ACCESS_TOKEN },
            });

            $.ajax({
                url: GAME_WIN_API_URL,
                dataType: 'json',
                type: 'post',
                async: false,
                contentType: 'application/json; charset=utf-8',
                traditional: true,
                data: JSON.stringify(sendData),
                success: function (response) {
                    // console.log(response)
                    let result = response.errorCode;

                    if (!result) {
                        response_data = response;
                    } else {
                        alert(response.errorMessage);
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

            if (response_data) {
                this.Process_AcquirePoint(response_data);
            }
        }
    },

    onClick_RetryGame: function (pointer) {
        if (User.RequestData === false) {
            this.Snd_PopupWin.stop();
            this.Snd_PopupLose.stop();

            User.RequestData = true;
            User.ReceivedData = false;

            let sendData = { level: User.Level };
            const _this = this;

            $.ajaxSetup({
                headers: { Authorization: `Bearer ` + ACCESS_TOKEN },
            });
            $.ajax({
                url: GAME_START_API_URL,
                dataType: 'json',
                type: 'post',
                async: false,
                contentType: 'application/json; charset=utf-8',
                traditional: true,
                data: JSON.stringify(sendData),
                success: function (response) {
                    let result = response.errorCode;

                    if (!result) {
                        // console.log('onClick_RetryGame',response )
                        _this.Process_RetryGame(response);
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
    },

    onClick_ExitGame: function (pointer) {
        if (this.IsGameStop === true) {
            this.PopupWinEffect.stop();
        } else if (this.IsGameOver === true) {
            this.PopupLoseEffect.stop();
        }

        User.ReceivedData = false;
        this.scene.start('TitleScene');
    },

    onClick_BgmButton: function (pointer) {
        //if(pointer.event.button !== 0) return;

        IsMuteBgm = !IsMuteBgm;
        this.scene.get('LoadingScene').Snd_MainBgm.setMute(IsMuteBgm);
    },

    onClick_EffectSoundButton: function (pointer) {
        //if(pointer.event.button !== 0) return;

        IsMuteEffectSound = !IsMuteEffectSound;
        this.Snd_CellClick.setMute(IsMuteEffectSound);
        this.Snd_Win.setMute(IsMuteEffectSound);
        this.Snd_Lose.setMute(IsMuteEffectSound);
        this.Snd_GetPrize.setMute(IsMuteEffectSound);
        this.Snd_PopupWin.setMute(IsMuteEffectSound);
        this.Snd_PopupLose.setMute(IsMuteEffectSound);
    },

    Process_JudgementCell: function (data) {
        if (User.ReceivedData === false) {
            if (data.cell_list === null) {
                data.cell_list = [];
            }
            User.ReceivedData = true;
            User.RequestData = false;
            User.Reward = data.reward;
            User.NextReward = data.next_reward;

            let target_cell = this.CellArray[data.cell_index];
            target_cell.setVisible(false);

            let is_win = data.cell_result === 'WIN';
            let gap = 77;

            this.PlayCellEffect(target_cell.x - gap, target_cell.y - gap, is_win);

            this.time.delayedCall(
                400,
                function () {
                    if (is_win === true) {
                        this.Spr_CellWin[target_cell.Index].setVisible(true);

                        this.Text_CellWinPoint[target_cell.Index].setVisible(true);
                        this.Text_CellWinPoint[target_cell.Index].setText(this.NextReward);

                        this.Spr_GetPrizeEffect.setVisible(true);
                        this.Spr_GetPrizeEffect.anims.play(ANI_KEY_GET_PRIZE_EFFECT);

                        this.BGEffect.play();

                        this.SetNumber(User.NextReward, 16, ASSET_KEY_NUMBER_REWARD);
                        this.SetNumber(User.Reward, 28, ASSET_KEY_NUMBER_TOTAL_REWARD);

                        this.NextReward = User.NextReward;
                        this.GetPrizeButton.setFrame(0);
                    } else {
                        for (let iter = 0; iter < data.cell_list.length; iter++) {
                            this.Spr_CellLose[parseInt(data.cell_list[iter])].setVisible(true);
                        }

                        this.Reward = 0;
                        this.NextReward = 0;

                        this.SetNumber(User.NextReward, 16, ASSET_KEY_NUMBER_REWARD);
                        this.SetNumber(User.Reward, 28, ASSET_KEY_NUMBER_TOTAL_REWARD);

                        this.GetPrizeButton.input.enabled = false;
                    }
                },
                null,
                this,
            );

            this.time.delayedCall(
                500,
                function () {
                    this.input.enabled = true;

                    if (is_win === true) {
                        this.Spr_CellEffectWin.setVisible(false);
                        this.Snd_Win.play();

                        if (data.game_clear === true) {
                            for (let iter = CELL_COUNT - 1; iter >= 0; iter--) {
                                this.CellArray[iter].input.enabled = false;
                            }
                        }
                    } else {
                        this.GetPrizeButton.input.enabled = false;
                        this.Snd_Lose.play();

                        for (let iter = CELL_COUNT - 1; iter >= 0; iter--) {
                            this.CellArray[iter].input.enabled = false;
                        }
                    }
                },
                null,
                this,
            );

            this.time.delayedCall(
                1000,
                function () {
                    if (is_win) {
                        this.GetPrizeButton.input.enabled = true;

                        if (data.game_clear === true) {
                            if (User.RequestData === false) {
                                User.RequestData = true;
                                User.ReceivedData = false;

                                this.input.enabled = false;
                                this.GetPrizeButton.input.enabled = false;
                                this.Snd_GetPrize.play();

                                for (let iter = CELL_COUNT - 1; iter >= 0; iter--) {
                                    this.CellArray[iter].input.enabled = false;
                                }

                                let sendData = { game_id: User.GameID, reward: User.Reward };
                                let response_data = null;

                                $.ajaxSetup({
                                    headers: { Authorization: `Bearer ` + ACCESS_TOKEN },
                                });
                                $.ajax({
                                    url: GAME_WIN_API_URL,
                                    dataType: 'json',
                                    type: 'post',
                                    async: false,
                                    contentType: 'application/json; charset=utf-8',
                                    traditional: true,
                                    data: JSON.stringify(sendData),
                                    success: function (response) {
                                        // console.log(response)
                                        let result = response.errorCode;

                                        if (!result) {
                                            response_data = response;
                                        } else {
                                            alert(response.errorMessage);
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

                                if (response_data) {
                                    this.Process_AcquirePoint(response_data);
                                }
                            }
                        }
                    } else {
                        this.SetVisibleNumber(ASSET_KEY_NUMBER_REWARD, false);
                        this.SetVisibleNumber(ASSET_KEY_NUMBER_TOTAL_REWARD, false);

                        this.Spr_CellEffectLose.setVisible(false);
                        this.GetPrizeButton.setFrame(3);

                        this.Spr_PopupEffectLose.setVisible(true);
                        this.Spr_PopupEffectLose.anims.play(ANI_KEY_POPUP_EFFECT_LOSE);
                        this.Snd_PopupLose.play();
                        this.PlayFadeInEffect(1);

                        this.time.delayedCall(1000, this.GameOver, null, this);
                    }
                },
                null,
                this,
            );
        }
    },
    withComma: function (numbers) {
        // add comma
        if (/^[0-9\,]+$/.test(numbers) == false || numbers == 0) {
            return 0;
        } else {
            let n = numbers + '';
            const reg = /(^[+-]?\d+)(\d{3})/;
            while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');

            return n;
        }
    },
    Process_AcquirePoint: function (data) {
        if (User.ReceivedData === false) {
            User.ReceivedData = true;
            User.RequestData = false;
            User.Point = data.point;

            this.Spr_PopupEffectWin.setVisible(true);
            this.Spr_PopupEffectWin.anims.play(ANI_KEY_POPUP_EFFECT_WIN);
            this.Snd_PopupWin.play();
            this.PlayFadeInEffect(1);
            this.SetVisibleNumber(ASSET_KEY_NUMBER_REWARD, false);

            this.time.delayedCall(
                1000,
                function () {
                    this.Spr_PopupEffectWin.setVisible(false);

                    this.Spr_PopupWin[0].setVisible(true);
                    this.Spr_PopupWin[1].setVisible(true);

                    this.RetryGameButton.setVisible(true);
                    this.ExitGameButton.setVisible(true);

                    this.PopupWinEffect = this.tweens.add({
                        targets: this.Spr_PopupWin[1],
                        alpha: { start: 0, to: 1 },
                        ease: 'Linear', //'Cubic', 'Elastic', 'Bounce', 'Back'
                        duration: 1000,
                        delay: 0,
                        yoyo: true,
                        repeat: -1,
                    });

                    this.WinPrize = User.Reward;
                    this.SetNumber(this.WinPrize, 28, ASSET_KEY_NUMBER_WIN_PRIZE);

                    User.Reward = 0;
                    User.NextReward = 0;
                    // this.SetNumber(User.NextReward, 16, ASSET_KEY_NUMBER_REWARD);
                    this.SetNumber(User.Reward, 28, ASSET_KEY_NUMBER_TOTAL_REWARD);
                    this.SetVisibleNumber(ASSET_KEY_NUMBER_TOTAL_REWARD, false);

                    // postData.parent('update-user-point', {"point":User.Point})
                },
                null,
                this,
            );

            this.time.delayedCall(
                1300,
                function () {
                    this.input.enabled = true;
                    this.RetryGameButton.input.enabled = true;
                    this.ExitGameButton.input.enabled = true;
                    this.IsGameStop = true;
                },
                null,
                this,
            );
        }
    },

    Process_RetryGame: function (data) {
        if (User.ReceivedData === false) {
            User.ReceivedData = true;
            User.RequestData = false;

            this.WinPrize = 0;

            if (this.IsGameStop === true) {
                this.PopupWinEffect.stop();
                this.Spr_PopupWin[0].setVisible(false);
                this.Spr_PopupWin[1].setVisible(false);

                this.SetVisibleNumber(ASSET_KEY_NUMBER_WIN_PRIZE, false);
            } else if (this.IsGameOver === true) {
                this.PopupLoseEffect.stop();
                this.Spr_PopupLose[0].setVisible(false);
                this.Spr_PopupLose[1].setVisible(false);
            }

            this.RetryGameButton.setVisible(false);
            this.ExitGameButton.setVisible(false);

            for (let iter = CELL_COUNT - 1; iter >= 0; iter--) {
                this.CellArray[iter].input.enabled = true;
                this.CellArray[iter].setVisible(true);
                this.Text_CellWinPoint[iter].setVisible(false);
                this.Spr_CellWin[iter].setVisible(false);
                this.Spr_CellLose[iter].setVisible(false);
            }

            User.Point = data.point;
            User.GameID = data.game_id;
            User.Reward = data.reward;
            this.Reward = data.reward;

            User.NextReward = data.next_reward;
            this.NextReward = data.next_reward;

            this.SetNumber(this.NextReward, 16, ASSET_KEY_NUMBER_REWARD);
            this.SetNumber(this.Reward, 28, ASSET_KEY_NUMBER_TOTAL_REWARD);

            this.PlayFadeOutEffect(0.1);

            this.input.enabled = false;
            this.time.delayedCall(100, this.ResetGame, null, this);

            // postData.parent('update-user-point', {"point":User.Point})
        }
    },

    ResetGame: function () {
        this.IsGameOver = false;
        this.IsGameStop = false;
        this.input.enabled = true;
    },

    GameOver: function () {
        this.Spr_PopupEffectLose.setVisible(false);

        this.Spr_PopupLose[0].setVisible(true);
        this.Spr_PopupLose[1].setVisible(true);

        this.PopupLoseEffect = this.tweens.add({
            targets: this.Spr_PopupLose[1],
            alpha: { start: 0, to: 1 },
            ease: 'Linear', //'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 1000,
            delay: 0,
            yoyo: true,
            repeat: -1,
        });

        this.RetryGameButton.setVisible(true).input.enabled = true;
        this.ExitGameButton.setVisible(true).input.enabled = true;

        if (User.Point < MIN_BET_POINT) {
            this.RetryGameButton.setFrame(3);
            this.RetryGameButton.input.enabled = false;
        }

        this.WinScore = 0;
        this.IsGameOver = true;
    },

    PlayFadeInEffect: function (time) {
        this.Spr_GameOver.setAlpha(0).setVisible(true);
        this.BGFadeInEffect = this.tweens.add({
            targets: this.Spr_GameOver,
            alpha: { start: 0, to: 0.8 },
            ease: 'Linear', //'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 1000 * time,
            repeat: 0,
        });
    },

    PlayFadeOutEffect: function (time) {
        this.Spr_GameOver.setAlpha(0.8).setVisible(true);
        this.BGFadeOutEffect = this.tweens.add({
            targets: this.Spr_GameOver,
            alpha: { start: 0.8, to: 0 },
            ease: 'Linear', //'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 1000 * time,
            repeat: 0,
        });
    },

    PlayCellEffect: function (xpos, ypos, is_win) {
        if (is_win === true) {
            this.Spr_CellEffectWin.setVisible(true);
            this.Spr_CellEffectWin.setPosition(xpos, ypos);
            this.Spr_CellEffectWin.anims.play(ANI_KEY_CELL_EFFECT_WIN);
        } else {
            this.Spr_CellEffectLose.setVisible(true);
            this.Spr_CellEffectLose.setPosition(xpos, ypos);
            this.Spr_CellEffectLose.anims.play(ANI_KEY_CELL_EFFECT_LOSE);
        }
    },

    SetNumber: function (number, image_width, asset_key) {
        if (asset_key === ASSET_KEY_NUMBER_REWARD) {
            for (let iter = 0; iter < this.Number_Reward.length; iter++) {
                this.Number_Reward[iter].destroy();
            }
        } else if (asset_key === ASSET_KEY_NUMBER_TOTAL_REWARD) {
            for (let iter = 0; iter < this.Number_TotalReward.length; iter++) {
                this.Number_TotalReward[iter].destroy();
            }
        } else if (asset_key === ASSET_KEY_NUMBER_WIN_PRIZE) {
            for (let iter = 0; iter < this.Number_WinPrize.length; iter++) {
                this.Number_WinPrize[iter].destroy();
            }
        }

        let number_buffer = Array.from(String(number), Number);
        let total_number_width = image_width * number_buffer.length;
        let half_number_width = Number(image_width / 2);
        let pivot = this.cameras.main.centerX;
        let left_xpos = -1 * (total_number_width / 2) + half_number_width;
        let xpos = 0;

        for (let iter = 0; iter < number_buffer.length; iter++) {
            xpos = pivot + (left_xpos + iter * image_width);

            if (asset_key === ASSET_KEY_NUMBER_REWARD) {
                this.Number_Reward[iter] = this.add
                    .sprite(xpos, 533, asset_key, number_buffer[iter])
                    .setOrigin(0.5, 0);
            } else if (asset_key === ASSET_KEY_NUMBER_TOTAL_REWARD) {
                this.Number_TotalReward[iter] = this.add
                    .sprite(xpos, 575, asset_key, number_buffer[iter])
                    .setOrigin(0.5, 0);
            } else if (asset_key === ASSET_KEY_NUMBER_WIN_PRIZE) {
                this.Number_WinPrize[iter] = this.add
                    .sprite(xpos, 344, asset_key, number_buffer[iter])
                    .setOrigin(0.5, 0);
            }
        }
    },

    SetVisibleNumber: function (asset_key, visible) {
        if (asset_key === ASSET_KEY_NUMBER_REWARD) {
            for (let iter = 0; iter < this.Number_Reward.length; iter++) {
                this.Number_Reward[iter].setVisible(visible);
            }
        } else if (asset_key === ASSET_KEY_NUMBER_TOTAL_REWARD) {
            for (let iter = 0; iter < this.Number_TotalReward.length; iter++) {
                this.Number_TotalReward[iter].setVisible(visible);
            }
        } else if (asset_key === ASSET_KEY_NUMBER_WIN_PRIZE) {
            for (let iter = 0; iter < this.Number_WinPrize.length; iter++) {
                this.Number_WinPrize[iter].setVisible(visible);
            }
        }
    },
});
