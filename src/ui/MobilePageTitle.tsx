import { Typography } from '@material-tailwind/react';
import { PageTitleProps } from './types';

export default function MobilePageTitle({ title, subtitle }: PageTitleProps): JSX.Element {
    return (
        <div className="flex flex-col gap-3">
            <Typography color="black" variant="h3" className="font-bold mb-2">
                {title}
            </Typography>
            <Typography variant="h5">{subtitle}</Typography>
        </div>
    );
}
