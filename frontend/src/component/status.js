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
Cutover work has been completed at this time. You should do the following to resume operations:
Login to your computer as you did this morning
Update your credential to @prosperitynow.org in email, skype, sharepoint, onedrive, etc)
If you experience issues- use the following guide to solve authentication problems: https://prosperitynow.freshdesk.com/support/solutions/articles/36000008980-name-switch-login-issues
Recreate standing Skype meetings with your "new" username ( Weird I know but required based on the way Microsoft built their links)
Submit a ticket if you are still experiencing issues logging in (*After following bullet 3!*)
          </Panel.Body>
        </Panel>
  </Panel>
//   </Col>
// <Col xs={1} md={2}></Col>
// </Row>
// </Grid>
);

export default Status;
