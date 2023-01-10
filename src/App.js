import './App.css';
import { useEffect, useState } from 'react';
import Recipe from './components/recipe';
import {FaCarrot} from 'react-icons/fa'

function App() {

  const APP_ID = '272454b6'
  const APP_KEY = '04f2fc2c7beb82f4a74d9e51ff16554d'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')

  useEffect(() => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
  }

  return (
    <div className="App">
      <div className="body">
      <h1 className='title'>EatSmart</h1>
      <FaCarrot className='carrot'/>
      <form onSubmit={getSearch} className='search-form'>
        <input 
          className='search-bar' 
          type="text" 
          value={search}
          onChange={updateSearch}/>
        <button className='search-button' type='submit'>Search</button>
      </form>
      <div className='recipes'>
        {recipes.map(recipe => (
          <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
