import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';

function Box({src}) {
    return (
      <Col lg={4} md={12} sm={12} className="box">
        <div className="content">
          <img src={src} alt="Box image" />
          <div className="texts">
            <div className="title">Lorem ipsum</div>
            <div className="desc">Etiam ullamcorper. Suspendisse a pellentesque dui, non felis maecenas.</div>
          </div>
        </div>
      </Col>
    )
}

export default Box;
