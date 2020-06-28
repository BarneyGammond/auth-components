import React, { useState } from 'react';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { BrowserRouter as Router, Route } from 'react-router-dom'

//Styling
import './App.css';

//Components
import SignUpContainer from './Components/SignUpContainer.js'
import ConfirmationContainer from './Components/ConfirmationContainer'
import SignInContainer from './Components/SignInContainer'
import LoggedInPage from './Components/LoggedInPage'


Amplify.configure(awsconfig);

function App() {

    const [username, setUsername] = useState('')

    return (
        <Router>
            <Route exact path='/'>
                <LoggedInPage />
            </Route>
            <Route path='/signup'>
                <SignUpContainer
                    setUsername={setUsername}
                />
            </Route>
            <Route path='/confirmation'>
                <ConfirmationContainer
                    username={username}
                />
            </Route>
            <Route path='/signin'>
                <SignInContainer />
            </Route>
        </Router>
    );
}

export default App;
