import { PageContainerProps } from './types';

export default function PageContainer({ children, className }: PageContainerProps) {
    return <section className={`p-5 ${className} bg-white min-h-screen`}>{children}</section>;
}
