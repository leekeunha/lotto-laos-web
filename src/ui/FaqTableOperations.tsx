import ChipFilter from './ChipFilter';
import Search from './Search';

export default function FaqTableOperations() {
    return (
        <>
            <Search searchPath="/notice/faq" />
            <ChipFilter
                filterField="category"
                options={[
                    { value: '', label: 'All' },
                    { value: 'F01', label: 'Account' },
                    { value: 'F02', label: 'Ticket' },
                    { value: 'F03', label: 'Point' },
                    { value: 'F04', label: 'Other' },
                    { value: 'F05', label: 'Crypto Currency' },
                    { value: 'F06', label: 'Draw' },
                    { value: 'F07', label: 'Prize' },
                    { value: 'F08', label: 'Refund' },
                ]}
            />
        </>
    );
}
