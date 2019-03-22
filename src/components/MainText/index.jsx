import React, { Component } from 'react';
import uuid from "uuid";
import data from '../../data/book_1/chapter_1';
import Paragraph from '../Paragraph/index';

class MainText extends Component {
  state = {
   }
  render() {
    const paragraphs = data.map(paragraph => <Paragraph key={uuid.v4()} className={paragraph[0]} text={paragraph[1]} />);

    return (
      <>
        {paragraphs}
      </>
     );
  }
}

export default MainText;