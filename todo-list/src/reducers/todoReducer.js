
export const initialState = {
     todos:[
          {
               item: 'Learn about reducers',
               completed: false,
               id: 124212
          }
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
          default:
               return state;
     }
}
