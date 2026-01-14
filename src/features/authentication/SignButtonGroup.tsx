import { SignButtonGroupProps } from '../types';
import NoAccountLink from './SignMessageLink';

export default function SignButtonGroup({ children }: SignButtonGroupProps) {
    return (
        <>
            <section className="w-full">
                <div className="flex flex-col gap-4">
                    {children}
                    <NoAccountLink />
                </div>
            </section>
        </>
    );
}
