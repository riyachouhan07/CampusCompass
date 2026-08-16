import { prisma } from "@/lib/prisma";

export default async function ComparePage() {
  const colleges = await prisma.college.findMany({
    orderBy: { id: "asc" },
  });

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Compare Colleges</h1>

      <table className="border-collapse border border-gray-400 w-full">
        <thead>
          <tr>
            <th className="border p-3">College</th>
            <th className="border p-3">Fees</th>
            <th className="border p-3">Rating</th>
            <th className="border p-3">Location</th>
          </tr>
        </thead>

        <tbody>
          {colleges.map((college) => (
            <tr key={college.id}>
              <td className="border p-3">{college.name}</td>
              <td className="border p-3">{college.fees}</td>
              <td className="border p-3">{college.rating}</td>
              <td className="border p-3">{college.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
