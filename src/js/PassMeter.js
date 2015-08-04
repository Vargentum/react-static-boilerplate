import React from "react";
import Bootstrap from "react-bootstrap";
import {Col} from "react-bootstrap";

export default class PassMeter extends React.Component {
  constructor(args) {
    super(args)
  }

  render() {
    return (
      <div>
        <Col xs={12}>1</Col>
        <Col xs={6}>2</Col>
      </div>
    )
  }
}