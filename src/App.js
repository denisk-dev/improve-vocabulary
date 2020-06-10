/**
 * author: Denis Kravchenko
 */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/navbar";
import Main from "./components/MainPage/main";
import Practice from "./components/Quiz/practice";

import { VocabularyContextProvider } from "./context/VocabContext";

function App() {
  return (
    <VocabularyContextProvider>
      <Router>
        <Navbar />
        <br />
        <Route path="/" exact component={Main} />
        <Route path="/practice" component={Practice} />
      </Router>
    </VocabularyContextProvider>
  );
}

export default App;
