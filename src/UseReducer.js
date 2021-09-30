//The useReducer hook is used for complex state manipulations and state transitions

//import useReducer from react as shown in the below snippet:
import React, { useReducer } from 'react';

function reducer(state, action) 
{   
  switch(action.type) 
  { 
    case 'INCREMENT':  
      return { count: state.count + 1 } 
    case 'DECREMENT': 
      return { count: state.count - 1 } 
    case 'REPLACE': 
      return { count: action.newCount } 
    case 'RESET': return { count: 0 } 
    default: return state 
  } 
} // Now inside our component, we can initialize the state like below
const Counter = () => 
{
  //React.useReducer is a React hook function that accepts a reducer function, and an initial state.  
  //This hook function returns an array with 2 values. The first one is the state value, and the second value is the dispatch function 
  //which is further used to trigger an action with the help of array destructuring. 
  const [count, dispatch] = useReducer(reducer, 0) 
  
  return 
  ( <> Counter: {count} 
  <button onClick={() => dispatch('INCREMENT')}>+</button>  //Dispatch is just like a function which we can pass around to other components through props
  <button onClick={() => dispatch('DECREMENT')}>-</button> 
</> ) } 
