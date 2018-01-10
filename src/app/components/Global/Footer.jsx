import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Col, Row } from 'reactstrap';

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Footer">
        <Container>
          <p className="powered">Powered by PGS</p>
        </Container>
      </div>
    );
  }
}