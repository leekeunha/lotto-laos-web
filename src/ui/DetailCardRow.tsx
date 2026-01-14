import { DetailCardRowProps } from './types';

export const DetailCardRow = ({ label, value, labelClassName = '' }: DetailCardRowProps) => (
    <>
        <p className={labelClassName}>{label}</p>
        <p className="text-right">{value}</p>
    </>
);
