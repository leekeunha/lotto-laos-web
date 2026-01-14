import PageTitle from '../ui/PageTitle';
import { useResultDetail } from '../features/result/useResultDetail';
import WinningNumbersCard from '../features/result/WinningNumbersCard';
import PrizeBreakDownTable from '../features/result/PrizeBreakDownTable';
import PrizeClaimCard from '../features/result/PrizeClaimCard';
import ResultDetailsCard from '../features/result/ResultDetailsCard';
import useDateString from '../hooks/useDateString';
import SvgIcon from '../ui/SvgIcon';
import { CustomSpinner } from '../ui/CustomSpinner';
import YouTubeVideo from '../ui/YoutubeVideo';

export default function ResultDetailPage() {
    const { resultDetail, isLoading } = useResultDetail();
    const formattedDate = useDateString(resultDetail?.drawEndDate);

    if (isLoading) {
        return <CustomSpinner />;
    }

    if (!resultDetail) {
        return (
            <>
                <PageTitle title="RESULT DETAILS" />
                <div>No Data</div>
            </>
        );
    }

    function extractYouTubeId(url: string): string {
        if (!url) return '';

        try {
            return new URL(url).pathname.slice(1);
        } catch (error) {
            console.error('Invalid URL:', url);
            return '';
        }
    }

    return (
        <>
            <PageTitle title="Result Details" />
            <div className="p-4 flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2 items-center">
                        <SvgIcon className="h-5" fileName="clipboard-check" />
                        <div className=" text-lg">Winning Numbers</div>
                    </div>
                    <WinningNumbersCard winningNumber={resultDetail.winningNumber} />
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex gap-2 items-center">
                        <SvgIcon className="h-5" fileName="clipboard-check" />
                        <div className=" text-lg">Result Details</div>
                    </div>
                    <ResultDetailsCard resultDetail={resultDetail} />
                </div>

                <YouTubeVideo
                    title={`Draw ${resultDetail.drawIdx} ${formattedDate}`}
                    videoId={extractYouTubeId('resultDetail.drawVideoUrl')}
                    thumbnailUrl="/images/home/youtube_thumnail.png"
                />
                <div className="flex flex-col gap-4 ">
                    <div className="flex gap-2 items-center">
                        <SvgIcon className="h-5" fileName="clipboard-check" />
                        <div className=" text-lg">Prize Breakdown</div>
                    </div>
                    <PrizeBreakDownTable resultDetail={resultDetail} />
                </div>
                <PrizeClaimCard />
            </div>
        </>
    );
}
