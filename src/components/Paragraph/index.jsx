import React, { Component } from 'react';
import './index.css';

class Paragraph extends Component {
  state = {  }
  render() {
    return (
      <p className={this.props.className}>
        {this.props.text}
      </p>
     );
  }
}

export default Paragraph;