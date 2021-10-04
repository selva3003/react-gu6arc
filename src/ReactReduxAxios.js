/*
  1. Create a reactApp "npx create-react-app {appName}"
  2. install axios for the http request calls. 
  3. npm install redux react-redux redux-thunk redux-devtools-extension --save
  4. create actionTypes
  5. create action creators for the action types. 
  6. create reducers js which will hold the initial state. then create a reducer funtion which will
    accept state and action as parameters.
  7. store.js
 
      import {createStore, applyMiddleware} from 'reducx'
      import {createStore, applyMiddleware} from 'redux'
    import thunk from 'redux-thunk'
    import {composeWithDevTools} from 'redux-devtools-extension'

    import reducers from './reducers'

    const intialState = {
        loading : false,
        users :[],
        error:null
    }

    const middleware = [thunk]

    const store = createStore(rootReducer, initalState, composeWithDevTools(applyMiddleware(...middleware)))

    export default store;
    */
