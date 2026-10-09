import { z } from "zod";

export const demoSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
