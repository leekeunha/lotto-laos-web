/*----------------------------------------------------------------------------------

 * 게임 항목 컴포넌트입니다

 *---------------------------------------------------------------------------------*/
import { GameItemProps } from '../types';
import { renderGameImage } from '../../global/renderGameImage';

export default function GameItem({ game }: GameItemProps) {
    const { gameCode } = game;

    return <div className="mb-2">{renderGameImage(gameCode)}</div>;
}
