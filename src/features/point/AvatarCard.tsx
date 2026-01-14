import { Card, Avatar, Typography } from '@material-tailwind/react';
import User from '../../models/User';

interface AvatarCardProps {
    userInfo: User;
}

export default function AvatarCard({ userInfo }: AvatarCardProps) {
    return (
        <Card className="p-4">
            <p>To</p>
            <div className="flex">
                <Avatar
                    src={userInfo.imageUrl || '/icons/default-avatar.svg'}
                    alt={userInfo.fullName}
                    size="lg"
                />
                <div className="flex flex-col justify-center items-center ml-5">
                    <Typography variant="h6" className="font-bold">
                        {userInfo.fullName}
                    </Typography>
                    <Typography variant="small" color="gray">
                        {userInfo.memberId}
                    </Typography>
                </div>
            </div>
        </Card>
    );
}
