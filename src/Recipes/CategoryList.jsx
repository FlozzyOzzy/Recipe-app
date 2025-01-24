import React, { useState } from 'react';
import CategoryCard from './CategoryCard.jsx';
import { Categories } from '../Data.jsx';
import RecipesList from './RecipesList.jsx';
import RecipesCard from './RecipesCard.jsx';
import client from '../ContentfulClient.jsx';

function CategoryList() {
    const [searchTerm, setSearchTerm] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [searchPerformed, setSearchPerformed] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Added loading state

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
          fetchRecipes();
      }
    };

    const fetchRecipes = async () => {
        setRecipes([]);
        setSearchPerformed(true);
        setIsLoading(true); // Start loading when fetching begins
        try {
            const response = await client.getEntries({
              content_type: 'universalContent', // Make sure this matches your Contentful setup
                query: searchTerm
            });
            console.log("Search Results:", response.items);
            setRecipes(response.items.map(item => ({
                id: item.fields.id,
                title: item.fields.title,
                image: item.fields.image?.fields.file.url,
                alt: item.fields.alt,
                summary: item.fields.summary
            })));
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
        setIsLoading(false); // Stop loading regardless of the outcome
    };

    return (
        <div className='categorylist'>
            <RecipesList />

            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onKeyDown={handleKeyDown}
                />
                <button className="search-button" onClick={fetchRecipes}>
                <i className="fas fa-search"></i>
                </button>
            </div>

            {isLoading ? (
                <div>Loading recipes...</div>  // Display while recipes are being fetched
            ) : recipes.length > 0 ? (
                <div className="category-recipescard">
                    {recipes.map(recipe => (
                        <RecipesCard key={recipe.id} recipeId={recipe.id} />
                    ))}
                </div>
            ) : searchPerformed ? (
                <div className="recipe-not-found">
                    <h3>Recipe Not Found!</h3>
                </div>
            ) : (
                <>
                <div className='categorylist-paragraph'>
                    <h3 className='categorylist-header3'>What Are We About?</h3>
                    <p className='categorylist-text'>
                        Jikoni Flavors is a vibrant and inviting website dedicated to celebrating the rich culinary heritage of Kenya and beyond. While the platform serves as a goldmine of authentic Kenyan recipes, it also embraces a variety of international cuisines, offering a diverse collection of dishes for both locals and global food enthusiasts to enjoy. 
                        From the sizzling delights of Nyama Choma (grilled meat) and the comforting warmth of Chapati (unleavened flatbread) to globally loved recipes like Italian pastas, Asian stir-fries, and Middle Eastern specialties, Jikoni Flavors ensures a well-rounded culinary experience. Each recipe is carefully tailored to help users recreate traditional and international dishes at home, with detailed insights into the ingredients and techniques behind every meal. 
                        Jikoni Flavors is more than just a recipe site—it's a cultural and culinary gateway, making it an essential destination for anyone eager to explore the world’s flavors, one dish at a time.
                    </p>
                </div>
                <div className='categorylist-categories'>
                    <h3 className='categorylist-categoriesheader'>Categories</h3>
                    <div className='categorylist-categorieslist'>
                        {Categories.map((category, index) => (
                            <CategoryCard key={index} category={category} />
                        ))}
                    </div>
                </div>
                </>
            )}
        </div>
    );
}

export default CategoryList;
