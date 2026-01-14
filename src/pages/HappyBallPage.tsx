import { useEffect, useRef, useState } from 'react';
import { getAuthTokensFromLocalStorage } from '../features/authentication/userLocalStorageStore';
import { useUser } from '../features/authentication/useUser';
import i18n from '../../translation/i18n';
import { HAPPY_BALL_GAME_URL } from '../../constants/global';
import { ENCRYPTION_KEY, IV_LENGTH } from '../../constants/global';
import { encrypt } from '../utils/util';
import { useMoveBack } from '../hooks/useMoveBack';

export default function HappyBallPage() {
    const moveBack = useMoveBack();
    const authTokens = getAuthTokensFromLocalStorage();
    const { user } = useUser();
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [gameUrl, setGameUrl] = useState<string>('');

    const generateGameUrl = async () => {
        if (!user || !authTokens) return;

        const memberTokenData = {
            member_idx: user.memberIdx,
            access_token: authTokens.accessToken,
        };
        const encryptedMemberTokenData = await encrypt(
            JSON.stringify(memberTokenData),
            IV_LENGTH,
            ENCRYPTION_KEY,
        );
        const currentTimestamp = Math.floor(Date.now() / 1000);

        const requestParams = {
            q: encryptedMemberTokenData,
            lang: i18n.language,
            now: currentTimestamp.toString(),
        };
        const requestParamsString = new URLSearchParams(requestParams).toString();
        const url = `${HAPPY_BALL_GAME_URL}?${requestParamsString}`;

        if (!gameUrl) {
            setGameUrl(url);
        }
    };

    useEffect(() => {
        generateGameUrl();
    }, [user, authTokens]);

    return (
        <div>
            <button
                className="absolute top-4 right-4 text-white bg-transparent shadow-lg w-10 h-10 rounded-full flex items-center justify-center text-2xl cursor-pointer z-[110]"
                onClick={moveBack}
            >
                X
            </button>
            <iframe
                ref={iframeRef}
                src={gameUrl}
                className="w-screen h-screen border-none fixed z-[100]"
                title="Happy Ball Game"
            />
        </div>
    );
}
