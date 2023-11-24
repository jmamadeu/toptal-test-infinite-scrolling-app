import { Router } from "express";
import { getMessagesController } from "../controllers/messages.controller";

const messagesRouter = Router();

messagesRouter.get("/", getMessagesController);

export { messagesRouter };
