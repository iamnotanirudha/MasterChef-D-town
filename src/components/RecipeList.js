import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import trashCan from '../assets/trashCan.svg'
import './RecipeList.css'
import { projectFirestore } from '../firebase/config'



export default function RecipeList({recipes}) {

  const {mode} = useTheme()

  if(recipes.length === 0){
    return <div className='error'> No recipes to load....</div>
  }

  const handleClick = (id) => {
    projectFirestore.collection('recipes').doc(id).delete()
  }

  return (
    <div className='recipe-list'>
        {recipes.map((recipe) => ( 
            <div key={recipe.id} className={`card ${mode}`}>
                <h3>{recipe.title}</h3>
                <p>{recipe.cookingTime}</p>
                <div>
                    {recipe.method.substring(0, 100)}...
                </div>
                
                <Link to={`/recipes/${recipe.id}`}> Cook This</Link>
                
                <img 
                  className='delete-btn'
                  alt='trashCan'
                  src={trashCan}
                  onClick={() => handleClick(recipe.id)}
                />
            </div>
      ))}
    </div>
  )
}
