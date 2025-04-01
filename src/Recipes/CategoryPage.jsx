// src/pages/CategoryPage.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RecipesCard from './RecipesCard';
import RecipesList from './RecipesList.jsx';
import client from '../ContentfulClient';


function CategoryPage() {
    const { categoryName } = useParams();
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipesByCategory = async () => {
            try {
                const response = await client.getEntries({
                    content_type: 'universalContent',
                    'fields.category': categoryName // Assuming 'categories' is the correct field and matches Contentful
                });

                if (response.items.length > 0) {
                    setRecipes(response.items.map(item => item.fields));
                } else {
                    console.log("No recipes found for category:", categoryName);
                    setRecipes([]);
                }
            } catch (error) {
                console.error("Error fetching recipes from Contentful:", error);
            }
        };

        fetchRecipesByCategory();
    }, [categoryName]);

    return (
        <>
            <RecipesList />
            <div className="category-page-container">
                <div className="category-content">
                    <h1 className="category-title">{categoryName}</h1>
                    <div className='category-recipescard'>
                    {recipes.map(recipe => (
                        <RecipesCard key={recipe.id} recipeId={recipe.id} />
                    ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CategoryPage;