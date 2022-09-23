import React from 'react';
import Register from './components/Forms/Cadastro/Register.js';
import Login from './components/Forms/Login/Login.js';
import './App.css';
import History from './components/History/History.js';



function App() {

  return (
    <div className="App">
      <h1>Dictionary</h1>
      {/* <Register />
      <Login /> */}
      <History />
    </div>
  );
}

export default App;
