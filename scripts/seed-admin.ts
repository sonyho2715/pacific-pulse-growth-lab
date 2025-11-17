import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = "sony@pacificpulseai.com";
  const password = "Admin123!"; // Change this to a secure password
  const name = "Sony Ho";

  console.log("🌱 Seeding admin user...");

  // Check if admin already exists
  const existingAdmin = await prisma.user.findUnique({
    where: { email },
  });

  if (existingAdmin) {
    console.log("✅ Admin user already exists:", email);
    return;
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create admin user
  const admin = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
      role: "admin",
    },
  });

  console.log("✅ Admin user created successfully!");
  console.log("📧 Email:", email);
  console.log("🔑 Password:", password);
  console.log("⚠️  Please change the password after first login!");
  console.log("🆔 User ID:", admin.id);
}

main()
  .catch((error) => {
    console.error("❌ Error seeding admin user:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
