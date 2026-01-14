interface PrizeClaimCardProps {
    className?: string; // className을 옵션으로 받을 수 있게 설정
}
export default function PrizeClaimCard({ className = '' }: PrizeClaimCardProps) {
    return (
        <div className={`bg-white p-6 flex flex-col gap-4 rounded-lg shadow-lg ${className}`}>
            <div className="font-bold text-xl">How to claim prize?</div>
            <div className="text-blue-gray-500">
                You can find answers more easily and quickly by using the FAQ.
            </div>
            <button className="bg-red-700 py-3 px-4 rounded-lg w-fit">
                <span className="text-white">How to get prize</span>
            </button>
        </div>
    );
}
