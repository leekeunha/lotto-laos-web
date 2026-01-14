let ACCESS_TOKEN = '';

let User = {
    GameID: null,
    Point: 0,
    GoldPoint: 0,
    SilverPoint: 0,
    Level: 0,
    Reward: 0,
    NextReward: 0,
    StartScene: '',
    GameHistroy: null,
    ReceivedData: false,
    RequestData: false,
};

User.SetGameInit = function (data) {
    User.ReceivedData = true;
    User.RequestData = false;
    User.GameID = data.game_id;
    User.Point = data.point;
    User.GoldPoint = data.g_point;
    User.SilverPoint = data.s_point;
    User.Level = data.level;
    User.Reward = data.reward;
    User.NextReward = data.next_reward;
    User.StartScene = data.start_scene;
    User.GameHistroy = data.game_history;
};

User.SetGameStart = function (data) {
    // console.log(data)
    User.ReceivedData = true;
    User.RequestData = false;
    // User.Point = data.point;
    User.GameID = data.game_id;
    User.Reward = data.reward;
    User.NextReward = data.next_reward;
    User.GameHistroy = null;

    // postData.parent('update-user-point', {"point":data.point})
};
