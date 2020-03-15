import React from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './DataGridTable.css';

function DataGridTable({ cars, columns, sortDecrease, sortIncrease }) {      
  return (
    <Table responsive striped bordered hover size="sm">
      <thead>
        <tr>{columns.map((column, index) =>(
          <th key={index}>            
              {column.name}
              <Button size="sm" onClick={() => sortDecrease(column.key)}>/\</Button>
              <Button size="sm" onClick={() => sortIncrease(column.key)}>\/</Button>
          </th>
        ))}</tr>
      </thead>
      <tbody>
        {cars.map(car => (
          <tr key={car.id}>            
            <td>{car.id}</td>
            <td>{car.make}</td>
            <td>
              <Form.Check checked={car.condition} readOnly />
            </td>
            <td>{car.vehicleType}</td>
            <td>{car.powerEngine}</td>
            <td>
              {`${car.price.currency} ${car.price.amount}`}
            </td>
            <td>{car.dateManufacture}</td>
            <td>{car.location}</td>
          </tr>
        ))}        
      </tbody>
    </Table>    
  );  
};

DataGridTable.propTypes = {
  cars: PropTypes.array,
  columns: PropTypes.array,  
  sortDecrease: PropTypes.func, 
  sortIncrease: PropTypes.func 
}

DataGridTable.defaultProps = {
  cars: [],
  columns: [],
  sortDecrease: () => {},
  sortIncrease: () => {}
}

export default DataGridTable;
