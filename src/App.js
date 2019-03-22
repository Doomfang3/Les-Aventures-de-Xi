import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import './App.css';
import Header from './components/Header/index';
import MainText from './components/MainText/index';
import Footer from './components/Footer/index';

class App extends Component {
  render() {
    return (
      <>
      <Header />
      <Container text style={{ marginTop: '2em', marginBottom: '7em' }}>
        <MainText />
      </Container>
      <Footer />
      </>
    );
  }
}

export default App;
