import { z } from "zod";

export const SigninSchema = z.object({
    username: z.string(),
    password: z.string()
})

export const SignupSchema = z.object({
    username: z.string().min(5),
    name: z.string().min(4),
    password: z.string().min(8)
})

export const CreateZapSchema = z.object({
    availableTriggerId: z.string(),
    triggerMetadata: z.any().optional(),
    actions: z.array(z.object({
        availableActionId: z.string(),
        actionMetadata: z.any().optional()
    }))
})