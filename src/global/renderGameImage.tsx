import { useNavigate } from 'react-router-dom';
import {
    GOLD_DIGGER_GAME_CODE,
    HAPPY_BALL_GAME_CODE,
    HAPPY_LADDER_GAME_CODE,
    HAPPY_NUMBER_GAME_CODE,
} from '../../constants/global';

export const renderGameImage = (gameCode: string) => {
    const navigate = useNavigate();

    switch (gameCode) {
        case GOLD_DIGGER_GAME_CODE:
            return (
                <img
                    src={'/images/gold_digger.png'}
                    alt="gold_digger"
                    onClick={() => {
                        navigate('/happy-point-game/gold-digger');
                    }}
                />
            );

        case HAPPY_BALL_GAME_CODE:
            return (
                <img
                    src={'/images/happy_ball.png'}
                    alt="happy_ball"
                    onClick={() => {
                        navigate('/happy-point-game/happy-ball');
                    }}
                />
            );

        case HAPPY_NUMBER_GAME_CODE:
            return (
                <img
                    src={'/images/happy_number.png'}
                    alt="happy_number"
                    onClick={() => {
                        navigate('/happy-point-game/happy-number');
                    }}
                />
            );

        case HAPPY_LADDER_GAME_CODE:
            return (
                <img
                    src={'/images/happy_ladders.png'}
                    alt="happy_ladders"
                    onClick={() => {
                        navigate('/happy-point-game/happy-ladders');
                    }}
                />
            );

        default:
            return null;
    }
};
