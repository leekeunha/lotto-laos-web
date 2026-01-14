import { ASC, DESC, GOLD, LATEST_LABEL, OLDEST_LABEL, PARTNER } from '../../constants/global';
import { useUser } from '../features/authentication/useUser';
import CheckFilter from './CheckFilter';
import ChipFilter from './ChipFilter';
import Hr from './Hr';
import SelectFilter from './SelectFilter';

export default function TicketTableOperations() {
    const { user } = useUser();

    return (
        <div className="flex flex-col gap-5">
            <div
                className={`flex ${user?.memberType !== PARTNER ? 'justify-between' : 'justify-end'} items-center gap-3`}
            >
                {user?.memberType !== PARTNER && (
                    <ChipFilter
                        filterField="pointType"
                        options={[{ value: GOLD, label: 'Gold' }]}
                    />
                )}
                <SelectFilter
                    filterField="sortOrder"
                    options={[
                        { value: DESC, label: LATEST_LABEL },
                        { value: ASC, label: OLDEST_LABEL },
                    ]}
                />
            </div>

            {user?.memberType !== PARTNER && (
                <>
                    <Hr thickness={4}></Hr>
                    <div className="flex flex-col gap-2">
                        <CheckFilter
                            filterField="useType"
                            options={[
                                { value: 'All', label: 'All' },
                                { value: 'Get', label: 'Get' },
                                { value: 'Use', label: 'Use' },
                            ]}
                        />
                    </div>
                </>
            )}
        </div>
    );
}
