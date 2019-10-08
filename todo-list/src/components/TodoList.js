import React from 'react';
import TodoItem from './TodoItem'


function TodoList(props){

     let todoList = props.state

     return(
          <div>
               {todoList.map(item => {
                    return(
                         <TodoItem key={item.id} {...item}/>
                    )
               })
               }
          </div>
     )
}

export default TodoList;