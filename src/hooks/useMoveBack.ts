/**
 * 뒤로 가기 기능을 제공하는 커스텀 훅입니다.
 *
 * @returns {Function} - 뒤로 가기 함수
 */
import { useNavigate } from 'react-router-dom';

export const useMoveBack = () => {
    const navigate = useNavigate();
    return () => navigate(-1);
};
