import { Card, Chip } from '@material-tailwind/react';
import { InquiryDetail } from '../../models/InquiryDetail';
import DateFormatter from '../../ui/DateFormatter';
import SanitizedHTML from '../../ui/SanitizedHtml';

export default function InquiryDetailCard({ inquiryDetail }: { inquiryDetail: InquiryDetail }) {
    const { title, category, createdAt, content, status } = inquiryDetail;
    return (
        inquiryDetail && (
            <Card className="p-4">
                <section className="flex flex-col gap-2">
                    <span className="inline-flex">
                        <Chip color="red" value={status}></Chip>
                    </span>
                    <p className="text-xl">{title}</p>
                    <p>{category}</p>
                    <DateFormatter date={createdAt}></DateFormatter>
                    <SanitizedHTML html={content || ''} />
                </section>
            </Card>
        )
    );
}
