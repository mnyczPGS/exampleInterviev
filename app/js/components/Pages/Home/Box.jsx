import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col } from 'reactstrap';

export class Box extends Component {


  render() {
    return (
      <Col lg={4} md={12} sm={12} className="box">
        <div className="content">
          <img src={this.props.src} alt="Box image" />
          <div className="texts">
            <div className="title">Lorem ipsum</div>
            <div className="desc">Etiam ullamcorper. Suspendisse a pellentesque dui, non felis maecenas.</div>
          </div>
        </div>
      </Col>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Box)
