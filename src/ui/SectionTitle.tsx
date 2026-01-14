import { SectionTitleProps } from './types';

export default function SectionTitle({ title }: SectionTitleProps) {
    return <div className="text-lg font-semibold">{title}</div>;
}
