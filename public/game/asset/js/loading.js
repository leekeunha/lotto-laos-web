const ASSET_KEY_LOADING = ['loadingbar_bg', 'loadingbar_fill'];
const ASSET_KEY_BG = ['bg_0', 'bg_1'];
const ASSET_KEY_BG_TITLE = 'bg_title';

const ASSET_KEY_BGM_BUTTON = 'btn_bgm';
const ASSET_KEY_EFFECT_SOUND_BUTTON = 'btn_effect_sound';

const ASSET_KEY_LEVEL_BUTTON = ['btn_level_0', 'btn_level_1', 'btn_level_2', 'btn_level_3'];
const ASSET_KEY_START_BUTTON = 'btn_start';

const ASSET_KEY_UI_LEVEL = ['ui_level_0', 'ui_level_1', 'ui_level_2', 'ui_level_3'];
const ASSET_KEY_UI_REWARD_PANEL = ['ui_reward', 'ui_total_reward'];
const ASSET_KEY_GET_PRIZE_BUTTON = 'btn_get_prize';
const ASSET_KEY_GET_PRIZE_BUTTON_EFFECT = 'btn_effect_get_prize';
const ASSET_KEY_CELL_PANEL = 'cell_panel';
const ASSET_KEY_CELL = ['cell_empty', 'cell_mouse_over'];
const ASSET_KEY_CELL_RESULT = ['cell_win', 'cell_lose'];
const ASSET_KEY_CELL_EFFECT = ['cell_effect_win', 'cell_effect_lose'];

const ASSET_KEY_NUMBER_REWARD = 'number_reward';
const ASSET_KEY_NUMBER_TOTAL_REWARD = 'number_total_reward';
const ASSET_KEY_NUMBER_WIN_PRIZE = 'number_win_prize';

const ASSET_KEY_POPUP_WIN = ['popup_win_0', 'popup_win_1'];
const ASSET_KEY_POPUP_LOSE = ['popup_lose_0', 'popup_lose_1'];
const ASSET_KEY_POPUP_EFFECT = ['popup_effect_win', 'popup_effect_lose'];
const ASSET_KEY_POPUP_BUTTON = ['popup_btn_retry', 'popup_btn_exit'];
const ASSET_KEY_GAME_OVER = 'game_over';

const ASSET_KEY_SOUND_MAIN_BGM = 'main_bgm';
const ASSET_KEY_SOUND_LEVEL_BUTTON = 'btn_level';
const ASSET_KEY_SOUND_START_BUTTON = 'btn_start';
const ASSET_KEY_SOUND_CELL_CLICK = 'cell_click';
const ASSET_KEY_SOUND_WIN = 'win';
const ASSET_KEY_SOUND_LOSE = 'lose';
const ASSET_KEY_SOUND_GET_PRIZE = 'get_prize';
const ASSET_KEY_SOUND_POPUP_WIN = 'popup_win';
const ASSET_KEY_SOUND_POPUP_LOSE = 'popup_lose';

const ANI_KEY_CELL_EFFECT_WIN = 'ani_cell_effect_win';
const ANI_KEY_CELL_EFFECT_LOSE = 'ani_cell_effect_lose';
const ANI_KEY_POPUP_EFFECT_WIN = 'ani_popup_effect_win';
const ANI_KEY_POPUP_EFFECT_LOSE = 'ani_popup_effect_lose';
const ANI_KEY_GET_PRIZE_EFFECT = 'ani_get_prize_effect';

const CELL_COUNT = 25;
const MIN_BET_POINT = 5000;

let IsMuteBgm = false;
let IsMuteEffectSound = false;

