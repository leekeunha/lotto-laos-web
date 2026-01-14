import { Button, Card } from '@material-tailwind/react';

import Section from '../../ui/Section';
import { NavLink } from 'react-router-dom';

export interface QuickTipsProps {
    className?: string;
}

export default function QuickTips({ className }: QuickTipsProps) {
    return (
        <Card className={`p-4 ${className}`}>
            <Section
                title="Quick Tips"
                description="You can get the tips you want more easily and quickly by using the FAQ."
            ></Section>

            <div className="mt-4">
                <NavLink to="/notice/faq">
                    <Button color="red">View Faq</Button>
                </NavLink>
            </div>
        </Card>
    );
}
