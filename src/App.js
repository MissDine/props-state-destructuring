import React from 'react'; 
import './App.css';
import Greetings from './components/Greetings';
import Age from './components/Age';

function App() {
  return (
    <>
      <Greetings name ="Dine"/>
      <Age age ="You are 16 years old."/>
    </>
  );
}

export default App;
