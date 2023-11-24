import { Request, Response } from "express";
import { MessageService } from "../services/message.service";

import { decode, encode } from "../lib/parser";

type Query = {
  cursor: string;
  pageSize: number;
};

function getNextCursor(nextPage: number, totalMessages: number) {
  if (nextPage > totalMessages / 2) {
    return null;
  }

  const nextCursor = encode(String(nextPage));

  return nextCursor;
}

export async function getMessagesController(req: Request, res: Response) {
  const { cursor, pageSize = 10 } = req.query as unknown as Query;

  const page = cursor ? Number(decode(cursor)) : 1;

  if (Number.isNaN(page)) {
    return res.json({
      cursor: null,
      items: [],
    });
  }

  const offset = Math.floor(page * pageSize - pageSize);

  const messageService = new MessageService();
  const messages = await messageService.searchMessages({
    offset,
    pageSize: 10,
  });

  const totalMessages = await messageService.totalMessages();

  return res.json({
    cursor: getNextCursor(page + 1, totalMessages),
    items: messages,
  });
}
