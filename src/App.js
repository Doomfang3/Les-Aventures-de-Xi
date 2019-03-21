import React, { Component } from 'react';
import './App.css';
import MainText from './components/MainText';

class App extends Component {
  render() {
    return (
      <>
      <header>
        <nav className="navContainer">
        <div></div>
        <div className="navlink"><a href="#home">Home</a></div>
        <div className="navlink"><a href="#illus">Illustrations</a></div>
        <div className="navlink"><a href="#dl">Téléchargements</a></div>
        <div className="navlink"><a href="#contacts">Contacts</a></div>
        <div></div>
        </nav>
      </header>

      <div className="container">
        <div></div>
        <MainText />
        <div></div>
      </div>
      <footer></footer>
      </>
    );
  }
}

export default App;
