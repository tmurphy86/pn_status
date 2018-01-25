import React from "react";
import {Jumbotron, Panel, Row, Col, Grid} from 'react-bootstrap';

const Status = () => (
  // <Grid>
  //    <Row className="show-grid">
  //        <Col xs={1} md={2}></Col>
  //        <Col xs={8} md={8}>


  <Panel className="center-block">
        <h1 className="text-center">General Status</h1>
        <Panel bsStyle="primary">
          <Panel.Heading >Organizational Updates</Panel.Heading>
          <Panel.Body>
            At 5PM EST 1/26/2018 PN will cut over from ADFS to AzureAD. Please refrain from using the system at that time unless you are asked to verify by IT.
          </Panel.Body>
        </Panel>
  </Panel>
//   </Col>
// <Col xs={1} md={2}></Col>
// </Row>
// </Grid>
);

export default Status;
