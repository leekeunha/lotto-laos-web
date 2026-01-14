import { Card, Typography } from '@material-tailwind/react';
import { useState } from 'react';
import CustomModal from '../../ui/CustomModal';
import { useNavigate } from 'react-router-dom';
import { PaymentMethodProps } from './types';
import { HAPPY545_GAME_ID } from '../../../constants/global';
import useCurrentDrawInfo from '../home/useCurrentDrawInfo';
import TicketClient from '../../httpClient/TicketClient';
import { TicketService } from '../../services/TicketService';
import IconWithTitle from '../../ui/IconWithTitle';
import { CustomSpinner } from '../../ui/CustomSpinner';

export default function PaymentMethod({ lines }: PaymentMethodProps) {
    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate();

    const {
        currentDrawInfoQuery: { isLoading, error, data: currentDrawInfo },
    } = useCurrentDrawInfo(Number(HAPPY545_GAME_ID));

    const handleOpenModal = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        setOpenModal(true);
    };

    const handleConfirm = async () => {
        setOpenModal(false);

        // 아래 커스텀훅(리액트쿼리 사용하는 것)으로 바꾸기
        const ticketClient = new TicketClient();
        const ticketService = new TicketService(ticketClient);

        const ticketIdx: number = await ticketService.buyLines(
            Number(HAPPY545_GAME_ID),
            currentDrawInfo?.currentDrawIdx || 0,
            lines,
        );

        navigate('success', { state: { lines, ticketIdx } });
    };

    const handleCancel = async () => {
        setOpenModal(false);
        navigate('failure', { state: lines });
    };

    return (
        <>
            {isLoading && <CustomSpinner />}
            {error && <p>{error.message}</p>}
            <section className="flex flex-col gap-2">
                <IconWithTitle svgFileName={'clipboard-check'} title="PAYMENT METHOD" />
                <div className="flex flex-col gap-2">
                    <Card className="p-2" onClick={handleOpenModal}>
                        <div className="flex gap-3">
                            <img
                                src={'/icons/bcel-bank.png'}
                                className="h-5 w-5 text-3xl"
                                alt="clipboard-check"
                            />
                            BCEL BANK
                        </div>
                    </Card>
                </div>
                <CustomModal
                    open={openModal}
                    title="Confirming Payment"
                    onCancel={handleCancel}
                    onConfirm={handleConfirm}
                    confirmText="Success"
                    cancelText="Failure"
                >
                    <Typography className="font-normal">
                        Please complete the payment and then click the button below.
                    </Typography>
                </CustomModal>
            </section>
        </>
    );
}
