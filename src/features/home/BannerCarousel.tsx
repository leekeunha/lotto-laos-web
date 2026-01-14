import { Carousel } from '@material-tailwind/react';

export default function BannerCarousel() {
    return (
        <Carousel className="rounded-xl mt-4">
            <img src={'images/home/banner1_m.png'} alt="banner1" className="w-full object-cover" />
            <img src={'images/home/banner2_m.png'} alt="banner2" className="w-full object-cover" />
            <img src={'images/home/banner3_m.png'} alt="banner3" className="w-full object-cover" />
        </Carousel>
    );
}

//TODO: 아래 주석 풀고 테스트 후, 위 코드는 삭제 필요
// import { useNavigate } from 'react-router-dom';
// import { Carousel } from '@material-tailwind/react';
// import useBanners from './useBanner';
// import { Banner } from '../../models/Banner';

// export default function BannerCarousel() {
//     const navigate = useNavigate();
//     const banners = useBanners();

//     const handleBannerClick = (url: string | undefined, isExternal: boolean | undefined) => {
//         if (!url) return;

//         if (isExternal) {
//             window.open(url, '_blank', 'noopener,noreferrer');
//         } else {
//             navigate(url);
//         }
//     };

//     return (
//         <Carousel className="rounded-xl mt-4">
//             {banners &&
//                 banners.map((banner: Banner) => (
//                     <div
//                         key={banner.bannerIdx}
//                         onClick={() => handleBannerClick(banner.pageUrl, true)}
//                     >
//                         <img
//                             className="w-full"
//                             src={banner.mobileImageUrl}
//                             alt={`banner-${banner.bannerName}`}
//                         />
//                     </div>
//                 ))}
//         </Carousel>
//     );
// }
