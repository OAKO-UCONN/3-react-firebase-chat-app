//import logo from './logo.svg';
import './App.css';

//Import Config file
import apiKeysAndVars from './apiKeysAndVars'

//Firebase Imports
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//Import hooks
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


firebase.initializeApp({

})


//Reference to auth and firestore as Global Variables.
const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;

/*
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
*/