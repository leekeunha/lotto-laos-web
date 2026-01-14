/* ----------------------------------------------------------------------
 
 *   추천인 목록을 표시하는 테이블 상단에서 필터링 및 정렬 기능을 제공하는 컴포넌트입니다.
  
 * ---------------------------------------------------------------------- */

import SelectFilter from '../../ui/SelectFilter';
import { ASC, DESC, LATEST_LABEL, OLDEST_LABEL } from '../../../constants/global';

export default function ReferrerTableOperations() {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex justify-between">
                <p className="self-center">Referrer List</p>

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
