import { ASC, DESC, LATEST_LABEL, OLDEST_LABEL } from '../../constants/global';
import SelectFilter from './SelectFilter';

export default function ResultTableOperations() {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex justify-end mb-3">
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
        </div>
    );
}
