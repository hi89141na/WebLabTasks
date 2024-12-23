// app/recipes/page.js

import Image from "next/image";
import Link from "next/link";

export default async function RecipesPage() {
  // Fetch recipes data on the server
  const res = await fetch("https://dummyjson.com/recipes", { cache: "no-store" });
  const data = await res.json();


  // Check if data.recipes is an array
  const recipes = data?.recipes;

  return (
    <div className="bg-blue-950 min-h-screen p-10">
      <h1 className="text-white text-3xl mb-6">Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <Link href={`/recipe1/${recipe.id}`} key={recipe.id}>
              <div className="p-4 bg-white rounded-lg shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105">
                <Image
                  src={recipe.image}
                  alt={recipe.name}
                  width={300}
                  height={200}
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
            </Link>
          ))
        ) : (
          <p className="text-white">No recipes found.</p>
        )}
      </div>
    </div>
  );
}
