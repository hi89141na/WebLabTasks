export default async function RecipeDetail({ params }) {
  const { id } = params;

  // Fetch the specific recipe by ID
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);
  const recipe = await res.json();

  if (!recipe) return <div>Recipe not found!</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{recipe.name}</h1>
      <img                                              
        src={recipe.image}
        alt={recipe.name}
        width="500"
        height="300"
        style={{ borderRadius: '10px' }}
      />
      <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
      <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
      <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} minutes</p>
      <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes</p>
      <p><strong>Servings:</strong> {recipe.servings}</p>
      <p><strong>Calories per serving:</strong> {recipe.caloriesPerServing}</p>

      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h3>Instructions</h3>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>

      <p><strong>Rating:</strong> {recipe.rating} ({recipe.reviewCount} reviews)</p>
    </div>
  );
}
