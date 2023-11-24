export namespace Message {
  export type Type = {
    id: string;
    message: string;
    incoming: boolean;
  };

  export type SearchResponse = {
    cursor: string | null;
    items: Array<Message.Type>;
  };

  export type SearchParams = {
    cursor?: string;
  };
}
