import { HAPPY1K_GAME_ID, HAPPY545_GAME_ID } from '../../constants/global';
import Happy545GameLogoIcon from '../icons/Happy545GameLogoIcon';

export const renderGameIcon = (status: number) => {
    switch (status) {
        case Number(HAPPY545_GAME_ID):
            return <Happy545GameLogoIcon />;

        case Number(HAPPY1K_GAME_ID):
            //TODO: 임시로 넣어둔 코드
            return <Happy545GameLogoIcon />;

        default:
            return null;
    }
};
