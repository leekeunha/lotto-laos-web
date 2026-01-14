import { HrProps } from './types';

export default function Hr({ className, thickness = 1.5 }: HrProps) {
    return <hr className={`border-gray-200 ${className}`} style={{ borderTopWidth: thickness }} />;
}
