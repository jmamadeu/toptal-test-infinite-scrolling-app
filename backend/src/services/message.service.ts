import { Message } from "../models/message.model";
import { databaseClient } from "./database";

type SearchMessageParams = {
  offset: number;
  pageSize: number;
};

export class MessageService {
  async searchMessages({ offset, pageSize }: SearchMessageParams) {
    const messages = await databaseClient.$queryRaw<
      Array<Message.Type>
    >`SELECT * FROM messages LIMIT ${pageSize} OFFSET ${offset}`;

    return messages;
  }

  async totalMessages() {
    const total =
      await databaseClient.$queryRaw<number>`SELECT COUNT(id) as total FROM messages`;

    return total;
  }
}
