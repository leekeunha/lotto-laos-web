import { ASC, DESC, LATEST_LABEL, OLDEST_LABEL } from '../../constants/global';
import CheckFilter from './CheckFilter';
import Hr from './Hr';
import SelectFilter from './SelectFilter';

export default function PrizesTableOperations() {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex justify-end">
                {/* 시현을 위해 잠시 삭제 */}
                {/* <ChipFilter
                    filterField="gameSelectFilter"
                    options={[
                        { value: '', label: 'All' },
                        { value: HAPPY545_GAME_ID, label: HAPPY545_GAME_LABEL },
                        { value: HAPPY1K_GAME_ID, label: HAPPY1K_GAME_LABEL },
                    ]}
                /> */}
                <SelectFilter
                    filterField="sortOrder"
                    options={[
                        { value: DESC, label: LATEST_LABEL },
                        { value: ASC, label: OLDEST_LABEL },
                    ]}
                />
            </div>
            <Hr thickness={2}></Hr>
            <div>
                <div className="flex flex-col gap-2">
                    <CheckFilter
                        filterField="paymentSelectFilter"
                        options={[
                            { value: '', label: 'All' },
                            { value: 'Kip', label: 'Cash' },
                            { value: 'Points', label: 'Point' },
                        ]}
                    />
                    <CheckFilter
                        filterField="claimedSelectFilter"
                        options={[
                            { value: 'All', label: 'All' },
                            { value: 'Unclaimed', label: 'Unclaimed' },
                            { value: 'Claimed', label: 'Claimed' },
                            { value: 'Expired', label: 'Expired' },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}
