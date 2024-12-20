// src/components/CategoryCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function CategoryCard({ category }) {
    const navigate = useNavigate();

    const navigateToCategory = () => {
        navigate(`/category/${category.name}`); // Assuming `name` is a property to form the URL
    };

    return (
        <div onClick={navigateToCategory} className="category-card">
            <img src={category.imageUrl || 'default_image_url'} alt={`Image of ${category.name}`} className='categorylist-img' />
            <h3 className="categorycard-title">{category.name}</h3> {/* Accessing name property */}
            <p className="categorycard-text"> {category.paragraph} </p>
        </div>
    );
}

export default CategoryCard;
