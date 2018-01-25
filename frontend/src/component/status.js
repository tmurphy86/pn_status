import React from "react";
import { Jumbotron} from 'react-bootstrap';
import { PanelsInstance } from './index.js';

const Status = () => (
  <div className="main-container">
    <Jumbotron>
    <div className="jumbotron">
      <h1>General Status</h1>
      <p className= 'goforgreen'>Operational</p>
      <p>
        <a className="btn btn-primary btn-lg">Learn more</a>
      </p>
    </div>
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Email</h3>
      </div>
      <div className="panel-body">Email is operational</div>
    </div>
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Authentication</h3>
      </div>
      <div className="panel-body">Authentication is operational</div>
    </div>
    </Jumbotron>
    <PanelsInstance>
    </PanelsInstance>
  </div>

);

export default Status;
