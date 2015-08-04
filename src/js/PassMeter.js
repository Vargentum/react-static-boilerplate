import React from "react";
import Bootstrap from "react-bootstrap";
import {Col} from "react-bootstrap";
import classNames from "classNames";



export default class PassMeter extends React.Component {
  constructor(args) {
    super(args)
  }

  render() {
    let cls = classNames(
      'foo',
      {
        bar: true
      }
    )

    return (
      <div>
        {cls}
        <Col xs={12}>1</Col>
        <Col xs={6}>2</Col>
      </div>
    )
  }
}