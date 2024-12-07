import { z } from "zod";
import { v4 as uuidv4 } from "uuid";

export const UserRecordSchema = z.object({
  firstName: z.string().min(1).optional(),
  lastName: z.string().min(1).optional(),
});

export const GetUserByIdSchema = z.object({
  id: z.coerce.number()
})

export const GetMeOutputSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  age: z.number()
})