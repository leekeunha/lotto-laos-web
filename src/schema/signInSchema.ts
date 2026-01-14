import { z } from 'zod';

export const playerSignInSchema = z.object({
    identifier: z.string().regex(/^\d+$/, '숫자만 입력할 수 있습니다.'),
    password: z.string(),
    rememberMe: z.boolean(),
    memberType: z.string(),
});

export const partnerSignInSchema = z.object({
    identifier: z.string(),
    password: z.string(),
    rememberMe: z.boolean(),
    memberType: z.string(),
});

export type SignInSchema = z.infer<typeof playerSignInSchema>;
