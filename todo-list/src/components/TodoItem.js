import React from 'react'


function TodoItem(props){

    console.log(props.item)

     return(
          <div>
               <p>{props.item}</p>
          </div>
     )
}

export default TodoItem