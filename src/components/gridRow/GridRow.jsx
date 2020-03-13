import React, { Fragment } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './GridRow.css';

function GridRow({ cars }) {    
  const properties = Object.getOwnPropertyNames(cars[0]);
  return (
    <Fragment>
      {cars.map( car => (
        <Row key={car.id} noGutters={true} md={properties.lenght} sm={properties.lenght}>
          <Col className="text-center p-1 m-1">{car.id}</Col>              
          <Col className="text-center p-1 m-1">{car.make}</Col>              
          <Col className="text-center p-1 m-1">
            <Form.Check checked={car.condition} readOnly />
          </Col>              
          <Col className="text-center p-1 m-1">{car.vehicleType}</Col>                        
          <Col className="text-center p-1 m-1">{car.powerEngine}</Col>              
          <Col className="text-center p-1 m-1">
            {`${car.price.currency} ${car.price.amount}`}
          </Col>              
          <Col className="text-center p-1 m-1">{car.dateManufacture}</Col>              
          <Col className="text-center p-1 m-1">{car.location}</Col>              
        </Row>
      ))}
    </Fragment>
  );  
};

GridRow.propTypes = {
  cars: PropTypes.array,
}

export default GridRow;
