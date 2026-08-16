import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function CollegeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const college = await prisma.college.findUnique({
    where: { id: Number(id) },
  });

  if (!college) return notFound();

  const courseList = college.courses.split(",");

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">{college.name}</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <p><strong>Location:</strong> {college.location}</p>
        <p><strong>Fees:</strong> {college.fees}</p>
        <p><strong>Rating:</strong> ⭐ {college.rating}</p>
        <p><strong>Courses:</strong> {courseList.join(", ")}</p>
        {college.placements && (
          <p><strong>Placements:</strong> {college.placements}</p>
        )}
      </div>
    </div>
  );
}
