import { EventOverProps } from './types';

export default function EventOver({ imageUrl }: EventOverProps) {
    return (
        <div className="relative cursor-pointer">
            <img src={imageUrl} alt="event" className="w-full h-[100px] object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center rounded-lg">
                <span className="text-white font-bold text-xl">EVENT OVER</span>
            </div>
        </div>
    );
}
