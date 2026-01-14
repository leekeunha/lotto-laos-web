import { useEffect, useRef } from 'react';
import { getAuthTokensFromLocalStorage } from '../features/authentication/userLocalStorageStore';

export default function GoldDiggerPage() {
    const authTokens = getAuthTokensFromLocalStorage();
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const postAccessTokenToIframe = (iframe: HTMLIFrameElement) => {
        if (iframe?.contentWindow) {
            const currentOrigin = window.location.origin;

            iframe.contentWindow.postMessage(
                { accessToken: authTokens?.accessToken },
                currentOrigin,
            );
        }
    };

    useEffect(() => {
        const iframe = iframeRef.current;

        if (iframe) {
            const handleIframeLoad = () => postAccessTokenToIframe(iframe as HTMLIFrameElement);

            iframe.addEventListener('load', handleIframeLoad);

            return () => {
                iframe.removeEventListener('load', handleIframeLoad);
            };
        }
    }, [authTokens]);

    const gameUrl = `/game/index.html`;

    return (
        <div>
            <iframe
                ref={iframeRef}
                src={gameUrl}
                className="w-screen h-screen border-none fixed z-[100]"
                title="Gold Digger Game"
            />
        </div>
    );
}
