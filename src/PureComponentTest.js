import React, { Purecomponent } from 'react';

class PureComponentTest extends Purecomponent {
  render() {
    <div>This is a pure component</div>;
  }
}

/* 
In regular class components, the component gets re-rendered when the value of state or props gets update even if the value of the current vlaue and new value is same. To avoid re-rendering, we hook shouldComponentUpdate function, compare the current value with teh new value and if the are same, we return false. it will avoid re-rendering the components. this is already taken care in the pure component. 

for fuction component, we create memo to implement the same. Memo is the higher order component. 
  export default React.memo(memocomp) 

  
*/
