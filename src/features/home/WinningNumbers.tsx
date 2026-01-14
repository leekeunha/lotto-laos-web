import useWinningNumbers from './useWinningNumbers';
import WinningNumberCard from './WinningNumberCard';

export default function WinningNumbers() {
    const winningNumberInfos = useWinningNumbers(1, 4);

    return (
        <>
            {winningNumberInfos &&
                winningNumberInfos.map((winningNumberInfo, index) => (
                    <WinningNumberCard
                        key={index}
                        winningNumberInfo={winningNumberInfo}
                    ></WinningNumberCard>
                ))}
        </>
    );
}
