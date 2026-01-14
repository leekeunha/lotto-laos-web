import { z } from 'zod';

export const veriyfyCurrentPasswordSchema = z.object({
    password: z.string().min(1, 'Password must not be empty'),
});

export type VeriyfyCurrentPasswordSchema = z.infer<typeof veriyfyCurrentPasswordSchema>;
