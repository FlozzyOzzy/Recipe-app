
import React from 'react';
import CategoryCard from './CategoryCard.jsx';
import { Categories } from '../Data.jsx';
import RecipesList from './RecipesList.jsx';

function CategoryList() {
    return (
        <div className='categorylist'>
            <RecipesList />

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          
        />
        <button className="search-button" >
          <i className="fas fa-search"></i>
        </button>
      </div>

                <div className='categorylist-paragraph'>
                  <h3 className='categorylist-header3'>What Are We About?</h3>
              <p className='categorylist-text'>Jikoni Flavors is a vibrant and inviting website dedicated to celebrating the rich culinary heritage of Kenya. 
                The platform serves as a gold mine of authentic Kenyan food recipes, offering both locals and global food enthusiasts a chance to explore the unique flavors and cooking techniques that define Kenyan cooking. 
                From the sizzling delights of Nyama Choma (grilled meat) to the comforting warmth of Chapati (unleavened flatbread), each recipe is carefully tailored to ensure users can recreate traditional Kenyan dishes at home. 
                Jikoni Flavors is more than just a recipe site; it's a culinary cultural gateway, providing insights into the ingredients behind each dish, making it an essential destination for anyone eager to dive into the flavors of Kenya.
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
                    
        </div>
    
    );
}

export default CategoryList;
