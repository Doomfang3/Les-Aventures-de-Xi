import React, { Component } from 'react';
import {Menu, Container, Image, Dropdown} from 'semantic-ui-react';
import './index.css';

class Header extends Component {
  state = {  }
  render() {
    return (
      <header>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              <Image size='mini' src='../../favicon.ico' style={{ marginRight: '1.5em' }} />
              Les Aventures de Xi
            </Menu.Item>
            <Menu.Item as='a' href='#'>Accueil</Menu.Item>
            <Menu.Item as='a' href='#'>Illustrations</Menu.Item>
            <Menu.Item as='a' href='#'>Téléchargements</Menu.Item>
            <Menu.Item as='a' href='#'>Contacts</Menu.Item>
          </Container>
        </Menu>
      </header>
     );
  }
}

export default Header;