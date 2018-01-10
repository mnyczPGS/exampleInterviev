import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';
import Cam from './Cam';

export default class Skicams extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cams: []
    }

    this.getData = this.getData.bind(this);
    this.setData = this.setData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    let url = 'https://makevoid-skicams.p.mashape.com/cams.json';
    let myHeaders = new Headers();
    myHeaders.append("X-Mashape-Authorization", "kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw");
    let fetchData = { headers: myHeaders }

    fetch(url, fetchData).then((res) => {
      if (res.status == 401) {
        console.err('Error')
      } else {
        return res.json();
      }
    }).then((data) => {
      this.setData(data);
    });
  }

  setData(data) {
    let cams = [];
    let count = Object.keys(data).length;
    let countImg = 1;

    for (let i = 0; i < count; i++) {
      let countCam = 2;
      if (data[i] != null) {
        if (data[i].name == 'Andalo' || data[i].name == 'Monte Bondone') {
          let array = [];
          let name = "";

          for (let j = 0; j < countCam; j++) {
            if (data[i].cams[j] != null) {
              name = data[i].name;
              array.push(data[i].cams[j].url);
              countImg++;
            } else {
              countCam++;
            }
          }

          cams.push({ name, array })
        }
      } else {
        count++;
      }
      
      this.setState({ cams });
    }
  }

  render() {
    return (
      <Row className="Skicams">
        {
          this.state.cams.map((cam, index) => {
            return (
              <Cam key={index} cam={cam}></Cam>
            )
          })
        }
      </Row>
    )
  }
}
