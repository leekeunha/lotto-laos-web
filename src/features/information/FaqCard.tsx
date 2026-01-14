import { Card, CardBody, Typography } from '@material-tailwind/react';
import SanitizedHTML from '../../ui/SanitizedHtml';
import { FaqCardProps } from '../types';

export default function FaqCard({ faq }: FaqCardProps) {
    return (
        <Card>
            <CardBody>
                <div className="flex flex-col gap-1">
                    <Typography className="text-start">{faq.question}</Typography>
                    <div className="text-start">
                        <SanitizedHTML html={faq.answer || ''} />
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}
