-- CreateTable
CREATE TABLE "messages" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "incoming" BOOLEAN NOT NULL,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);
