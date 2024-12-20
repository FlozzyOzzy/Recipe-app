// src/components/RecipeDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Recipe } from '../Data';
import RecipesList from './RecipesList.jsx';


function RecipesDetail() {
    const { recipeId } = useParams();
    const recipe = Recipe.find(r => r.id === parseInt(recipeId));

    if (!recipe) return <div className="recipe-not-found">Recipe Not Found!</div>;

    return (
        <div>
            
        <RecipesList />
        <div className="recipe-detail-container">
            <h1 className="recipedetail-title">{recipe.title}</h1>
            <h3 className="recipe-servings">Servings: {recipe.servings}</h3>
            <img src={recipe.image} alt={recipe.alt} className="recipedetail-image" />
            <h3 className="recipe-section-title">Ingredients</h3>
            <pre className="recipe-ingredients">{recipe.Ingredients}</pre>
            <h3 className="recipe-section-title">Instructions</h3>
            <p className="recipe-instructions">{recipe.decs}</p>
        </div>
        </div>
    );
}

export default RecipesDetail;
