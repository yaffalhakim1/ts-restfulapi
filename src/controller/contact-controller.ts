import { NextFunction, Response } from "express";
import { UserRequest } from "../types/user-request";
import {
  CreateContactRequest,
  SearchContactRequest,
  UpdateContactRequest,
} from "../model/contact-modal";
import { ContactService } from "../service/contact-service";

export class ContactController {
  static async create(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const request: CreateContactRequest = req.body as CreateContactRequest;
      const response = await ContactService.create(req.user!, request);
      res.status(200).json({
        data: response,
        message: "Contact created successfully",
      });
    } catch (error) {
      next(error);
    }
  }
  static async get(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const contactId = Number(req.params.contactId);
      const response = await ContactService.get(req.user!, contactId);
      res.status(200).json({
        data: response,
        message: "Contact get successfully",
      });
    } catch (error) {
      next(error);
    }
  }
  static async update(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const request: UpdateContactRequest = req.body as UpdateContactRequest;
      request.id = Number(req.params.contactId);
      const response = await ContactService.update(req.user!, request);
      res.status(200).json({
        data: response,
        message: "Contact updated successfully",
      });
    } catch (error) {
      next(error);
    }
  }
  static async remove(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const contactId = Number(req.params.contactId);
      await ContactService.remove(req.user!, contactId);
      res.status(200).json({
        data: "ok",
        message: "Contact deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  static async search(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const request: SearchContactRequest = {
        name: req.query.name as string,
        email: req.query.email as string,
        phone: req.query.phone as string,
        page: req.query.page ? Number(req.query.page) : 1,
        size: req.query.size ? Number(req.query.size) : 10,
      };
      const keyword = req.query.keyword as string;
      const response = await ContactService.search(req.user!, request);
      res.status(200).json({
        data: response,
        message: "Contact searched successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}
