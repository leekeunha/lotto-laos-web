export const PAGE_SIZE = 20;
export const HAPPY545_GAME_ID = '1';
export const HAPPY1K_GAME_ID = '2';
export const HAPPY545_GAME_LABEL = 'Happy 5/45';
export const HAPPY1K_GAME_LABEL = 'Happy 1k';
export const MAX_NUMBER_OF_MARBLES = 5;
export const GOLD = 'GOLD';
export const SILVER = 'SILVER';
export const HOME_COLUMN_LENGTH = 5;

export const GOLD_DIGGER_GAME_CODE = 'WG01';
export const HAPPY_BALL_GAME_CODE = 'WG02';
export const HAPPY_NUMBER_GAME_CODE = 'WG03';
export const HAPPY_LADDER_GAME_CODE = 'WG04';

export const HAPPY_BALL_GAME_URL = 'https://seller.happy545.com/g/p/hb';
export const HAPPY_NUMBER_GAME_URL = 'https://seller.happy545.com/g/p/hn';
export const HAPPY_LADDERS_GAME_URL = 'https://seller.happy545.com/g/p/hl';

export const ENCRYPTION_KEY = 'qwertyuiopasdfgh'.repeat(2);
export const IV_LENGTH = 16;

export const ALL = 'All';
export const OLDEST_LABEL = 'Oldest';
export const LATEST_LABEL = 'Latest';
export const RECOMMENDED_LABEL = 'Recommended';
export const HIGEPRICE_LABEL = 'High Price';
export const LOWPRICE_LABEL = 'Low Price';

export const MEMBER = 'Member';
export const PARTNER = 'Partner';

export const DESC = 'DESC';
export const ASC = 'ASC';

export const REQUEST = 'Requested';
export const ACCEPT = 'Accepted';
export const COMPLETE = 'Completed';
export const CANCEL = 'Canceled';

export const AUTH_TOKENS_LOCAL_STORAGE_KEY = 'authTokens';
export const FCM_LOCAL_STORAGE_KEY = 'fcmToken';

export const TERMSOFSERVICE = 'termsOfService';
export const NO_OPEN = 0;
export const MAX_LINES = 300;

export const SERVICE_COUNTRIES = [
    {
        name: 'Laos',
        flags: { svg: 'https://flagcdn.com/la.svg' },
        language: 'lo',
    },
    {
        name: 'South Korea',
        flags: { svg: 'https://flagcdn.com/kr.svg' },
        language: 'ko',
    },
    {
        name: 'United States',
        flags: { svg: 'https://flagcdn.com/us.svg' },
        language: 'en',
    },
];

export const ValidationMessages = {
    REQUIRED: 'This field is required',
    EMAIL_PATTERN: 'Please provide a valid email address',
};

export const MAX_LOTTO_SELECTION_NUMBER = 45;

export const PRICE_PER_LINE = 1000000;

export const POINT_SELECT_ITEMS = [
    {
        label: 'Gold',
        svgFileName: 'gold-database',
        value: 'Gold',
    },
    //TODO
    // {
    //     label: 'Silver',
    //     svgFileName: '/icons/silver-database.svg',
    //     value: 'silver',
    // },
];

export const RESET_INTERVAL_SECONDS = 10;

export const ENTER_EMAIL_PASSWORD_STEP = 0;
export const ENTER_VERIFICATION_CODE_STEP = 1;
export const DONE_STEP = 2;
