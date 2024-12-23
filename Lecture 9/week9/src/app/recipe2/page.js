"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {DotLoader} from 'react-spinners';

export default function Recipes2() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fetch recipes when the component mounts
  const fetchRecipes = async () => {
    try {
      const res = await fetch("https://dummyjson.com/recipes");
      const data = await res.json();
      setRecipes(data.recipes);
    } catch (err) {
      console.error("Failed to fetch recipes:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  // Handle navigation to the recipe detail page
  const navigateToRecipe = (id) => {
    router.push(`/recipe2/${id}`);
  };

  if (loading) {
    return <div className=" min-h-screen bg-blue-950  flex items-center justify-center py-10">   <DotLoader color="#ffffff" /></div>;
  }

  return (
    <div className="bg-blue-950 min-h-screen p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
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