let LoadingScene = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize: function LoadingScene() {
        let loading_bg_url = IMAGE_PATH + './' + ASSET_KEY_LOADING[0] + IMAGE_FILE_EXTENSION;
        let loading_bar_url = IMAGE_PATH + './' + ASSET_KEY_LOADING[1] + IMAGE_FILE_EXTENSION;
        let sceneOption = {
            key: 'LoadingScene',
            pack: {
                files: [
                    { type: 'image', key: ASSET_KEY_LOADING[0], url: loading_bg_url },
                    { type: 'image', key: ASSET_KEY_LOADING[1], url: loading_bar_url },
                ],
            },
        };

        Phaser.Scene.call(this, sceneOption);
    },

    init: function () {},

    preload: function () {
        let centerX = this.cameras.main.centerX;
        let centerY = this.cameras.main.centerY;

        this.loadingbar_bg = this.add.sprite(centerX, centerY, ASSET_KEY_LOADING[0]);
        this.loadingbar_fill = this.add.sprite(centerX, centerY, ASSET_KEY_LOADING[1]);
        this.setPreloadSprite(this.loadingbar_fill);

        this.load.image(ASSET_KEY_BG[0], IMAGE_PATH + '' + ASSET_KEY_BG[0] + IMAGE_FILE_EXTENSION);
        this.load.image(ASSET_KEY_BG[1], IMAGE_PATH + '' + ASSET_KEY_BG[1] + IMAGE_FILE_EXTENSION);
        this.load.image(
            ASSET_KEY_BG_TITLE,
            IMAGE_PATH + '' + ASSET_KEY_BG_TITLE + IMAGE_FILE_EXTENSION,
        );

        let frameConfig = { frameWidth: 38, frameHeight: 38 };
        this.load.spritesheet(
            ASSET_KEY_BGM_BUTTON,
            IMAGE_PATH + '' + ASSET_KEY_BGM_BUTTON + IMAGE_FILE_EXTENSION,
            frameConfig,
        );
        this.load.spritesheet(
            ASSET_KEY_EFFECT_SOUND_BUTTON,
            IMAGE_PATH + '' + ASSET_KEY_EFFECT_SOUND_BUTTON + IMAGE_FILE_EXTENSION,
            frameConfig,
        );

        frameConfig = { frameWidth: 200, frameHeight: 263 };
        this.load.spritesheet(
            ASSET_KEY_LEVEL_BUTTON[0],
            IMAGE_PATH + '' + ASSET_KEY_LEVEL_BUTTON[0] + IMAGE_FILE_EXTENSION,
            frameConfig,
        );
        this.load.spritesheet(
            ASSET_KEY_LEVEL_BUTTON[1],
            IMAGE_PATH + '' + ASSET_KEY_LEVEL_BUTTON[1] + IMAGE_FILE_EXTENSION,
            frameConfig,
        );
        this.load.spritesheet(
            ASSET_KEY_LEVEL_BUTTON[2],
            IMAGE_PATH + '' + ASSET_KEY_LEVEL_BUTTON[2] + IMAGE_FILE_EXTENSION,
            frameConfig,
        );
        this.load.spritesheet(
            ASSET_KEY_LEVEL_BUTTON[3],
            IMAGE_PATH + '' + ASSET_KEY_LEVEL_BUTTON[3] + IMAGE_FILE_EXTENSION,
            frameConfig,
        );

        frameConfig = { frameWidth: 450, frameHeight: 200 };
        this.load.spritesheet(
            ASSET_KEY_START_BUTTON,
            IMAGE_PATH + '' + ASSET_KEY_START_BUTTON + IMAGE_FILE_EXTENSION,
            frameConfig,
        );

        this.load.image(
            ASSET_KEY_UI_LEVEL[0],
            IMAGE_PATH + '' + ASSET_KEY_UI_LEVEL[0] + IMAGE_FILE_EXTENSION,
        );
        this.load.image(
            ASSET_KEY_UI_LEVEL[1],
            IMAGE_PATH + '' + ASSET_KEY_UI_LEVEL[1] + IMAGE_FILE_EXTENSION,
        );
        this.load.image(
            ASSET_KEY_UI_LEVEL[2],
            IMAGE_PATH + '' + ASSET_KEY_UI_LEVEL[2] + IMAGE_FILE_EXTENSION,
        );
        this.load.image(
            ASSET_KEY_UI_LEVEL[3],
            IMAGE_PATH + '' + ASSET_KEY_UI_LEVEL[3] + IMAGE_FILE_EXTENSION,
        );

        this.load.image(
            ASSET_KEY_UI_REWARD_PANEL[0],
            IMAGE_PATH + '' + ASSET_KEY_UI_REWARD_PANEL[0] + IMAGE_FILE_EXTENSION,
        );
        this.load.image(
            ASSET_KEY_UI_REWARD_PANEL[1],
            IMAGE_PATH + '' + ASSET_KEY_UI_REWARD_PANEL[1] + IMAGE_FILE_EXTENSION,
        );

        frameConfig = { frameWidth: 456, frameHeight: 78 };
        this.load.spritesheet(
            ASSET_KEY_GET_PRIZE_BUTTON,
            IMAGE_PATH + '' + ASSET_KEY_GET_PRIZE_BUTTON + IMAGE_FILE_EXTENSION,
            frameConfig,
        );
        this.load.spritesheet(
            ASSET_KEY_GET_PRIZE_BUTTON_EFFECT,
            IMAGE_PATH + '' + ASSET_KEY_GET_PRIZE_BUTTON_EFFECT + IMAGE_FILE_EXTENSION,
            frameConfig,
        );

        this.load.image(
            ASSET_KEY_CELL_PANEL,
            IMAGE_PATH + '' + ASSET_KEY_CELL_PANEL + IMAGE_FILE_EXTENSION,
        );
        this.load.image(
            ASSET_KEY_CELL[0],
            IMAGE_PATH + '' + ASSET_KEY_CELL[0] + IMAGE_FILE_EXTENSION,
        );
        this.load.image(
            ASSET_KEY_CELL[1],
            IMAGE_PATH + '' + ASSET_KEY_CELL[1] + IMAGE_FILE_EXTENSION,
        );

        this.load.image(
            ASSET_KEY_CELL_RESULT[0],
            IMAGE_PATH + '' + ASSET_KEY_CELL_RESULT[0] + IMAGE_FILE_EXTENSION,
        );
        this.load.image(
            ASSET_KEY_CELL_RESULT[1],
            IMAGE_PATH + '' + ASSET_KEY_CELL_RESULT[1] + IMAGE_FILE_EXTENSION,
        );

        frameConfig = { frameWidth: 228, frameHeight: 228 };
        this.load.spritesheet(
            ASSET_KEY_CELL_EFFECT[0],
            IMAGE_PATH + '' + ASSET_KEY_CELL_EFFECT[0] + IMAGE_FILE_EXTENSION,
            frameConfig,
        );
        this.load.spritesheet(
            ASSET_KEY_CELL_EFFECT[1],
            IMAGE_PATH + '' + ASSET_KEY_CELL_EFFECT[1] + IMAGE_FILE_EXTENSION,
            frameConfig,
        );

        frameConfig = { frameWidth: 16, frameHeight: 22 };
        this.load.spritesheet(
            ASSET_KEY_NUMBER_REWARD,
            IMAGE_PATH + '' + ASSET_KEY_NUMBER_REWARD + IMAGE_FILE_EXTENSION,
            frameConfig,
        );

        frameConfig = { frameWidth: 28, frameHeight: 38 };
        this.load.spritesheet(
            ASSET_KEY_NUMBER_TOTAL_REWARD,
            IMAGE_PATH + '' + ASSET_KEY_NUMBER_TOTAL_REWARD + IMAGE_FILE_EXTENSION,
            frameConfig,
        );
        this.load.spritesheet(
            ASSET_KEY_NUMBER_WIN_PRIZE,
            IMAGE_PATH + '' + ASSET_KEY_NUMBER_TOTAL_REWARD + IMAGE_FILE_EXTENSION,
            frameConfig,
        );

        this.load.image(
            ASSET_KEY_POPUP_WIN[0],
            IMAGE_PATH + '' + ASSET_KEY_POPUP_WIN[0] + IMAGE_FILE_EXTENSION,
        );
        this.load.image(
            ASSET_KEY_POPUP_WIN[1],
            IMAGE_PATH + '' + ASSET_KEY_POPUP_WIN[1] + IMAGE_FILE_EXTENSION,
        );

        this.load.image(
            ASSET_KEY_POPUP_LOSE[0],
            IMAGE_PATH + '' + ASSET_KEY_POPUP_LOSE[0] + IMAGE_FILE_EXTENSION,
        );
        this.load.image(
            ASSET_KEY_POPUP_LOSE[1],
            IMAGE_PATH + '' + ASSET_KEY_POPUP_LOSE[1] + IMAGE_FILE_EXTENSION,
        );

        frameConfig = { frameWidth: 398, frameHeight: 448 };
        this.load.spritesheet(
            ASSET_KEY_POPUP_EFFECT[0],
            IMAGE_PATH + '' + ASSET_KEY_POPUP_EFFECT[0] + IMAGE_FILE_EXTENSION,
            frameConfig,
        );
        this.load.spritesheet(
            ASSET_KEY_POPUP_EFFECT[1],
            IMAGE_PATH + '' + ASSET_KEY_POPUP_EFFECT[1] + IMAGE_FILE_EXTENSION,
            frameConfig,
        );

        frameConfig = { frameWidth: 141.25, frameHeight: 60 };
        this.load.spritesheet(
            ASSET_KEY_POPUP_BUTTON[0],
            IMAGE_PATH + '' + ASSET_KEY_POPUP_BUTTON[0] + IMAGE_FILE_EXTENSION,
            frameConfig,
        );
        this.load.spritesheet(
            ASSET_KEY_POPUP_BUTTON[1],
            IMAGE_PATH + '' + ASSET_KEY_POPUP_BUTTON[1] + IMAGE_FILE_EXTENSION,
            frameConfig,
        );

        this.load.image(
            ASSET_KEY_GAME_OVER,
            IMAGE_PATH + '' + ASSET_KEY_GAME_OVER + IMAGE_FILE_EXTENSION,
        );

        this.load.audio(
            ASSET_KEY_SOUND_MAIN_BGM,
            SOUND_PATH + ASSET_KEY_SOUND_MAIN_BGM + SOUND_FILE_EXTENSION,
        );
        this.load.audio(
            ASSET_KEY_SOUND_LEVEL_BUTTON,
            SOUND_PATH + ASSET_KEY_SOUND_LEVEL_BUTTON + SOUND_FILE_EXTENSION,
        );
        this.load.audio(
            ASSET_KEY_SOUND_START_BUTTON,
            SOUND_PATH + ASSET_KEY_SOUND_START_BUTTON + SOUND_FILE_EXTENSION,
        );
        this.load.audio(
            ASSET_KEY_SOUND_CELL_CLICK,
            SOUND_PATH + ASSET_KEY_SOUND_CELL_CLICK + SOUND_FILE_EXTENSION,
        );
        this.load.audio(
            ASSET_KEY_SOUND_WIN,
            SOUND_PATH + ASSET_KEY_SOUND_WIN + SOUND_FILE_EXTENSION,
        );
        this.load.audio(
            ASSET_KEY_SOUND_LOSE,
            SOUND_PATH + ASSET_KEY_SOUND_LOSE + SOUND_FILE_EXTENSION,
        );
        this.load.audio(
            ASSET_KEY_SOUND_GET_PRIZE,
            SOUND_PATH + ASSET_KEY_SOUND_GET_PRIZE + SOUND_FILE_EXTENSION,
        );
        this.load.audio(
            ASSET_KEY_SOUND_POPUP_WIN,
            SOUND_PATH + ASSET_KEY_SOUND_POPUP_WIN + SOUND_FILE_EXTENSION,
        );
        this.load.audio(
            ASSET_KEY_SOUND_POPUP_LOSE,
            SOUND_PATH + ASSET_KEY_SOUND_POPUP_LOSE + SOUND_FILE_EXTENSION,
        );
    },

    create: function () {
        this.loadingbar_bg.destroy();
        this.loadingbar_fill.destroy();
        this.preloadSprite = null;

        this.Snd_MainBgm = this.sound.add(ASSET_KEY_SOUND_MAIN_BGM);
    },

    update: function () {
        if (User.ReceivedData === true) {
            User.RequestData = false;
            User.ReceivedData = false;
            this.Snd_MainBgm.play({ loop: true, volume: 0.7 });
            this.scene.start(User.StartScene);
        }
    },

    setPreloadSprite: function (sprite) {
        this.preloadSprite = {
            sprite: sprite,
            width: sprite.width,
            height: sprite.height,
        };
        sprite.visible = true;

        this.load.on('progress', this.onProgress, this);
        this.load.on('fileprogress', this.onFileProgress, this);
        this.load.on('complete', this.onComplete, this);
    },

    onProgress: function (value) {
        if (this.preloadSprite) {
            let w = Math.floor(this.preloadSprite.width * value);

            this.preloadSprite.sprite.frame.width = w <= 0 ? 1 : w;
            this.preloadSprite.sprite.frame.cutWidth = w;

            this.preloadSprite.sprite.frame.updateUVs();
        }
    },

    onFileProgress: function (file) {},

    onComplete: function () {
        if (User.RequestData === false) {
            User.RequestData = true;

            // console.log(`Bearer ` + ACCESS_TOKEN);
            $.ajaxSetup({
                headers: { Authorization: `Bearer ` + ACCESS_TOKEN },
            });
            $.ajax({
                url: GAME_INIT_API_URL,
                dataType: 'json',
                type: 'get',
                contentType: 'application/json; charset=utf-8',
                traditional: true,
                success: function (response) {
                    let result = response.errorCode;

                    if (!result) {
                        const rs = {
                            result: response.result ? response.result : 'success',
                            game_id: response.game_id,
                            point: response.point,
                            g_point: response.g_point,
                            s_point: response.s_point,
                            level: response.level,
                            reward: response.reward,
                            next_reward: response.next_reward,
                            start_scene: response.start_scene ? response.start_scene : 'TitleScene',
                            game_history: response.game_history,
                        };
                        console.log(rs);
                        User.SetGameInit(rs);

                        console.log('User Info : ');
                        console.log(User);
                    } else {
                        alert(response.errorMessage);
                    }
                },
                error: function (error) {
                    console.log('status : ' + error.status);
                    console.log('message : ' + error.responseText);
                    alert(error.responseText);
                },
            });
            // }
            // });
        }
    },
});
