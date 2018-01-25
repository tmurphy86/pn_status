import React from "react";
import { Panel, Row, Col, Grid } from 'react-bootstrap';
import {Guide} from './index.js';

const PanelsInstance = () => (
	<div>
	<Grid>
  <Row className="show-grid">
		<Panel bsStyle="primary">
			<Panel.Heading>IT Operations</Panel.Heading>
		</Panel>
	</Row>
	<Row>
    <Col xs={12} md={8}>
			<Panel bsStyle="success">
				<Panel.Heading>Email</Panel.Heading>
				<Panel.Body>No known issues</Panel.Body>
				<Panel.Heading>Authentication</Panel.Heading>
				<Panel.Body>No known issues</Panel.Body>
				<Panel.Heading>SharePoint</Panel.Heading>
				<Panel.Body>No known issues</Panel.Body>
				<Panel.Heading>GotoMeeting</Panel.Heading>
				<Panel.Body>No known issues</Panel.Body>
			</Panel>

    </Col>
    <Col xs={6} md={4}>
      <Guide></Guide>
    </Col>
  </Row>
	</Grid>
	</div>
);

export default PanelsInstance;
