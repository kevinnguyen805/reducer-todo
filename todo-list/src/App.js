import React, {useState, useReducer } from 'react';
import ListForm from './components/ListForm'
import TodoList from './components/TodoList'
import './App.css';

// import reducers
import {initialState, reducer } from './reducers/todoReducer'




function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewTodo] = useState('')

  return (
    <div className="App">
      <TodoList state={state}/>

    </div>
  );
}

export default App;
