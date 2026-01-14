import { Card } from '@material-tailwind/react';
import FormatCurrency from '../../ui/FormatCurrency';
import SectionTitle from '../../ui/SectionTitle';
import { POINT_SELECT_ITEMS, ValidationMessages } from '../../../constants/global';
import RHFSelectWithIcons from '../../ui/RHFSelectWithIcons';
import RHFInput from '../../ui/RHFInput';

export default function TransferFromCard() {
    return (
        <>
            <Card className="p-4 flex flex-col gap-4">
                <SectionTitle title="Point" />
                <div className="flex gap-2">
                    {/* TODO: 아래 한줄 이름 바꾸기. */}
                    <RHFSelectWithIcons
                        label="Point Type"
                        name="pointType"
                        items={POINT_SELECT_ITEMS}
                        rules={{ required: ValidationMessages.REQUIRED }}
                    />
                    <RHFInput
                        type="number"
                        name="points"
                        label="Amount"
                        rules={{ required: ValidationMessages.REQUIRED }}
                    />
                </div>

                <div className="flex gap-2 justify-end">
                    <p>Max</p>
                    <p>
                        <FormatCurrency amount={150000}></FormatCurrency>
                    </p>
                </div>
            </Card>
        </>
    );
}
