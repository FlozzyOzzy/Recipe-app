import React from 'react';
import { useNavigate } from 'react-router-dom';

function RecipesList() {
    const navigate = useNavigate();  // Hook to handle navigation

    const navigateToHome = () => {
        navigate('/');  // Assuming '/' is your home route
    };

    return (
      <div className='categorylist-header'>
              <h1 className='categorylist-header1' onClick={navigateToHome}>Jikoni Flavors</h1>
              <h2 className='categorylist-header2'> Made by Kenyans, Celebrated by All </h2>
      </div>
    );
}

export default RecipesList;
