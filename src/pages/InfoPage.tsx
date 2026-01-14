import { informationAccordionItems } from '../global/listItems';
import { AccordionWithItems } from '../ui/AccordionWithItems';
import PageTitle from '../ui/PageTitle';

export default function InfoPage() {
    return (
        <>
            <PageTitle title="Information" subtitle="해피 545란 무엇인가"></PageTitle>
            <section className="p-4">
                <AccordionWithItems items={informationAccordionItems} defaultOpenIndex={1} />
            </section>
        </>
    );
}
