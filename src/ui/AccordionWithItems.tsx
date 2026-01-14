import React from 'react';
import { DefaultAccordionProps } from './types';

import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react';
import { NO_OPEN } from '../../constants/global';

export const AccordionWithItems: React.FC<DefaultAccordionProps> = ({
    items,
    defaultOpenIndex = 0,
}) => {
    const [open, setOpen] = React.useState<number>(defaultOpenIndex);
    const handleOpen = (value: number) => setOpen(open === value ? NO_OPEN : value);

    return (
        <>
            {items.map((item, index) => (
                <Accordion open={open === index + 1}>
                    <AccordionHeader onClick={() => handleOpen(index + 1)}>
                        {item.header}
                    </AccordionHeader>
                    <AccordionBody>{item.body}</AccordionBody>
                </Accordion>
            ))}
        </>
    );
};
