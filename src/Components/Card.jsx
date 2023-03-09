import React from 'react'
import "./Card.css"

const Card = ({user}) => {

return (
  <div className='card'>
     
       <h2 className='card-tit'>Los gustos de {user.nombre} son: </h2>
       <h3>Comida favorita: {user.comidaFavorita}</h3>
       <h3>Animal favorito: {user.animalFavorito}</h3>
       <h3>Color favorito: {user.colorFavorito}</h3>
  
  </div>
)
}

export default Card