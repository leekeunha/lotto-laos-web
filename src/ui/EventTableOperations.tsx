import ChipFilter from './ChipFilter';
import Search from './Search';

export default function EventTableOperations() {
    return (
        <>
            <div className="flex gap-2">
                <Search searchPath="/notice/event" />
            </div>
            <div className="mb-3">
                <ChipFilter
                    filterField="category"
                    options={[
                        { value: 'all', label: 'All' },
                        { value: 'during', label: 'During' },
                        { value: 'over', label: 'Over' },
                    ]}
                />
            </div>
        </>
    );
}
