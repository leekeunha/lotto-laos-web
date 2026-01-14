import { z } from 'zod';

export const editBankSchema = z.object({
    memberBankIdx: z.string(),
    bankName: z.string().min(1, 'BankName must not be empty'),
    accountNumber: z.string().min(1, 'Title must not be empty'),
    holderName: z.string().min(1, 'HolderName must not be empty'),
});

export type EditBankSchema = z.infer<typeof editBankSchema>;
