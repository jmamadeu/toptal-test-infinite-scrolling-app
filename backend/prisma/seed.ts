import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const messages = await prisma.message.createMany({
    data: Array(80)
      .fill(1)
      .map((v, idx) => ({
        incoming: (idx + 1) % 2 === 0,
        message: `Message ${idx}`,
      })),
  });

  console.log({ messages });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
