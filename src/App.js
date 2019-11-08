import React from 'react';

import './App.scss';
import { Button,Breadcrumb,Dropdown } from 'react-bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './scss/custom.scss';


function App() {
  return (
    <>
    <div className="App">
     <Button variant="outline-primary">Primary</Button>
    <Button variant="outline-secondary">Secondary</Button>
    <Button variant="outline-success">Success</Button>
    <Button variant="outline-warning">Warning</Button>
    <Button variant="outline-danger">Danger</Button>
    <Button variant="outline-info">Info</Button>
    <Button variant="outline-light">Light</Button>
    <Button variant="outline-dark">Dark</Button>
    </div>
    <div>

<Breadcrumb className="breadcrumb1"> 
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>

<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    </div>
    </>
  );
}

export default App;
