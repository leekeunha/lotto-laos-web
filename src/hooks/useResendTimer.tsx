import { useState, useEffect } from 'react';
import { RESET_INTERVAL_SECONDS } from '../../constants/global';

export default function useResendTimer(isResendTimerStarted: boolean) {
    const [resendTimer, setResendTimer] = useState(RESET_INTERVAL_SECONDS);
    const [isResendDisabled, setIsResendDisabled] = useState(false);

    useEffect(() => {
        let timer: ReturnType<typeof setInterval> | undefined;

        if (isResendDisabled && resendTimer > 0) {
            timer = setInterval(() => {
                setResendTimer((prev) => prev - 1);
            }, 1000);
        }

        if (resendTimer === 0) {
            resetResendTimer(timer);
        }

        return () => clearInterval(timer);
    }, [isResendDisabled, resendTimer]);

    const resetResendTimer = (timer: ReturnType<typeof setInterval> | undefined) => {
        setIsResendDisabled(false);
        clearInterval(timer);
    };

    const initializeResendTimer = () => {
        if (!isResendTimerStarted) {
            setIsResendDisabled(true);
            setResendTimer(RESET_INTERVAL_SECONDS);
        }
    };

    return { resendTimer, isResendDisabled, initializeResendTimer };
}
