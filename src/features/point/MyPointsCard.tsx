import { Card } from '@material-tailwind/react';
import usePoint from './usePoint';
import { CustomSpinner } from '../../ui/CustomSpinner';
import { useUser } from '../authentication/useUser';
import { PARTNER } from '../../../constants/global';
import GoldPoints from './GoldPoints';
import SilverPoints from './SilverPoints';
import TransferButton from './TransferButton';

export default function MyPointsCard() {
    const {
        myPointsQuery: { isLoading, data: myPoints },
    } = usePoint();

    const { user } = useUser();

    return (
        <>
            {isLoading && <CustomSpinner />}

            <Card className="p-4">
                <div className="flex flex-col gap-3">
                    <GoldPoints amount={myPoints?.goldPoints || 0} />

                    {user?.memberType !== PARTNER && (
                        <>
                            <SilverPoints amount={myPoints?.silverPoints || 0} />
                            <TransferButton />
                        </>
                    )}
                </div>
            </Card>
        </>
    );
}
