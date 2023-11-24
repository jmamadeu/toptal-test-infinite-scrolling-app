import { useInfiniteQuery } from "@tanstack/react-query";
import { apiClient } from "../api-client";
import { Message } from "../models/message.model";

class MessageService {
  async searchMessages(params: Message.SearchParams) {
    const response = await apiClient.get<Message.SearchResponse>(`/messages`, {
      params,
    });

    console.log("ran function");

    return response.data;
  }
}

export function useMessages(params: Message.SearchParams) {
  const messageService = new MessageService();

  return useInfiniteQuery({
    initialPageParam: "",
    queryKey: ["messages"],
    queryFn: ({ pageParam }) =>
      messageService.searchMessages({ cursor: pageParam ?? "" }),
    getNextPageParam: (response) => response.cursor,
  });
}
