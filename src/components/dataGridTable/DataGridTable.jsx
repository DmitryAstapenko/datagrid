import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import sortAmountDownAlt from '@iconify/icons-fa-solid/sort-amount-down-alt';
import sortAmountDown from '@iconify/icons-fa-solid/sort-amount-down';

import './DataGridTable.css';

function DataGridTable({ cars, columns, sortDecrease, sortIncrease }) {      
  return (
    <Table responsive striped bordered hover size="sm">
      <thead>
        <tr>
          <th className="text-center">#</th>
          {columns.map(column => (
            <th>                        
              {column.name}
              <Icon className="icon-sort ml-2" onClick={() => sortIncrease(column.key)} icon={sortAmountDownAlt} />
              <Icon className="icon-sort ml-1" onClick={() => sortDecrease(column.key)} icon={sortAmountDown} />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {cars.map((car, index) => (
          <tr key={index}>
            <td className="text-center">{index + 1}</td>            
            <td>{car.make}</td>
            <td className="text-center">
              {car.condition ? "new" : "with mileage"}
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
