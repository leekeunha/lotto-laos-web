import { useRef, useEffect } from 'react';
import { BrowserMultiFormatReader } from '@zxing/browser';
import { UseQRScannerProps } from './types';

export const useQRScanner = ({ isOpen, onScanSuccess, onClose }: UseQRScannerProps) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const startQRScanner = () => {
        if (isOpen && videoRef.current) {
            const codeReader = new BrowserMultiFormatReader();
            codeReader
                .decodeOnceFromVideoDevice(undefined, videoRef.current)
                .then((result) => {
                    const scannedText = result.getText();
                    onScanSuccess(scannedText);
                    onClose();
                })
                .catch((err) => {
                    console.error('QR 코드 스캔 실패:', err);
                    onClose();
                });
        }
    };

    const stopCamera = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            const stream = videoRef.current.srcObject as MediaStream;
            stream.getTracks().forEach((track) => track.stop());
            videoRef.current.srcObject = null;
        }
    };

    useEffect(() => {
        if (isOpen) {
            startQRScanner();
        }

        return () => {
            stopCamera();
        };
    }, [isOpen]);

    return { videoRef };
};
