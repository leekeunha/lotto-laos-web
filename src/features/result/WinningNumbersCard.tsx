
export default function WinningNumbersCard({ winningNumber }: { winningNumber: number[] }) {
    return (
        <div className="bg-white py-3 rounded-lg shadow-lg">
            <div className="flex gap-2 items-center justify-center text-white">
                {winningNumber.map((number, index) => (
                    <div 
                        key={index} 
                        className="flex w-10 h-10 rounded-full items-center justify-center bg-red-700"
                    >
                        <span className="font-bold">{number}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}