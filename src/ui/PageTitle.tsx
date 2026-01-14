import { Typography } from '@material-tailwind/react';
import { PageTitleProps } from './types';
import BackButton from './BackButton';
import MoveHomeButton from './MoveHomeButton';

export default function PageTitle({
    title,
    showBackButton = true,
    showMoveHomeButton = false,
    svgFileName,
    backTo,
}: PageTitleProps): JSX.Element {
    return (
        <div className="mb-12">
            <div className="flex flex-col gap-3 fixed top-0 left-0 w-full z-50 bg-white p-3 bg-gray100 shadow-sm">
                <div className="flex justify-between items-center">
                    {showBackButton && <BackButton backTo={backTo} />}
                    {showMoveHomeButton && <MoveHomeButton />}
                    <div className="flex items-center">
                        {svgFileName && (
                            <img src={`/icons/${svgFileName}`} className="h-8" alt={svgFileName} />
                        )}
                        <Typography className="ml-1 uppercase" color="black" variant="h6">
                            {title}
                        </Typography>
                    </div>
                    <div className="w-6 mr-3"></div>
                </div>
            </div>
        </div>
    );
}
