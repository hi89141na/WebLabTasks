/*
"use client";
import React, { useState, useEffect } from "react";
import './globals.css'
export default function Home() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    let getData = async () => {
      let response = await fetch("https://dummyjson.com/recipes");
      let res = await response.json();
      setRecipes(res.recipes);
    };

    getData();
  }, []);
  return (
    <>
      Home
      {recipes.map((recipe) => {
        return <h2>{recipe.name}</h2>;
      })}
    </>
  );
}
*/
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const router = useRouter(); // Use Next.js router

  // Fetch recipes when the component mounts
  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await fetch('https://dummyjson.com/recipes');
      const data = await res.json();
      setRecipes(data.recipes);
    };

    fetchRecipes();
  }, []);

  // Handle navigation to the recipe detail page
  const navigateToRecipe = (id) => {
    router.push(`/recipe/${id}`); // Navigate programmatically
  };

  return (
    <div>
      <h1>All Recipes</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: '1px solid #ccc',
              padding: '20px',
              borderRadius: '10px',
              cursor: 'pointer',
            }}
            onClick={() => navigateToRecipe(recipe.id)} // Navigate when clicked
          >
            <img src={recipe.image} alt={recipe.name} width="300" height="200" />
            <h3>{recipe.name}</h3>
            <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
            <p><strong>Rating:</strong> {recipe.rating}</p>
            <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
