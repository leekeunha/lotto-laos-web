export const CountDownTimeDisplay = ({ label, value }: { label: string; value: number }) => (
    <div className="flex flex-col items-center">
        <span className="text-[#d51317] font-bold text-xs">{label}</span>
        <span className="text-white font-bold text-2xl">{value}</span>
    </div>
);
