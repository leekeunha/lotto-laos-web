import {
    ACCEPT,
    ALL,
    ASC,
    CANCEL,
    COMPLETE,
    DESC,
    LATEST_LABEL,
    OLDEST_LABEL,
    REQUEST,
} from '../../../constants/global';
import SelectFilter from '../../ui/SelectFilter';

export default function PointMallOrdersTableOperations() {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex justify-between mb-3">
                <SelectFilter
                    filterField="sortStatus"
                    options={[
                        { value: ALL, label: ALL },
                        { value: REQUEST, label: REQUEST },
                        { value: ACCEPT, label: ACCEPT },
                        { value: COMPLETE, label: COMPLETE },
                        { value: CANCEL, label: CANCEL },
                    ]}
                />
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
