import React, {useState, useReducer } from 'react';
import ListForm from './components/ListForm'
import TodoList from './components/TodoList'
import './App.css';

// import reducers
import {initialState, reducer } from './reducers/todoReducer'




function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewTodo] = useState('')

  const addItem = (item) => {
    const newItem = {
      name: item,
      id: Date.now(),
      purchased:false
    }
    setNewTodo(newItem)
  }

  // ** LIST FORM STUFF
  const [item, setItem] = useState('')

  const handleChanges = event => {
    setItem(event.target.value)
  }
  const submitItem = event => {
    event.preventDefault();
    addItem(item)
  }

  return (
    <div className="App">
      <TodoList state={state.todos}/>
      {/* <ListForm addItem={addItem} /> */}


      <form onSubmit={submitItem}>
        <input
          type="text"
          name="item"
          value={item}
          onChange={handleChanges}
          placeholder="Add item"
        />
        <button onClick={() => dispatch({ type: 'ADD_TODO', payload: item })}>Add Item</button>
      </form>

    </div>
  );
}

export default App;
