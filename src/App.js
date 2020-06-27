import React, {useState} from 'react';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { BrowserRouter as Router, Route } from 'react-router-dom'

//Styling
import './App.css';

//Components
import SignUpContainer from './Components/SignUpContainer.js'
import ConfirmationContainer from  './Components/ConfirmationContainer'


Amplify.configure(awsconfig);

function App() {

  const [username,setUsername] = useState('')

  return (
    <Router>
      <Route path='/signup'>
        <SignUpContainer 
          setUsername={setUsername}
        />
      </Route>
      <Route path='/confirmation'>
        <ConfirmationContainer />
      </Route>
    </Router>
  );
}

export default App;
