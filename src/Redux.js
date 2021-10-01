/* 
  We can pass down the data from parent component to the child component. if we have to pass data from child to parent, then we have to lift the state up. 
  it is ok for the lift the state up to the single component. if the data have to shared for multiple components, the we go Redux. 
  Redux is a centrailized store where we can store the state and any component can get the smae state data from the store. 
  
  import { Provider } from 'react-redux'
  import { createStore } from 'redux';

  //create and configure the store in teh index.js
  //Create a store
    const store = createStore(
     reducer,
     window.__REDUX_DEVTOOLS_EXTENSION__ && 
     window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  // render the store
  render(
     <Provider store = {store}>
        <App />
     </Provider>, document.getElementById('root')
  )
  
  //reduer funcction
  const reducer = (state = 0, action) => {
   switch (action.type) {
      case 'INCREMENT': return state + 1
      case 'DECREMENT': return state - 1
      case 'RESET' : return 0 default: return state
   }
  }
                export default reducer;

                import { connect } from 'react-redux'
              import Counter from '../component/counter'
              import { increment, decrement, reset } from '../actions';

              const mapStateToProps = (state) => {
                 return {
                    counter: state
                 };
              };
              const mapDispatchToProps = (dispatch) => {
                 return {
                    increment: () => dispatch(increment()),
                    decrement: () => dispatch(decrement()),
                    reset: () => dispatch(reset())
                 };
              };
              export default connect(mapStateToProps, mapDispatchToProps)(Counter);
*/
