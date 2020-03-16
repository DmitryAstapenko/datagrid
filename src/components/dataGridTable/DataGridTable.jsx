import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import sortAmountDownAlt from '@iconify/icons-fa-solid/sort-amount-down-alt';
import sortAmountDown from '@iconify/icons-fa-solid/sort-amount-down';

import data from '../../data.json'

import './DataGridTable.css';

const COLUMNS = data.columns;

function DataGridTable({ cars, sortDecrease, sortIncrease }) {     
  const columns = COLUMNS;
  const iconDefault = 'icon-sort';
  const iconActive = 'icon-sort-active';
  const [sortedColumn, setSortedKey] = useState({
    columnKey: "",
    increaseCN: iconDefault,
    decreaseCN: iconDefault
  });   

  function handleClickSortIncs(key) {
    sortIncrease(key);
    setSortedKey({ 
      columnKey: key, 
      increaseCN: iconActive, 
      decreaseCN: iconDefault
    })
  }

  function handleClickSortDecs(key) {
    sortDecrease(key);
    setSortedKey({ 
      columnKey: key, 
      increaseCN: iconDefault, 
      decreaseCN: iconActive
    })
  }

  return (
    <Table responsive striped bordered hover size="sm">
      <thead>
        <tr>
          <th className="text-center">#</th>
          {columns.map(column => {
            const iconIncsCN = sortedColumn.columnKey === column.key ? sortedColumn.increaseCN : iconDefault;
            const iconDecsCN = sortedColumn.columnKey === column.key ? sortedColumn.decreaseCN : iconDefault;
            return (
              <th>                        
                {column.name}
                <Icon 
                  className={`${iconIncsCN} ml-2`} 
                  onClick={() => handleClickSortIncs(column.key)} 
                  icon={sortAmountDownAlt} 
                />
                <Icon 
                  className={`${iconDecsCN} ml-1`} 
                  onClick={() => handleClickSortDecs(column.key)} 
                  icon={sortAmountDown} 
                />
              </th>
            );
          })}
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
  sortDecrease: PropTypes.func, 
  sortIncrease: PropTypes.func 
}

DataGridTable.defaultProps = {
  cars: [],  
  sortDecrease: () => {},
  sortIncrease: () => {}
}

export default DataGridTable;
