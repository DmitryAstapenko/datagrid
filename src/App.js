import React from 'react';
import { Container } from 'react-bootstrap';

import DataGrid from './containers/dataGrid/DataGrid';

import './App.css';

const App = () => (
  <Container fluid>
    <DataGrid />
  </Container>
);

export default App;
