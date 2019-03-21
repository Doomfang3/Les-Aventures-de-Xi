import React, { Component } from 'react';
import data from '../data/book_1/chapter_1';
import Paragraph from './Paragraph';

class MainText extends Component {
  state = {
   }
  render() {
    const paragraphs = data.map(paragraph => <Paragraph className={paragraph[0]} text={paragraph[1]} />);

    return (
      <section>
        {paragraphs}
      </section>
     );
  }
}

export default MainText;