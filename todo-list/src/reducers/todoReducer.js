
export const initialState = {
     todos:[
          {
               item: 'Learn about reducers',
               completed: false,
               id: 124212
          },
          {
               item: 'Learn about reducers',
               completed: false,
               id: 1581053805
          },
     ]




}
export const reducer = (state, action) => {
     switch(action.type){
          case 'ADD_TODO':
               const newItem = {
                    item:action.payload,
                    id: Date.now(),
                    completed:false
               }
               return{
                    ...state,
                    todos: [...state.todos, newItem] 
               }

          case "TOGGLE_ITEM": 
               console.log(action.payload)
               return {
                    ...state,
                    todos: state.todos.map(item => 
                    item.id === action.payload ? {...item, completed: !item.completed } : item    
                    )
               }

          case "CLEAR_COMPLETED":
               return{
                    ...state,
                    todos: state.todos.filter(item => item.completed === false)
               }

          default:
               return state;
     }
}




// ** ATTEMPT 1
// state.todos.map(item => {
//      if (item.id === action.payload) {
//           return {
//                ...item,
//                completed: !state.completed
//           }
//      } else {
//           return { ...item }
//      }
// })
// return {
//      ...state
// }

// ** ATTEMPT 2 - DELETED THE ITEMS NOT TOGGLED completed
//  case "TOGGLE_ITEM":
// console.log(action.payload)
// return {
//      ...state,
//      todos: state.todos.filter(
//           item => item.id !== action.payload
//      )
// }

// ** ATTEMPT 3 - TOGGLED completed BUT WOULD NOT TOGGLE BACK 
// case "TOGGLE_ITEM":
// console.log(action.payload)
// return {
//      ...state,
//      todos: state.todos.map(item => {
//           if (item.id === action.payload) {
//                return {
//                     ...item,
//                     completed: !state.completed
//                }
//           } else {
//                return { ...item }
//           }
//      }
//      )
// }
