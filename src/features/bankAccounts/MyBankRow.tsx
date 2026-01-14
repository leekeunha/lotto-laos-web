import { MyBankCardProps as MyBankRowProps } from '../types';
import { Button, Switch } from '@material-tailwind/react';
import Hr from '../../ui/Hr';
import useActivateBank from './useActivateBank';
import { useState } from 'react';
import useRemoveBank from './useRemoveBank';
import BankRemoveModal from './BankRemoveModal';
import BankInfo from './BankInfo';
import EditBankAccountButton from './EditBankAccountButton';
import toast, { Toaster } from 'react-hot-toast';

export default function MyBankRow({ myBank }: MyBankRowProps) {
    const [openModal, setOpenModal] = useState(false);
    const { activateBank, isPending: isActivatePending } = useActivateBank();
    const { removeBank, isPending: isRemovePending } = useRemoveBank();

    const handleSwitchChange = () => {
        const newActiveStatus = !myBank.active;
        activateBank(
            {
                memberBankIdx: myBank.memberBankIdx,
                active: newActiveStatus,
            },
            {
                onError: () => {
                    toast.error('네트워크 에러가 발생했습니다.');
                },
            },
        );
    };

    const handleOpenModal = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setOpenModal(true);
    };

    const handleCancel = async () => {
        setOpenModal(false);
    };

    const handleRemove = async () => {
        removeBank({
            memberBankIdx: myBank.memberBankIdx,
        });

        setOpenModal(false);
    };

    return (
        <section className="flex flex-col">
            <Toaster />
            <div className="flex justify-between">
                <BankInfo myBank={myBank} />
                <div className="flex gap-3">
                    <span>{myBank.active ? 'Active' : 'Inactive'}</span>

                    <Switch
                        color="red"
                        checked={myBank.active}
                        onChange={handleSwitchChange}
                        disabled={isActivatePending}
                        crossOrigin={undefined}
                    />
                </div>
            </div>
            <div className="flex justify-end gap-2">
                <Button
                    variant="outlined"
                    size="sm"
                    onClick={handleOpenModal}
                    disabled={isRemovePending}
                >
                    Remove
                </Button>
                <EditBankAccountButton myBank={myBank} />
            </div>
            <Hr className="my-4"></Hr>
            <BankRemoveModal open={openModal} onCancel={handleCancel} onConfirm={handleRemove} />
        </section>
    );
}
