import React from "react";
import { Panel } from 'react-bootstrap';

const PanelsInstance = () => (
	<div>
		<Panel bsStyle="primary">
			<Panel.Heading>Panel heading without a title</Panel.Heading>
			<Panel.Body>Panel content</Panel.Body>
		</Panel>
		<Panel>
			<Panel.Heading>
				<Panel.Title componentClass="h3">
					Panel heading with a title
				</Panel.Title>
			</Panel.Heading>
			<Panel.Body>Panel content</Panel.Body>
		</Panel>
	</div>
);

export default PanelsInstance;
