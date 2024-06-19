import { PrismaClient } from '@prisma/client';
import md5 from 'md5';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  //const password = await hash('Test@123', 12);
  const password = md5('Test@123');
  const user = await prisma.user.upsert({
    where: { email: 'user@local.host' },
    update: {},
    create: {
      email: 'user@local.host',
      name: 'test',
      password,
    },
  });
  console.log({ user });
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
