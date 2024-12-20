import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipesDetail from './Recipes/RecipesDetail';
import CategoryList from './Recipes/CategoryList';
import CategoryPage from './Recipes/CategoryPage';
import Footer from './Recipes/Footer';


const App = () => {
  
  return (
    <Router>
      <div>
        
       
        <Routes>
          <Route path="/" element={<CategoryList />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/recipe/:recipeId" element={<RecipesDetail />} />
          
        </Routes>
        <Footer />

      </div>
    </Router>
  )
}

export default App




