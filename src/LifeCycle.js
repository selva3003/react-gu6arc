/*1. Mouting - Called when component is created and inserted in DOM
      a. constructor - initializing state and bind event handler
          1. dont cause sideeffects.ex HTTP requests.
          2. dont call this.SetState.
      b. static getDerivedStateFromprops(rarely used) - called when the state component depends on changes in props over time. 
          1. we can set the state.
          2. dont cause side effects ex. HTTP request. 
      c. render - only reuired method in a class. in this method we read props & state and return JSX. 
          1. Dont change state or interact with DOM or make any ajax calls. 
          2. Afer render method, the render methods of the children will get called. 
      d. ComponentDidMount - Invoked immediately after a component and all its children components have been rendered to DOM. 
          1. Perfect place to make any HTTP requests or ajax calls and interact with DOM.
2. Updation - called When the component is being re-rendered, when there is a change in state or props. 
      a. static getDerivedStateFromprops(props, state) - called everytime a component is re-rendered. 
      b. shouldComponentUpdate(nextProps,nextState) - it recieves the updated props & state. it dictates if at all the component     should re-render or not. this method can prevent the default behavior or rendering the components by returning false. 
      In this method we can compare the previous state and props with the next state and props. based on that we can decide if the component should render or not. 
      c. render
      d. getSnapShotBeforeUpdate(prevprops, prevState) - called right before the changes from the virtual DOM are to be reflected in the DOM. for example to maintian the scroll position.
      e. componentDidUpdate(prevProps,prevState,snapShot) - called after the render is finished in the re-render cycles. Here you can make HTTP requests. 
3. Unmouting - called When the component is removed from DOM
    a. componentWillUnmount - invoked immediately before a component is unmounted and destroyed. We can make any cancelling network requests, removing event handlers. Should not called setState Method. 
4. Error Handling - called when there is an error in constructor or life cycle method or rendering. 
    static getDerivedStateFromError(erpr) - used to render a fallback UI after an error is thrown. Create <Errorboundary/> component class and handle with the static method.
    componentDidCatch(error,info) - this is used to log the error information. 
 */
