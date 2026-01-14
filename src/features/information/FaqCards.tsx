import { Faq } from '../../models/Faq';
import AccordionItem from '../../ui/AccordionItem';
import useInfiniteFaqs from '../home/useInfiniteFaqs';
import InfiniteDataHandler from '../../ui/InfiniteDataHandler';

export default function FaqCards() {
    const { data, fetchNextPage, isFetchingNextPage, hasNextPage, error } = useInfiniteFaqs();

    return (
        <InfiniteDataHandler
            data={data}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
            error={error}
        >
            <div className="mt-4">
                {data?.pages.map((faqs: Faq[]) =>
                    faqs.map((faq) => {
                        return (
                            <AccordionItem
                                key={faq.faqIdx}
                                header={faq.question}
                                body={faq.answer}
                            />
                        );
                    }),
                )}
            </div>
        </InfiniteDataHandler>
    );
}
