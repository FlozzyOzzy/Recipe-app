// src/pages/CategoryPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import RecipesCard from './RecipesCard';
import { Recipe } from '../Data';
import RecipesList from './RecipesList.jsx';

function CategoryPage() {
    const { categoryName } = useParams();
    const filteredRecipes = Recipe.filter(recipe => recipe.category === categoryName);

    return (
        <>
        <RecipesList />
    <div className="category-page-container"> 
            <div className="category-content">
                <h1 className="category-title">{categoryName}</h1>
                <div className='category-recipescard'>
                {filteredRecipes.map(recipe => (
                    <RecipesCard key={recipe.id} recipe={recipe} />
                ))}
                </div>
            </div>
        </div>
        </>
    );
}

export default CategoryPage;
