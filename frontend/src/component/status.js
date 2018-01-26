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
            Authentication is down as of 5PM EST, this will stop email and access to SharePoint. We will update as the progress is made.
          </Panel.Body>
        </Panel>
  </Panel>
//   </Col>
// <Col xs={1} md={2}></Col>
// </Row>
// </Grid>
);

export default Status;
