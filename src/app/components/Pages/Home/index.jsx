import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Col, Row } from 'reactstrap';
import { showAlert } from '../../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Box from './Box'

import image1 from './../../../../assets/mainPage/box1.jpg';
import image2 from './../../../../assets/mainPage/box2.jpg';
import image3 from './../../../../assets/mainPage/box3.jpg';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='Home'>
          <Row>
            <Box src={image1}/>
            <Box src={image2}/>
            <Box src={image3}/>
          </Row>
      </div>
    );
  }
}
