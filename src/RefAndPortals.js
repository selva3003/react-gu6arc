/*
REF
  1. If the react compoenent has to interact with the DOM , then we can make use of CreateRef. For example focusing the input field on page load. 
      a. this. inputRef = React.CreateRef() - in the constructor.
      b. <input ref={this.inputRef} o /> - in the render method. 
      c. ths.inputReft.Current.focus() - in the componentDidMount life cycle method. 
      
   2. Similarly, we can forward refs from the parent to one of the child compoenent. So that we can call child function from the parent. 
PORTALS
  1. As we know react controls tthe components that are within the root div. in case we have to add compoents to the non-root div tag, the we can use CreatePortals. 
  ReactDom.CreatePort(jsx ele, doument.getElementByid('non-reoot')
*/
