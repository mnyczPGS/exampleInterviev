import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Alerts from './components/Alerts';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Alerts alertOptions={this.props.alertVisible} />
          <Header />
          <Main />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
function mapStateToProps(state) {
  return {
    alertVisible: state.alertReducer
  };
}
export default connect(mapStateToProps)(App);