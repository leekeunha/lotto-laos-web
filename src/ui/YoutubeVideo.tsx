import { useState } from 'react';

const YouTubeVideo = ({
    thumbnailUrl,
    title,
}: {
    videoId: string;
    thumbnailUrl: string;
    title?: string;
}) => {
    const [showVideo, setShowVideo] = useState(false);

    const handleThumbnailClick = () => {
        setShowVideo(true);
    };

    if (!showVideo) {
        return (
            <div
                className="w-full aspect-video bg-cover bg-center bg-no-repeat cursor-pointer rounded-lg shadow-lg"
                style={{ backgroundImage: `url('${thumbnailUrl}')` }}
                onClick={handleThumbnailClick}
            >
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="text-white font-bold text-lg mb-5">{title}</div>
                    <img
                        src={'/icons/youtube-play-button.svg'}
                        alt="Play Button"
                        className="w-12"
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="w-full shadow-lg">
            <iframe
                className="w-full aspect-video rounded-lg"
                src={`https://www.youtube.com/embed/11cta61wi0g?autoplay=1`}
                // 뉴진스 하입보이. 시현 후 주석 해제.
                // src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default YouTubeVideo;
