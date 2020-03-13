import React, { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './GridHeader.css';

const GridHeader = ({ columns }) => (
  <Fragment>
    <Row noGutters={true} md={columns.lenght} sm={columns.lenght}>
      {columns.map( column => (
        <Col className="text-center p-1 m-1" key={column.id}>{column.name}</Col>
      ))}
    </Row>
  </Fragment>
)

GridHeader.propTypes = {
  columns: PropTypes.array,
}

export default GridHeader;
