import React, { Component } from 'react';

class FirstClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.Message,
      /*message: 'Welcome'*/
    };
  }
  ChangeMessage = () => {
    this.setState({
      message: 'Message is changed',
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.ChangeMessage}>Subscribe</button>
      </div>
    );
  }
}
export default FirstClass;

/* 1. Class component should alwasy have a render method.
  2. state is an object this is maintained only within the class component.
  3. state values can be meodified only by using setState function. Because setState bydefault will re-render the component based on the modified. if state is value is assigned directly, then react will not re-render the component. 
  4. Also, the setState func runs asynchronously. so if anything needs to be happened only after the completion of setState func, then add the callback func as second parameter to the setState.
  5. Also, react groups multiple setState calls into single update for better performance. In such scnearios, use the previous state to update the state
      this.setState(prevState, props)=> ({
        count: prevState.count+1
      })
  6. the state can be directly assginged only inside the constructor. 
*/
