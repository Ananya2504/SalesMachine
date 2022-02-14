import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/Profile';
import Options from './components/Options';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='main'>
        <Profile />
        <Options />
      </div>
    </div>
  );
}

export default App;
