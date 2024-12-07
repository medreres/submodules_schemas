import { z } from "zod";

export const UserRecordSchema = z.object({
  firstName: z.string().min(1).optional(),
  lastName: z.string().min(1).optional(),
});

export const GetUserByIdSchema = z.object({
  id: z.coerce.number()
})