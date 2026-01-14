/*----------------------------------------------------------------------------------

 * 제품 정보를 표시하는 카드 UI 컴포넌트입니다.

 *---------------------------------------------------------------------------------*/
import { useNavigate } from 'react-router-dom';
import { ProductItemProps } from '../types';
import { Card, Typography } from '@material-tailwind/react';
import SvgIcon from '../../ui/SvgIcon';
import FormatCurrency from '../../ui/FormatCurrency';
import { GOLD } from '../../../constants/global';

export default function ProductItem({ product }: ProductItemProps) {
    const navigate = useNavigate();

    const { productIdx, imageUrl, productName, pointType, productPrice } = product;

    const handleCardClick = () => {
        navigate(`/point/point-mall/${productIdx}`);
    };

    return (
        <Card className="mb-2 p-3 text-sm" onClick={handleCardClick}>
            <div className="space-y-2">
                <img src={imageUrl} alt="banner1" />
                <Typography variant="h5">{productName}</Typography>
                <div className="flex gap-1">
                    <SvgIcon fileName={pointType === GOLD ? 'gold-database' : 'silver-database'} />
                    <FormatCurrency
                        amount={productPrice || 0}
                        fontWeight="font-extrabold"
                    ></FormatCurrency>
                </div>
            </div>
        </Card>
    );
}
