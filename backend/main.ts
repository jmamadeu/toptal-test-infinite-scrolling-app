import express from "express";
import { messagesRouter } from "./src/routers/messages.router";

const app = express();

app.use("/messages", messagesRouter);

app.listen(3333, () => console.log("Server is running 3333"));
