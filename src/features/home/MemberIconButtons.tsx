import { HOME_COLUMN_LENGTH } from '../../../constants/global';
import { gameItems, memberPointItems, memberLotteryItems } from '../../global/listItems';

import ColumnGrid from '../../ui/ColumnGrid';
import HomeButtons from './HomeButtons';
import HomeTitleRow from './HomeTitleRow';

export function MemberIconButtons() {
    return (
        <>
            <HomeTitleRow title={'Happy 5/45 Lottery'}>
                <ColumnGrid cols={HOME_COLUMN_LENGTH}>
                    <HomeButtons items={memberLotteryItems} />
                </ColumnGrid>
            </HomeTitleRow>
            <HomeTitleRow title={'Point'}>
                <ColumnGrid cols={HOME_COLUMN_LENGTH}>
                    <HomeButtons items={memberPointItems} />
                </ColumnGrid>
            </HomeTitleRow>
            <HomeTitleRow title={'Happy Point Game'}>
                <ColumnGrid cols={HOME_COLUMN_LENGTH}>
                    <HomeButtons items={gameItems} />
                </ColumnGrid>
            </HomeTitleRow>
        </>
    );
}
