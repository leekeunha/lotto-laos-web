import { Button, Card, CardBody } from '@material-tailwind/react';
import PageContainer from '../../ui/PageContainer';

export default function CongratulationsCard() {
    return (
        <Card>
            <CardBody>
                <PageContainer className="flex flex-col gap-3">
                    <p className="text-2xl">Congratulations!</p>
                    <p>You can find out how to claim your prize here.</p>
                    <Button color="red" className="w-2/3" size="sm">
                        How to claim prize
                    </Button>
                </PageContainer>
            </CardBody>
        </Card>
    );
}
