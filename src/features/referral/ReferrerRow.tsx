/* ----------------------------------------------------------------------

 *   추천인 정보(이름, ID, 생성일)를 한 줄로 표시하는 컴포넌트입니다.
 
 * ---------------------------------------------------------------------- */

import { Avatar } from '@material-tailwind/react';
import CopyToClipboard from '../../ui/CopyToClipboard';
import DateFormatter from '../../ui/DateFormatter';
import { ReferrerRowProps } from './types';

export default function ReferrerRow({ referrer }: ReferrerRowProps) {
    const { createdAt, referralMemberId, referralMemberName } = referrer;
    return (
        <div className="mb-6 text-sm flex justify-between">
            <div className="flex-shrink-0 self-center">
                <Avatar src="/icons/default-avatar.svg" className="h-10 w-10" alt="avatar" />
            </div>

            <div className="flex flex-1 flex-col ml-4">
                <p>{referralMemberName}</p>
                <DateFormatter className="text-gray-500" date={createdAt} showTime></DateFormatter>
            </div>

            <CopyToClipboard value={referralMemberId} />
        </div>
    );
}
