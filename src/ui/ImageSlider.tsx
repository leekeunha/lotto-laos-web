import { Carousel } from '@material-tailwind/react';

export default function ImageSlider({ images }: { images: string[] }) {
    return (
        <div className="w-full h-70">
            <Carousel className="rounded-xl">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index}`}
                        className="w-full h-full object-cover"
                    />
                ))}
            </Carousel>
        </div>
    );
}
