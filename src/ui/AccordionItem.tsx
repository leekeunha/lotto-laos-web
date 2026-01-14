import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react';
import React from 'react';
import SanitizedHTML from './SanitizedHtml';

export default function AccordionItem({ index, header, body }: any) {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

    return (
        <Accordion open={open === index}>
            <AccordionHeader onClick={() => handleOpen(index)}>{header}</AccordionHeader>
            <AccordionBody>
                <SanitizedHTML html={body || ''} />
            </AccordionBody>
        </Accordion>
    );
}
