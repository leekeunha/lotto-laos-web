import { z } from 'zod';

export const newInquirySchema = z.object({
    category: z.string(),
    title: z.string().min(1, 'Title must not be empty'),
    content: z.string().min(1, 'Content must not be empty'),
});

export type NewInquirySchema = z.infer<typeof newInquirySchema>;
