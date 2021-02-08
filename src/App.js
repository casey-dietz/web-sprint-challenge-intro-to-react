import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characterInfo, setCharacterInfo] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
      axios.get('https://swapi.dev/api/people/')
      .then(res => {
        setCharacterInfo(res.data)
      })
      .catch(err => {
        console.log(err)
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      {characterInfo.map(detail => {
        // console.log(detail.url)
        return <Character detail={detail} key={detail.url}/>
      }
       
      )}
    </div>
  );
}

export default App;
