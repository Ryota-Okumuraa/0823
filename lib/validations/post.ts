import { z } from "zod"

export const postPathSchema = z.object({
    title: z.string().min(3).max(128, { message: "タイトルは3文字以上128文字以内で出力してください" }),
    content: z.any().optional(),
})

export type PostPathSchemaType = z.infer<typeof postPathSchema>