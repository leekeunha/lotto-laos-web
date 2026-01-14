import { ColumnGridProps } from './types';

export default function ColumnGrid({ cols, children }: ColumnGridProps) {
    const gridClass = `grid grid-cols-${cols} gap-2`;

    return <div className={gridClass}>{children}</div>;
}
