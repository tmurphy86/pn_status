import React from "react";
import { ListGroup, ListGroupItem} from 'react-bootstrap';

const Guide = () => (
<div>

<ListGroup>
<ListGroupItem>Status Key:</ListGroupItem>
<ListGroupItem bsStyle="success">Operational</ListGroupItem>
<ListGroupItem bsStyle="info">Info</ListGroupItem>
<ListGroupItem bsStyle="warning">Degregated Service</ListGroupItem>
<ListGroupItem bsStyle="danger">Outage</ListGroupItem>
</ListGroup>
</div>
);

export default Guide;
