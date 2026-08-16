"use client";

import { useState } from "react";
import Link from "next/link";

type College = {
  id: number;
  name: string;
  location: string;
  fees: string;
  rating: number;
};

export default function CollegeSearch({ colleges }: { colleges: College[] }) {
  const [search, setSearch] = useState("");

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search College..."
        className="w-full p-3 border rounded-lg mb-6"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid gap-6">
        {filteredColleges.map((college) => (
          <div key={college.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">{college.name}</h2>
            <p>Location: {college.location}</p>
            <p>Fees: {college.fees}</p>
            <p>Rating: ⭐ {college.rating}</p>
            <Link
              href={`/college/${college.id}`}
              className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
