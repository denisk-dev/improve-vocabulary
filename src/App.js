import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar'
import Main from './components/main'
import Practice from './components/practice'

import {VocabularyContextProvider} from './context/VocabContext'

function App() {
  return (

    <VocabularyContextProvider>
    <Router>
    
    <Navbar />
    <br />
     <Route path="/" exact component={Main} />
      <Route path="/practice"  component={Practice} /> 
    
    </Router>
    </VocabularyContextProvider>


  );
}

export default App;
