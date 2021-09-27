import React, { Component } from 'react';

export class EventHandlerTest extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hi',
    };
    this.ChangeMessage = this.ChangeMessage.bind(this);
  }
  // ChangeMessage() {
  //   this.setState({ message: 'Bye' });
  // }
  ChangeMessage = () => {
    this.setState({ message: 'Bye' });
  };
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.ChangeMessage.bind(this)}>Event Handling</button> */}
        {/* <button onClick={() => this.ChangeMessage()}>Event Handling</button> */}
        <button onClick={this.ChangeMessage}>Event Handling</button>
      </div>
    );
  }
}

/* Below are the 4 different approaches of event handler
1. Binding in render.. Line #17 (Dont use because of performance implications)
2. Arrow functions in render. Line #18 (can be used if there is no need for re-rending nested components)
3. Binding in the class constructor Line #9 (its the best option right now)
4. Handler function as arrow function.(still an experimental feature)

5. usually props can be passed on from the parent component to the child component. what if we have to communicate from the child to parent. thats where we have to pass methods as props to the child component
*/
