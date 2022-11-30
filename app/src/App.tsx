import React from 'react';
import logo from './logo.svg';
import './App.css';
import Skills from './components/skills/skills';

function App() {
  return (
    <Skills items={["hacking","programming","testing"]}/>  
  );
}

export default App;
