// src/components/RecipeCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function RecipesCard({ recipe }) {
    const navigate = useNavigate();

    const navigateToDetails = () => {
        navigate(`/recipe/${recipe.id}`);
    };

    return (
        
        <div onClick={navigateToDetails} className="recipe-card">
            <img src={recipe.image} alt={recipe.alt} className="recipe-image" />
            <h4 className="recipe-title">{recipe.title}</h4>
            <p className="recipe-summary">{recipe.summary}</p>
        </div>
    );
}

export default RecipesCard;
