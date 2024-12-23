"use client";

import { useRouter } from "next/navigation";
import { DotLoader } from "react-spinners";
import useSWR from "swr";

export default function Recipes3() {
  const router = useRouter();

  // Define the fetcher function
  const fetcher = (url) => fetch(url).then((res) => res.json());

  // Use SWR to fetch data
  const { data, error, isLoading } = useSWR("https://dummyjson.com/recipes", fetcher);

  // Handle navigation to the recipe detail page
  const navigateToRecipe = (id) => {
    router.push(`/recipe3/${id}`);
  };

  // Loading and error states
  if (isLoading) {
    return (
      <div className="min-h-screen bg-blue-950 flex items-center justify-center py-10">
        <DotLoader color="#ffffff" />
      </div>
    );
  }

  if (error) {
    return <div className="text-white text-center py-10">Failed to load recipes.</div>;
  }

  return (
    <div className="bg-blue-950 min-h-screen p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data?.recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="p-4 bg-white rounded-lg shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
            onClick={() => navigateToRecipe(recipe.id)}
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{recipe.name}</h3>
            <p className="text-gray-700">
              <strong>Cuisine:</strong> {recipe.cuisine}
            </p>
            <p className="text-gray-700">
              <strong>Rating:</strong> {recipe.rating}
            </p>
            <p className="text-gray-700">
              <strong>Difficulty:</strong> {recipe.difficulty}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
