import { HIGEPRICE_LABEL, LOWPRICE_LABEL, RECOMMENDED_LABEL } from '../../../constants/global';
import SelectFilter from '../../ui/SelectFilter';

export default function PointMallTableOperations() {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex justify-end mb-3">
                <SelectFilter
                    filterField="sortOrder"
                    options={[
                        { value: 'RECOMMENDED', label: RECOMMENDED_LABEL }, //TODO: value 빈값으로 넘겨도 작동하도록 고치기
                        { value: 'HIGHPRICE', label: HIGEPRICE_LABEL },
                        { value: 'LOWPRICE', label: LOWPRICE_LABEL },
                    ]}
                />
            </div>
        </div>
    );
}
