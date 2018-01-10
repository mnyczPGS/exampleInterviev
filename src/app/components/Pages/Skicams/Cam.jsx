import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col } from 'reactstrap';

export default class Cam extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       cam: this.props.cam,
       date:''
    }

    this.parseDate = this.parseDate.bind(this);
  }

  componentDidMount(){
    this.parseDate();
  }
  
  
  parseDate(){
    let todayDate = new Date();
    let date = '';
    date += todayDate.toLocaleDateString([], { day: '2-digit'})+'-';
    date += todayDate.toLocaleDateString([], { month: '2-digit'})+'-';
    date += todayDate.toLocaleDateString([], { year: 'numeric'});
    
    this.setState({date})
  }

  render() {
    return (
      <Col md={6} sm={12}>
        <div className="cam-container">
          <div className="cam-container-top">
            <div className="title">{this.state.cam.name}</div>
            <div className="date">{this.state.date}</div>
          </div>
          <div className="cam-container-cams">
            {
              this.state.cam.array.map((cam,index)=>{
                return(
                  <div className="cam" key={index}>
                    <img src={cam} alt={'cam'+index}/>
                  </div>
                )
              })
            }
          </div>
        </div>
      </Col>
    )
  }
}
