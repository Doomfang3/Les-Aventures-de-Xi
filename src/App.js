import React, { Component } from 'react';
import './App.css';
import MainText from './components/MainText';

class App extends Component {
  render() {
    return (
      <body>
      <header>
        <nav class="navContainer">
        <div></div>
        <div class="navlink"><a href="#home">Home</a></div>
        <div class="navlink"><a href="#illus">Illustrations</a></div>
        <div class="navlink"><a href="#dl">Téléchargements</a></div>
        <div class="navlink"><a href="#contacts">Contacts</a></div>
        <div></div>
        </nav>
      </header>

      <div class="container">
        <div></div>
          <MainText />
        <div></div>
      </div>
      <footer></footer>
      </body>
    );
  }
}

export default App;
