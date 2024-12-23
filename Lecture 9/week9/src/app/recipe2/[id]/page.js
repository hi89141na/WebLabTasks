"use client"; // This directive indicates that the component is a client component

import { useEffect, useState } from "react";

export default function RecipeDetail({ params }) {
  const { id } = params;
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch the specific recipe by ID
  useEffect(() => {
    const fetchRecipe = async () => {
      const res = await fetch(`https://dummyjson.com/recipes/${id}`);
      const data = await res.json();
      setRecipe(data);
      setLoading(false);
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <div>Loading...</div>; // Show a loading state
  if (!recipe) return <div>Recipe not found!</div>;

  return (
    <div className="p-5 bg-blue-950 text-white flex justify-center items-center min-h-screen w-min-screen gap-10">
      <div>
        <img
          src={recipe.image}
          alt={recipe.name}
          width="700"
          height="300"
          style={{ borderRadius: "10px" }}
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-3">{recipe.name}</h1>
        <p>
          <strong>Cuisine:</strong> {recipe.cuisine}
        </p>
        <p>
          <strong>Difficulty:</strong> {recipe.difficulty}
        </p>
        <p>
          <strong>Prep Time:</strong> {recipe.prepTimeMinutes} minutes
        </p>
        <p>
          <strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes
        </p>
        <p>
          <strong>Servings:</strong> {recipe.servings}
        </p>
        <p>
          <strong>Calories per serving:</strong> {recipe.caloriesPerServing}
        </p>

        <h3 className="text-2xl font-bold">Ingredients</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h3 className="text-2xl font-bold">Instructions</h3>
        <ol>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>

        <p>
          <strong>Rating:</strong> {recipe.rating} ({recipe.reviewCount} reviews)
        </p>
      </div>
    </div>
  );
}