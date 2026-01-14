import { z } from 'zod';

export const createBankSchema = z.object({
    bankName: z.string().min(1, 'BankName must not be empty'),
    accountNumber: z.string().min(1, 'Title must not be empty'),
    holderName: z.string().min(1, 'HolderName must not be empty'),
});

export type CreateBankSchema = z.infer<typeof createBankSchema>;
