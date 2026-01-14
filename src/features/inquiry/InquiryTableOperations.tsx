import SelectFilter from '../../ui/SelectFilter';
import { ASC, DESC, LATEST_LABEL, OLDEST_LABEL } from '../../../constants/global';

export default function InquiryTableOperations() {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex justify-end mb-3">
                <SelectFilter
                    filterField="sortOrder"
                    options={[
                        { value: DESC, label: LATEST_LABEL },
                        { value: ASC, label: OLDEST_LABEL },
                    ]}
                />
            </div>
        </div>
    );
}
