import { z } from 'zod';

export const buyProductSchema = z.object({
    count: z.number().min(1, 'Count must be at least 1').max(999, 'Count must be at most 999'),
});

export type BuyProductSchema = z.infer<typeof buyProductSchema>;
