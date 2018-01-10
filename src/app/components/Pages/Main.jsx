import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Home from './Home';
import Contact from './Contact';
import Skicams from './Skicams';
import { Button, Container, Col, Row } from 'reactstrap';

export default class Main extends Component {
  render() {
    return (
      <main className="Content">
        <Container>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/skicams' component={Skicams} />
          </Switch>
        </Container>
      </main>
    );
  }
}