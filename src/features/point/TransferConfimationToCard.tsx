import { Avatar, Card, Typography } from '@material-tailwind/react';
import { TransferConfimationToCardProps } from './types';

export default function TransferConfimationToCard({
    userName,
    toMemberId,
}: TransferConfimationToCardProps) {
    return (
        <Card className="p-4">
            <p className="mb-2">To</p>
            <div className="flex items-center gap-4">
                <Avatar src="/icons/default-avatar.svg" alt="avatar" />
                <div>
                    {/* 아래 한 줄은 이름으로 변경하기 */}
                    <Typography variant="h6">{userName}</Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                        {toMemberId}
                    </Typography>
                </div>
            </div>
        </Card>
    );
}
