import { HAPPY545_GAME_ID } from '../../constants/global';
import Happy545GameLogoIcon from '../icons/Happy545GameLogoIcon';

export const renderMessageIcon = (status: number) => {
    switch (status) {
        case Number(HAPPY545_GAME_ID):
            //TODO: 임시로 넣어둔 코드
            return <Happy545GameLogoIcon />;

        default:
            return null;
    }
};
