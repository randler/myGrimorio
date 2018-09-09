import React from 'react';
import Router from './Router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';

import firebase from 'firebase';

import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(reduxThunk)
));

class MyGrimorioApp extends React.Component {

    componentWillMount() {
        // Initialize Firebase
       const config = {
           apiKey: "AIzaSyDH2HsnWKEiGUDgmD0Bb8-uS4DSf5L-fAo",
           authDomain: "mygrimorio.firebaseapp.com",
           databaseURL: "https://mygrimorio.firebaseio.com",
           projectId: "mygrimorio",
           storageBucket: "mygrimorio.appspot.com",
           messagingSenderId: "645050801754"
       };
       firebase.initializeApp(config);
   }

   render() {
       return(
        <Provider store={store} >
            <Router />
        </Provider>
      );
   }
}

export default MyGrimorioApp;
