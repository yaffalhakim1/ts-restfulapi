import { User } from "@prisma/client";
import { Request } from "express";

// since expreess doesnt have user object, we extend it and add our own type
// this is better than make the user object as any
export interface UserRequest extends Request {
  user?: User;
}
