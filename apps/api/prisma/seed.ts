import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { PrismaClient } from 'generated/prisma/client';
import { TractorStatus } from 'generated/prisma/enums';

const prisma = new PrismaClient({
  adapter: new PrismaBetterSqlite3({
    url: process.env.DATABASE_URL!,
  }),
});

async function main() {
  console.log('🌱 Seeding database...');

  // -----------------------------
  // Farmers
  // -----------------------------
  const farmers = await prisma.farmer.createMany({
    data: [
      {
        name: 'Ramesh Kumar',
        phone: '9876543210',
        village: 'Green Field',
      },
      {
        name: 'Suresh Patel',
        phone: '9123456789',
        village: 'River Side',
      },
      {
        name: 'Mahesh Singh',
        phone: '9000011111',
        village: 'Hill View',
      },
    ],
  });

  console.log(`✅ Farmers seeded`);

  // -----------------------------
  // Tractors
  // -----------------------------
  const tractors = await prisma.tractor.createMany({
    data: [
      {
        name: 'Kubota 6060',
        status: TractorStatus.AVAILABLE,
      },
      {
        name: 'Kubota DC 70G Pro',
        status: TractorStatus.MAINTENANCE,
      },
    ],
  });

  console.log(`✅ Tractors seeded`);

  // -----------------------------
  // Tractors
  // -----------------------------
  const workTypes = await prisma.workType.createMany({
    data: [
      {
        name: 'Rsx',
        code: 'Rdx',
      },
      {
        name: 'Push',
        code: 'Push',
      },
    ],
  });

  console.log(`✅ Work-Types seeded`);
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
