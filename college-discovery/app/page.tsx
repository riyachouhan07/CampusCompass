import { prisma } from "@/lib/prisma";
import CollegeSearch from "@/components/CollegeSearch";

export default async function Home() {
  const colleges = await prisma.college.findMany({
    orderBy: { id: "asc" },
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        College Discovery Platform
      </h1>

      <CollegeSearch colleges={colleges} />
    </div>
  );
}
