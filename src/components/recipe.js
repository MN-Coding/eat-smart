import React from 'react'
import './recipe.css'

const Recipe = (props) => {
  return (
    <div className='recipe'>
        <h1>{props.title}</h1>
        <p className='calories'>{Math.round(props.calories)} Calories</p>
        <ol>
          {props.ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
        <img src={props.image} alt={props.title} />
    </div>
  )
}

export default Recipe