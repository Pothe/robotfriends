import React from 'react'
import Cards from './cards'

const Cardlist = ({robots}) => {
  return (
    <div>
       {
        robots.map((value,i)=>{
          return (
            < Cards 
            key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            username={robots[i].username} 
            email={robots[i].email}
            phone={robots[i].phone}
            website={robots[i].website}
            />
          )
          })

       }
    </div>
  )
}

export default Cardlist