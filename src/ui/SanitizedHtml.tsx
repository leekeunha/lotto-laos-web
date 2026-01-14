import DOMPurify from 'dompurify';
import { SanitizedHTMLProps } from './types';

export default function SanitizedHTML({ html, className }: SanitizedHTMLProps) {
    const cleanHTML = DOMPurify.sanitize(html);
    return <p className={`${className}`} dangerouslySetInnerHTML={{ __html: cleanHTML }} />;
}
