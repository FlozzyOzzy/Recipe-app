// src/components/RecipeCard.js
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import client from '../ContentfulClient.jsx';

function RecipeCard({ recipeId }) {
    const [recipe, setRecipe] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      const fetchRecipe = async () => {
        try {
          const response = await client.getEntries({
            content_type: 'universalContent', // Ensure this matches your Contentful content type
            'fields.id': recipeId  // Assuming 'id' is the correct field ID for your model
          });
          

          if (response.items.length > 0) {
            setRecipe(response.items[0].fields);
          } else {
            console.log("No recipe found for ID:", recipeId); // Useful for debugging
            setRecipe(null);
          }
        } catch (error) {
          console.error("Error fetching recipe from Contentful:", error);
        }
      };

      fetchRecipe();
    }, [recipeId]);

    const navigateToDetails = () => {
        navigate(`/recipe/${recipe.id}`);
    };

    if (!recipe) return <div>Loading...</div>; // Or any other loading state

    return (
        <div onClick={navigateToDetails} className="recipe-card">
            <img src={recipe.image?.fields?.file?.url} alt={recipe.alt} className="recipe-image" />
            <h4 className="recipe-title">{recipe.title}</h4>
            <p className="recipe-summary">{recipe.summary}</p>
        </div>
    );
}
RecipeCard.propTypes = {
    recipeId: PropTypes.string.isRequired,
};


export default RecipeCard;
