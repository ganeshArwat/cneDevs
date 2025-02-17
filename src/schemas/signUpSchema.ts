import {z} from "zod";

export const signUpSchema = z.object({
    fname: z.string(),
    lname: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    verifyCode: z.string(),
    verifyCodeExpiry: z.date(),
    isVerified: z.boolean(),
    profile_image: z.string(),
    title: z.string(),
    short_description: z.string(),
    long_description: z.string(),
    phone: z.string(),
    address: z.string(),
    linkedin: z.string(),
    github: z. string(),
    resume: z.string(),
});