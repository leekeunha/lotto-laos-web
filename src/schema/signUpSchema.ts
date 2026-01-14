import { z } from 'zod';

export const signUpSchema = z.object({
    identifier: z.string(),
    password: z.string(),
    rememberMe: z.boolean(),
    memberType: z.string(),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
