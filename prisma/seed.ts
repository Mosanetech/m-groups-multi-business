import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const username =
    process.env.SEED_ADMIN_USERNAME ?? "superadmin";

  const email =
    process.env.SEED_ADMIN_EMAIL ?? "admin@m360.com";

  const fullName =
    process.env.SEED_ADMIN_NAME ?? "System Administrator";

  const plainPassword =
    process.env.SEED_ADMIN_PASSWORD ?? "Admin@2026";

  const password = await bcrypt.hash(plainPassword, 12);

  await prisma.user.upsert({
    where: { username },
    update: {},
    create: {
      username,
      email,
      fullName,
      password,
      role: Role.SUPER_ADMIN,
      mustChangePassword: true,
    },
  });

  await prisma.siteSettings.upsert({
    where: {
      id: "default",
    },
    update: {},
    create: {
      id: "default",
      companyName: "M Groups",
    },
  });

  console.log(" Super Admin ready");
  console.log("Site Settings ready");
}
main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });