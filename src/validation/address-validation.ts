import { ZodType, z } from "zod";

export class AddressValidation {
  static readonly CREATE: ZodType = z.object({
    contact_id: z.number().positive(),
    street: z.string().min(1).max(100).optional(),
    city: z.string().min(1).max(100).optional(),
    province: z.string().min(1).max(100).optional(),
    country: z.string().min(1).max(100),
    postal_code: z.string().min(1).max(100).optional(),
  });

  static readonly GET: ZodType = z.object({
    contact_id: z.number().positive(),
    id: z.number().positive(),
  });

  static readonly UPDATE: ZodType = z.object({
    contact_id: z.number().positive(),
    id: z.number().positive(),

    street: z.string().min(1).max(100).optional(),
    city: z.string().min(1).max(100).optional(),
    province: z.string().min(1).max(100).optional(),
    country: z.string().min(1).max(100),
    postal_code: z.string().min(1).max(100).optional(),
  });
  static readonly REMOVE: ZodType = z.object({
    contact_id: z.number().positive(),
    id: z.number().positive(),
  });
}
