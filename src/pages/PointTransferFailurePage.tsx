import PageTitle from '../ui/PageTitle';
import PageContainer from '../ui/PageContainer';
import IconWithTitle from '../ui/IconWithTitle';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import PointTransferFailureCard from '../features/point/PointTransferFailureCard';

export default function PointTransferFailurePage() {
    return (
        <section>
            <PageTitle title="POINT TRANSFER CONFIRMATION"></PageTitle>

            <PageContainer>
                <IconWithTitle svgFileName={'show.svg'} title="Point Transfer Failed" />
                <p>
                    Unfortunately, your points transfer failed for an unexpected reason. Please try
                    again later.
                </p>
                <PointTransferFailureCard />
            </PageContainer>
            <section className="p-5 fixed bottom-0 left-0 right-0 bg-white z-50  max-w-[512px] mx-auto">
                <NavLink to={'/point/point-transfer'}>
                    <Button fullWidth color="red">
                        Transfer Retry
                    </Button>
                </NavLink>
            </section>
        </section>
    );
}
