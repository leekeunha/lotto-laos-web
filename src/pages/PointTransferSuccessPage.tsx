import PageTitle from '../ui/PageTitle';
import SectionTitle from '../ui/SectionTitle';
import PageContainer from '../ui/PageContainer';
import { Button } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';
import { usePointDetail } from '../features/point/usePointDetail';
import PointDetailCard from '../features/point/PointDetailCard';

export default function PointTransferSuccessPage() {       
    const { pointDetail } = usePointDetail();
    return (
        <section>
            <PageTitle title="POINT TRANSFER CONFIRMATION"></PageTitle>
            <PageContainer className="flex flex-col gap-3">
                <SectionTitle title="Point Transfer Successful"></SectionTitle>
                <div className="flex flex-col gap-3">
                {pointDetail && <PointDetailCard pointDetail={pointDetail}></PointDetailCard>}                
            </div>
            </PageContainer>
            <section className="p-5 fixed bottom-0 left-0 right-0 bg-white z-50  max-w-[512px] mx-auto">
                <NavLink to={'/point/point-transfer'}>
                    <Button fullWidth color="red">
                        Transfer more
                    </Button>
                </NavLink>
            </section>
        </section>
    );
}
