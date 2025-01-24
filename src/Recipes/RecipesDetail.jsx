// src/components/RecipeDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RecipesList from './RecipesList.jsx';
import client from '../ContentfulClient.jsx';


function RecipesDetail() {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
      const getRecipe = async () => {
          try {
              const response = await client.getEntries({
                  content_type: 'universalContent', // Ensure this matches your Contentful content type
                  'fields.id': recipeId  // Corrected to use 'ID' as per your Contentful model
              });

              console.log("Contentful Response:", response); // Logs the full response object

              if (response.items.length > 0) {
                  console.log("Recipe Data:", response.items[0].fields); // Logs the fields of the fetched recipe
                  setRecipe(response.items[0].fields);
              } else {
                  console.log("No recipe found for ID:", recipeId); // Useful for debugging
                  setRecipe(null);
              }
          } catch (error) {
              console.error("Error fetching data from Contentful:", error); // Error handling
          }
      };

      getRecipe();
  }, [recipeId]);

  if (!recipe) return <div className="recipe-not-found">Recipe Not Found!</div>;

  return (
    <div>
        <RecipesList />
        <div className="recipe-detail-container">
            <h1 className="recipedetail-title">{recipe?.title}</h1>
            <img src={recipe?.image?.fields?.file?.url} alt={recipe?.alt} className="recipedetail-image" />
            <h3 className="recipe-servings">Servings : {recipe?.servings}</h3>
            <h3 className="recipe-section-title">Ingredients</h3>
            <pre className="recipe-ingredients">{recipe?.ingredients}</pre>
            <h3 className="recipe-section-title">Instructions</h3>
            <p className="recipe-instructions">{recipe?.description}</p>
        </div>
    </div>
);
}

export default RecipesDetail;
