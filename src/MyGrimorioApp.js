import React, {Component} from 'react';
import Router from './Router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import { PersistGate } from 'redux-persist/integration/react';

import firebase from 'firebase';

import rootReducer from './reducers';
import { MenuProvider } from 'react-native-popup-menu';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

export class MyGrimorioApp extends Component {

    componentDidMount() {
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
       return (
            <Provider store={store} >
                <MenuProvider>
                    <Router />    
                </MenuProvider>
            </Provider>
      );
   }
}

export default MyGrimorioApp;