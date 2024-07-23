import { ZodType, z } from "zod";

export class ContactValidation {
  static readonly CREATE: ZodType = z.object({
    first_name: z.string().min(1).max(100),
    last_name: z.string().min(1).max(100).optional(),
    email: z.string().email().min(1).max(100).email().optional(),
    phone: z.string().min(1).max(100).optional(),
  });
  static readonly UPDATE: ZodType = z.object({
    id: z.number().positive(),
    first_name: z.string().min(1).max(100),
    last_name: z.string().min(1).max(100).optional(),
    email: z.string().email().min(1).max(100).email().optional(),
    phone: z.string().min(1).max(100).optional(),
  });

  static readonly SEARCH: ZodType = z.object({
    name: z.string().min(1).max(100).optional(),
    email: z.string().email().min(1).max(100).email().optional(),
    phone: z.string().min(1).max(100).optional(),
    page: z.number().min(1).positive(),
    size: z.number().min(1).max(10).positive(),
  });
}
