import React from 'react';

const FunctionStruct = (props) => {
  const { firstName, lastName } = this.props; //destructuring the props to distinct variables
  return (
    <div>
      <h1>
        {firstName}, {lastName}
      </h1>
    </div>
  ); //Just firstName and lastName instead of this.props.firstName and this.props.LastName
};

/*
1. Destructuring is an ES6 feature that makes possible to unpack values from arrays or properties from objects into distinct varaibles. 
 */
