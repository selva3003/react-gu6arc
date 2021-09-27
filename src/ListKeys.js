import React, { Component } from 'react';

export class PersonList extends Component {
  render() {
    const Persons = [
      { name: 'Selva', Age: 37 },
      { name: 'Kumar', Age: 37 },
      { name: 'Chandran', Age: 60 },
    ];
    return (
      <div>
        {Persons.map((x) => (
          <div key={x.name}>
            Name:{x.name}, Age:{x.Age}
          </div>
        ))}
      </div>
    );
  }
}
/*
Lists and Keys
  1. if key prop is not set to the list from the map function, we will get a warning that "Each child in array should have a unique key property". React effectively updatas teh list item using that key property, else it will end up in updating or rendering the whole list even thought only item is changed. 

  2. Using array index as key is anti-pattern. Becuase it will result in the performance degradation when an item is added to the list from the top or while ordering the list. so, we should avoid using index until or unless its a static array. 

different ways to apply Styles:
  1. Using the styles.CSS and include the classname attribute in the control. multiple styles can be applied to the control using the template literals
  2. Inline styles. 
      const heading = {fontSize:'72px'}
      <h1 style={heading}></h1>
  3. CSS Modules. Sytels defined in the css class is scoped and can be applied to the child components. where as styles defined in the css modules cannot be applied to the child componenet.s 
  4. CSS in JS Libraries - TODO 
*/
