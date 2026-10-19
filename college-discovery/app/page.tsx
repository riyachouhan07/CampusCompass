
import { prisma } from "@/lib/prisma";
import CollegeSearch from "@/components/CollegeSearch";

export default async function Home() {
  const colleges = await prisma.college.findMany({
    orderBy: { id: "asc" },
  });

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 text-gray-900 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <h1 className="mb-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            College Discovery Platform
          </h1>

          <p className="text-base text-gray-700">
            Discover, explore, and compare colleges to find the right fit for you.
          </p>
        </header>

        <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-8">
          <CollegeSearch colleges={colleges} />
        </section>
      </div>
    </main>
  );
}
