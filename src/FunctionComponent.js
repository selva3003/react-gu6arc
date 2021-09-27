import React, { Component } from 'react';

const Function = () => {
  return <h1>Function1</h1>;
};

const Function1 = () => <h2>Function1</h2>;

/*function component with props argument*/
export const FunctionArgs = (props) => {
  return (
    <div>
      <div>{props.FirstName}</div>
      <div>{props.LastName}</div>
    </div>
  );
};

export { Function1 };
export default Function;

/*Important Notes
  1. Function components are nothing but the  JavaScript functions that accepts props as argument and returns a react element. Always start components name with capital letter. React treats components starting with lowercase letters as DOM tags.
  2. props can be passed only from parent to child. 
  2. A file can have only one default export.
  2. A file can have many named exports. ex Line17
*/
