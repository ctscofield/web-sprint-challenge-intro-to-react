import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import Characters from "./components/Characters.js"



const NumArr = ['1', '2', '3', '4', '5', '6', '7'];


const App = () => {
  const[characterData, setCharacter] = useState([]);

  function funk(number) {
    axios
      .get(`https://swapi.dev/api/people/${number}/`)
      .then((res) => {
        setCharacter(characterData =>[...characterData, res.data]);
      })
      .catch((err) => {
        console.log(err);
      })
  }
    
  useEffect(() => {
    NumArr.forEach((number) => {
      funk(number);
    });
    console.log(characterData)
  },[]);



  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Characters characterData={characterData}/>
    </div>
  );
}

export default App;
