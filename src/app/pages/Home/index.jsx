import React from 'react';
import { Row } from 'reactstrap';
import Box from './Box'

import image1 from './../../../assets/mainPage/box1.jpg';
import image2 from './../../../assets/mainPage/box2.jpg';
import image3 from './../../../assets/mainPage/box3.jpg';

function Home() {
  return (
    <div className='Home'>
      <Row>
        <Box src={image1} />
        <Box src={image2} />
        <Box src={image3} />
      </Row>
    </div>
  );
}

export default Home;
