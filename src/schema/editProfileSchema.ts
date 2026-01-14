import { z } from 'zod';

export const editProfileSchema = z.object({
    name: z.string(),
    email: z.string(),
    gender: z.string(),
    // TODO: stateIdx, districtIdx 둘다 필수값으로 하기
    stateIdx: z.union([z.string(), z.number()]),
    districtIdx: z.union([z.string(), z.number()]),
    addressDetail: z.string(),
    imageUrl: z.string().optional(),
});

export type EditProfileSchema = z.infer<typeof editProfileSchema>;
