import { PaymentReceipt } from '../../models/PaymentReceipt';
import { LineInPayment } from '../../pages/types';

export type PriceProps = {
    lines: LineInPayment[];
};

export type PaymentMethodProps = {
    lines: LineInPayment[];
};

export type PurchaseReceiptCardProps = {
    paymentReceipt: PaymentReceipt;
};

export type PaymentInfo = {
    productName: string;
    productPrice: number;
    quantity: number;
    totalPrice: number;
};

export type PaymentInfoProps = {
    paymentInfo?: PaymentInfo;
};

export type PaymentCompleteInfoCardProps = {
    paymentInfo: PaymentInfo & {
        orderNumber?: string;
        purchaseDate: Date;
    };
    success?: boolean;
};

export type ProductReceiptGuideCardProps = {
    className?: string;
};
