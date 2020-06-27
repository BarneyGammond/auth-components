import React from 'react';
import './App.css';
import SignUpContainer from './Components/SignUpContainer.js'
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
  return (
    <SignUpContainer />
  );
}

export default App;
