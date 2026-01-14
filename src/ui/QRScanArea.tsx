export default function QRScanArea() {
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 relative">
                <div className="absolute top-0 left-0 border-t-4 border-l-4 border-white rounded-tl-lg w-10 h-10"></div>
                <div className="absolute top-0 right-0 border-t-4 border-r-4 border-white rounded-tr-lg w-10 h-10"></div>
                <div className="absolute bottom-0 left-0 border-b-4 border-l-4 border-white rounded-bl-lg w-10 h-10"></div>
                <div className="absolute bottom-0 right-0 border-b-4 border-r-4 border-white rounded-br-lg w-10 h-10"></div>
            </div>
        </div>
    );
}
