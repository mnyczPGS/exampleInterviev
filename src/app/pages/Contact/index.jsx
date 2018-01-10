import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Container, Col, Row } from 'reactstrap';
import { showAlert } from '../../services/actions';

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      mail: '',
      message: '',
      validate: {
        name: true,
        mail: true
      }
    }

    this.validate = this.validate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validate() {
    let validate = {};
    let alertText = '';
    let isDanger = false;
    if (this.state.name.length < 3) {
      validate.name = false;
      alertText += 'Field "Name" must be longer than 3 signs. ';
    } else {
      validate.name = true;
    }

    
    if (regex.test(this.state.mail)) {
      validate.mail = true;
    } else {
      alertText += 'Field "Mail" must be a valid mail address. ';
      validate.mail = false;
    }
    
    isDanger = !(validate.name && validate.mail);

    this.props.showAlert(alertText.length == 0 ? 'Form is validate' : alertText, isDanger ? 'danger' : 'success')
    this.setState({ validate })
  }

  handleChange({ target }) {
    let text = target.value;
    this.setState({ [`${target.id}`]: text })
  }

  render() {
    return (
      <div className='Contact'>
        <div className="content">
          <form onChange={this.handleChange} noValidate>
            <label className={!this.state.validate.name ? ' not-validate' : ''}>Name<div className="red">*</div>:</label>
            <input className={!this.state.validate.name ? ' not-validate' : ''} id="name" type="text" />
            <br />
            <label className={!this.state.validate.mail ? ' not-validate' : ''}>Email<div className="red">*</div>:</label>
            <input className={!this.state.validate.mail ? ' not-validate' : ''} type="email" name="mail" id="mail" />
            <br />
            <label>Message:</label>
            <input id="message" type="text"></input>
            <br />
            <Button color="primary" className="submit" onClick={this.validate}>SEND</Button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  showAlert
}

export default connect(null, mapDispatchToProps)(Home)