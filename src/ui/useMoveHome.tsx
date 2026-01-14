/**
 * 홈으로 이동하는 커스텀 훅입니다.
 *
 */
import { useNavigate } from 'react-router-dom';

export const useMoveHome = () => {
    const navigate = useNavigate();
    return () => navigate('/home');
};
