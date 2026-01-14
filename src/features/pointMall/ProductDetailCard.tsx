import SvgIcon from '../../ui/SvgIcon';
import FormatCurrency from '../../ui/FormatCurrency';
import { Typography } from '@material-tailwind/react';
import Section from '../../ui/Section';
import BuyProductButtonSection from './BuyProductButtonSection';
import { GOLD } from '../../../constants/global';
import { ProductDetailCardProps } from './types';

export default function ProductDetailCard({ productDetail }: ProductDetailCardProps) {
    const { imageUrl, pointType, productDescription, productName, productPrice } = productDetail;

    return (
        <div className="p-3 flex flex-col gap-3">
            <img src={imageUrl} alt="banner1" />
            <Typography variant="h4">{productName}</Typography>
            <div className="flex gap-1">
                <SvgIcon fileName={pointType === GOLD ? 'gold-database' : 'silver-database'} />
                <FormatCurrency
                    amount={productPrice || 0}
                    fontWeight="font-extrabold"
                ></FormatCurrency>
            </div>
            <Section hasHr={true} description={productDescription}></Section>

            <BuyProductButtonSection productDetail={productDetail} />
        </div>
    );
}
