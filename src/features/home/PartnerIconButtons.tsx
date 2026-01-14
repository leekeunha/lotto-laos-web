import HomeTitleRow from './HomeTitleRow';
import ColumnGrid from '../../ui/ColumnGrid';
import { HOME_COLUMN_LENGTH } from '../../../constants/global';
import HomeButtons from './HomeButtons';
import { partnerHappyPointItems } from '../../global/listItems';

export default function PartnerIconButtons() {
    return (
        <>
            <HomeTitleRow title={'HAPPY POINT'}>
                <ColumnGrid cols={HOME_COLUMN_LENGTH}>
                    <HomeButtons items={partnerHappyPointItems} />
                </ColumnGrid>
            </HomeTitleRow>
        </>
    );
}
