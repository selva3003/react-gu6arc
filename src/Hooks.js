/* 
  Hooks - It allows you to use state and other React features without writing a class. 
  Hooks are the functions which "hook into" React state and lifecycle features from function components. 
  
  import React, { useState, useEffect } from 'react'; 
  
  useState = this hook lets you to add state to functional components. In class state is always an object. here it can be a variable, array, objects
         // Declare a new state variable, which we'll call "count"  
        const [count, setCount] = useState(0); 
        <button onClick={() => setCount(count + 1)}> 
        
       // useState with object or array have to be merged with the other variables while set state. that can be done by the spread operator. 
          const [myArray, updateMyArray] = useState([]);
          const onClick = () => {
              updateMyArray( arr => [...arr, `${arr.length}`]);
          };
          <input type="button" onClick={ onClick } value="Update" />
          
    useEffect = will help us to perform side effects in functional components like interacting with the DOM element, any http calls can be performed in the useEffect.
              its a close replacement to componentDidMount, componentDidUpdate, componenetWillMount. 
              its called after every single render. pass empty array as 2nd param to the function to run effects only once.
              
              const [count, setCount] = useState(0);  
            // Similar to componentDidMount and componentDidUpdate:  
            useEffect(() => {  
              // Update the document title using the browser API  
              document.title = `You clicked ${count} times`;  
              return () => {
                Console.log('Clean up on component unmount') //useEffect with cleanup.
              }
            });  
            <button onClick={() => setCount(count + 1)}>  
            
    CreateContext and useContext - CreateContext in class component helps us to avoid prop drilling.Uses context provider and consumer. 
    its good for single context. but for multiple contexts we can make use of useContext(context).
          ex. const user = useContext(UserContext) and const channel = useContext(ChannelContext). 
          
     
*/
