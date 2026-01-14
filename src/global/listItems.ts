import { ASC, DESC, LATEST_LABEL, OLDEST_LABEL } from '../../constants/global';
import { HomeButtonItem } from '../features/home/types';
import { AccountMenuItem } from '../pages/types';
export const bankListItems = [{ value: 'BCEL', label: 'BCEL' }];

export const genderListItems = [
    { value: 'M', label: 'Male' },
    { value: 'F', label: 'Female' },
];

export const stateListItems = [
    {
        value: '17',
        label: 'Attapeu',
    },
    {
        value: '5',
        label: 'Bokeo',
    },
    {
        value: '11',
        label: 'Borikhamxay',
    },
    {
        value: '16',
        label: 'Champasak',
    },
    {
        value: '7',
        label: 'Houaphanh',
    },
    {
        value: '12',
        label: 'Khammouane',
    },
    {
        value: '3',
        label: 'Luang Namtha',
    },
    {
        value: '6',
        label: 'Luang Prabang',
    },
    {
        value: '4',
        label: 'Oudomxay',
    },
    {
        value: '2',
        label: 'Phongsaly',
    },
    {
        value: '14',
        label: 'Salavan',
    },
    {
        value: '13',
        label: 'Savannakhet',
    },
    {
        value: '15',
        label: 'Sekong',
    },
    {
        value: '1',
        label: 'Vientiane Capital',
    },
];

export const informationAccordionItems = [
    {
        header: 'Happy 5/45',
        body: '해피 오사오는 라오스 정부로부터 허가받은 복권 게임입니다. 자동, 수동으로 로또 번호를 선택할 수 있습니다. 판매 금액에 따라 1등 당첨 금액이 결정됩니다. 판매량에 제한이 없어 많이 판매될수록 당첨 금액이 늘어나게 됩니다. 1등 당첨자가 없을 경우 상금이 이월됩니다. 최저 상금액을 보장합니다. 1등 상금액이 낮을 경우 최저 상금액을 보장합니다.',
    },
    {
        header: 'How to Play?',
        body: '1. 원하는 번호를 선택하거나 자동 번호 생성을 선택합니다.2. 구매할 티켓 수를 선택합니다.3. 결제를 완료합니다.4. 추첨이 완료되면 결과를 확인합니다.5. 당첨 시 상금을 수령합니다.',
    },
    {
        header: 'How to Top up?',
        body: '1. 계정에 로그인합니다.2. "Top up" 버튼을 클릭합니다.3. 결제 방법을 선택합니다 (예: 신용카드, 은행 이체 등).4. 충전할 금액을 입력합니다.5. 결제를 완료합니다. 충전 금액이 계정에 반영됩니다.',
    },
    {
        header: 'How to Withdraw?',
        body: `1. 상단 메뉴 또는 상단 바의 내 계정에서 캐시 밸런스를 확인합니다.2. 상단 메뉴의 내 계정에서 [출금]을 선택합니다.3. 출금할 금액을 입력합니다.   a. 최소 출금액보다는 작은 금액을 출금할 수 없습니다.   b. 출금 요청의 크기에 따라 출금 절차가 다릅니다.4. 출금 자금을 선택합니다. a. 출금 자금이 등록되지 않았을 경우 출금 자금을 추가할 수 있습니다.   b. 출금 자금은 상단 메뉴의 [내 계정] -> [출금자금 관리]에서 추가할 수 있습니다. c. 출금 자금이 거래소 입금 주소를 사용한 경우 규정에 따라 입금이 불가할 수 있으니 각별한 주의가 필요합니다. 거래소로 입금이 안될 경우 직접 지갑 주소를 사용하시길 권장합니다.5. [출금 신청]을 선택합니다. a. 출금 시 수수료가 발생할 수 있습니다. 출금 수수료가 발생할 경우 이를 제외한 금액이 귀하의 지갑에 입금됩니다. b. 출금 처리 완료는 해당 금액의 은행 영업 시간에 영향을 받습니다.6. 출금이 완료되면 해당 금액만의 캐시가 차감되고, 선택한 지갑으로 출금이 완료됩니다.a. 귀하의 지갑 상태에 따라서 입금 확인이 지연될 수 있습니다.`,
    },
];

