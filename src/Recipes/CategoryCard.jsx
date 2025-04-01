import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes

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

// Define PropTypes for the component
CategoryCard.propTypes = {
    category: PropTypes.shape({
        name: PropTypes.string.isRequired, // `name` is required and must be a string
        imageUrl: PropTypes.string,        // `imageUrl` is optional and must be a string
        paragraph: PropTypes.string        // `paragraph` is optional and must be a string
    }).isRequired // `category` itself is required
};

export default CategoryCard;