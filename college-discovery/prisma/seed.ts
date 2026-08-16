import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.college.deleteMany();

  await prisma.college.createMany({
    data: [
      {
        name: "GL Bajaj Institute",
        location: "Greater Noida",
        fees: "₹1.5 Lakh",
        rating: 4.5,
        courses: "B.Tech,MBA,MCA",
        placements: "Average Package ₹6 LPA",
      },
      {
        name: "United College",
        location: "Prayagraj",
        fees: "₹1.2 Lakh",
        rating: 4.1,
        courses: "B.Tech,BCA",
        placements: "Average Package ₹4.5 LPA",
      },
      {
        name: "IET Lucknow",
        location: "Lucknow",
        fees: "₹90,000",
        rating: 4.3,
        courses: "B.Tech,M.Tech",
        placements: "Average Package ₹5 LPA",
      },
    ],
  });

  console.log("Seeded colleges.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
