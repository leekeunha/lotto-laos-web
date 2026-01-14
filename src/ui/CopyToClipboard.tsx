/* ----------------------------------------------------------------------
 
 *   주어진 값을 클립보드에 복사하고 성공/실패 메시지를 표시하는 컴포넌트
 
 * ---------------------------------------------------------------------- */

import SvgIcon from './SvgIcon';
import toast, { Toaster } from 'react-hot-toast';
import { CopyToClipboardProps } from './types';

export default function CopyToClipboard({ value, className }: CopyToClipboardProps) {
    const copyToClipboard = () => {
        navigator.clipboard
            .writeText(value)
            .then(() => {
                toast.success(`${value} Copied!`);
            })
            .catch(() => {
                toast.error('복사 실패!');
            });
    };

    return (
        <div className={`${className}`}>
            <Toaster />
            <div className="flex items-center">
                <span className="text-sm text-gray-600">{value}</span>
                <button onClick={copyToClipboard} className="ml-1 text-gray-500">
                    <SvgIcon fileName="duplicate"></SvgIcon>
                </button>
            </div>
        </div>
    );
}