export const companyInformationAccordionItems = [
    {
        header: 'About Us',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        header: 'Terms of Service',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        header: 'Privacy Policy',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
];

export const customerCenterAsideMenuItems = [
    {
        src: '/icons/speakerphone.svg',
        alt: 'speakerphone',
        label: 'Announcement',
        path: 'announcements',
    },
    {
        src: '/icons/star.svg',
        alt: 'star',
        label: 'Event',
        path: 'event?category=INPROGRESS',
    },
    {
        src: '/icons/question-mark-circle.svg',
        alt: 'question-mark-circle',
        label: 'FAQ',
        path: 'faq',
    },
    {
        src: '/icons/chat-alt-2.svg',
        alt: 'chat-alt-2',
        label: '1:1 Inquiry',
        path: 'one-to-one-inquiries',
    },
];

export const ADD_INQUIRY_CATEGORY_OPTIONS = [
    { value: 'I01', label: 'Account' },
    { value: 'I02', label: 'Ticket' },
    { value: 'I03', label: 'Point' },
    { value: 'I04', label: 'Others' },
];

export const RESULT_CATEGORY_OPTIONS = [
    { value: DESC, label: LATEST_LABEL },
    { value: ASC, label: OLDEST_LABEL },
];

export const ORDER_HISTORY_SORT_OPTIONS = [
    { value: DESC, label: LATEST_LABEL },
    { value: ASC, label: OLDEST_LABEL },
];

export const lotteryItems = [
    { imgUrl: '/icons/double-circle.png', title: 'Result', link: '/result' },
    //TODO:시현을 위해서 잠시 닫음
    // { imgUrl: '/icons/double-circle.png', title: 'Live', link: '/happy545-lottery/live' },
];

export const memberLotteryItems: HomeButtonItem[] = [
    { imgUrl: '/icons/double-circle.png', title: 'Buy', link: '/happy545-lottery/buy' },
    { imgUrl: '/icons/double-circle.png', title: 'Result', link: '/result' },
    { imgUrl: '/icons/double-circle.png', title: 'Ticket', link: '/happy545-lottery/tickets' },
    { imgUrl: '/icons/double-circle.png', title: 'Prizes', link: '/happy545-lottery/prizes' },
    {
        imgUrl: '/icons/double-circle.png',
        title: 'Orders',
        link: '/happy545-lottery/orders',
    },
];

export const partnerHappyPointItems: HomeButtonItem[] = [
    { imgUrl: '/icons/double-circle.png', title: 'QR Code', link: '/point/points', type: 'modal' },
    { imgUrl: '/icons/double-circle.png', title: 'Points', link: '/point/points', type: 'link' },
];

export const memberPointItems: HomeButtonItem[] = [
    { imgUrl: '/icons/double-circle.png', title: 'Points', link: '/point/points' },
    { imgUrl: '/icons/double-circle.png', title: 'Point Transfer', link: '/point/point-transfer' },
    { imgUrl: '/icons/double-circle.png', title: 'Point Mall', link: '/point/point-mall' },
    {
        imgUrl: '/icons/double-circle.png',
        title: 'Point Mall Orders',
        link: '/point/point-mall-orders',
    },
];

export const informationItems: HomeButtonItem[] = [
    {
        imgUrl: '/icons/double-circle.png',
        title: 'About Happy 5/45',
        link: '/information/about-happy545',
    },
    {
        imgUrl: '/icons/double-circle.png',
        title: 'How to Play',
        link: '/information/how-to-play',
    },
    {
        imgUrl: '/icons/double-circle.png',
        title: 'How to Claim',
        link: '/information/how-to-claim',
    },
    { imgUrl: '/icons/double-circle.png', title: 'Prize Rules', link: '/information/prize-rules' },
    {
        imgUrl: '/icons/double-circle.png',
        title: 'About us',
        link: '/company-information/about-us',
    },
    {
        imgUrl: '/icons/double-circle.png',
        title: 'Privacy Policy',
        link: '/company-information/privacy-policy',
    },
    {
        imgUrl: '/icons/double-circle.png',
        title: 'Terms of Service',
        link: '/company-information/terms-of-service',
    },
];
export const gameItems: HomeButtonItem[] = [
    {
        imgUrl: '/icons/double-circle.png',
        title: 'Gold Digger',
        link: '/happy-point-game/gold-digger',
    },
    {
        imgUrl: '/icons/double-circle.png',
        title: 'Happy Ball',
        link: '/happy-point-game/happy-ball',
    },
    {
        imgUrl: '/icons/double-circle.png',
        title: 'Happy Number',
        link: '/happy-point-game/happy-number',
    },
    {
        imgUrl: '/icons/double-circle.png',
        title: 'Happy Ladders',
        link: '/happy-point-game/Ladders',
    },
    // { imgUrl: '/icons/double-circle.png', title: 'Point Transfer', link: '/point/point-transfer' },
    // { imgUrl: '/icons/double-circle.png', title: 'Point Mall', link: '/point/point-mall' },
    // {
    //     imgUrl: '/icons/double-circle.png',
    //     title: 'Point Mall Orders',
    //     link: '/point/point-mall-orders',
    // },
];

// export const informationItems = [
//     {
//         imgUrl: '/icons/double-circle.png',
//         title: 'About Happy 5/45',
//         link: '/information/about-happy545',
//     },
//     {
//         imgUrl: '/icons/double-circle.png',
//         title: 'How to Play',
//         link: '/information/how-to-play',
//     },
//     {
//         imgUrl: '/icons/double-circle.png',
//         title: 'How to Claim',
//         link: '/information/how-to-claim',
//     },
//     { imgUrl: '/icons/double-circle.png', title: 'Prize Rules', link: '/information/prize-rules' },
//     {
//         imgUrl: '/icons/double-circle.png',
//         title: 'About us',
//         link: '/company-information/about-us',
//     },
//     {
//         imgUrl: '/icons/double-circle.png',
//         title: 'Privacy Policy',
//         link: '/company-information/privacy-policy',
//     },
//     {
//         imgUrl: '/icons/double-circle.png',
//         title: 'Terms of Service',
//         link: '/company-information/terms-of-service',
//     },
// ];

export const companyInformationItems = [];

export const noticeItems = [
    { imgUrl: '/icons/double-circle.png', title: 'Announmement', link: '/notice/announcements' },
    { imgUrl: '/icons/double-circle.png', title: 'Event', link: '/notice/event' },
    { imgUrl: '/icons/double-circle.png', title: 'FAQ', link: '/notice/faq' },
];

export const myAccountMenuItems: AccountMenuItem[] = [
    {
        label: 'My Profile',
        svgFileName: 'user',
        link: '/my-account/my-profile',
        type: 'normal',
    },
    {
        label: 'Referral',
        svgFileName: 'qrcode',
        link: '/my-account/referral',
        type: 'qrCode',
    },
    {
        label: 'Bank Accounts',
        svgFileName: 'credit-card',
        link: '/my-account/bank-accounts',
        type: 'badge',
    },
    {
        label: 'Tickets',
        svgFileName: 'ticket',
        link: '/happy545-lottery/tickets',
        type: 'normal',
    },
    {
        label: 'Orders',
        svgFileName: 'shopping-bag',
        link: '/happy545-lottery/orders',
        type: 'normal',
    },
    {
        label: 'Prizes',
        svgFileName: 'cash',
        link: '/happy545-lottery/prizes',
        type: 'normal',
    },
    { label: 'Points', svgFileName: 'database', link: '/point/points', type: 'normal' },
    {
        label: 'Point Shop Orders',
        svgFileName: 'shopping-cart',
        link: '/point/point-mall-orders',
        type: 'normal',
    },
    {
        label: '1:1 Inquiry',
        svgFileName: 'chat-alt',
        link: '/my-account/inquiries',
        type: 'normal',
    },
    {
        label: 'Sign Out',
        svgFileName: 'logout',
        link: '/my-account/logout',
        type: 'signOut',
    },
];

export const partnerMyAccountMenuItems: AccountMenuItem[] = [
    {
        label: 'My Profile',
        svgFileName: 'user',
        link: '/my-account/my-profile',
        type: 'normal',
    },
    {
        label: 'Bank Accounts',
        svgFileName: 'credit-card',
        link: '/my-account/bank-accounts',
        type: 'badge',
    },
    {
        label: 'Sign Out',
        svgFileName: 'logout',
        link: '/my-account/logout',
        type: 'signOut',
    },
];
