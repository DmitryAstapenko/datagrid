import React, { useState, Fragment } from 'react';
import { Table, OverlayTrigger, Tooltip, Form, Row, Col, InputGroup, FormControl, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import sortAmountDownAlt from '@iconify/icons-fa-solid/sort-amount-down-alt';
import sortAmountDown from '@iconify/icons-fa-solid/sort-amount-down';
import deleteForeverOutline from '@iconify/icons-mdi/delete-forever-outline';

import data from '../../data.json'

import './DataGridTable.css';

function DataGridTable({ cars, sortDecrease, sortIncrease, deleteCars, checkCar, filterCars }) {       
  const iconDefault = 'icon';
  const iconActive = 'icon-sort-active';  

  const [columns, setColumns] = useState(data.columns);
  const [sortedColumn, setSortedKey] = useState({
    columnKey: "",
    increaseCN: iconDefault,
    decreaseCN: iconDefault
  });   

  function handleClickSortIncs(key) {
    sortIncrease(key);
    setSortedKey({ columnKey: key, increaseCN: iconActive, decreaseCN: iconDefault });
  }

  function handleClickSortDecs(key) {
    sortDecrease(key);
    setSortedKey({ columnKey: key, increaseCN: iconDefault, decreaseCN: iconActive });
  }
  
  function handleFilterCars(value) {
    setSortedKey({ columnKey: "", increaseCN: iconDefault, decreaseCN: iconDefault });
    filterCars(value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {       
      handleFilterCars(event.target.value);
    }    
  }

  function handleBlur(event) {
    handleFilterCars(event.target.value);
  }

  return (
    <Fragment>      
      <Row>
        <Col xl={3} lg={3} md={6} sm={12} xs={12} >        
          <InputGroup size="sm" className="mb-2 mt-2">
            <InputGroup.Prepend>
              <InputGroup.Text>Search</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl 
              placeholder="Enter text and press 'Enter'" 
              onBlur={(event) => handleBlur(event)}
              onKeyDown={(event) => handleKeyDown(event)}
            />
          </InputGroup>
        </Col>
        <Col xl={3} lg={3} md={6} sm={12} xs={12}>          
          <ToggleButtonGroup type="checkbox" size="sm" className="mb-2 mt-2">
            {columns.map(column => (
              <ToggleButton>{column.name}</ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Col>
      </Row>
      <Table responsive striped bordered hover size="sm">
        <thead>
          <tr>
            <th className="text-center">#</th>
            {columns.map((column, index) => {              
              const iconIncsCN = sortedColumn.columnKey === column.key ? sortedColumn.increaseCN : iconDefault;
              const iconDecsCN = sortedColumn.columnKey === column.key ? sortedColumn.decreaseCN : iconDefault;
              return (
                column.visible ? 
                <th key={index}>                        
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
                </th> : null              
              );
            })}          
            <th className="text-center">
              <OverlayTrigger placement="left" overlay={<Tooltip>Delete selected cars</Tooltip>}>
                <Icon 
                  className="icon" 
                  width="24" 
                  height="24" 
                  icon={deleteForeverOutline}
                  onClick={() => deleteCars()}
                />
              </OverlayTrigger>              
            </th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => (
            <tr key={index} className={car.isChecked ? "row-checked" : null}>
              <td className="text-center">{index + 1}</td>
              { columns[0].visible ? <td>{car.make}</td> : null }
              { columns[1].visible ? <td className="text-center">{car.condition ? "new" : "with mileage"}</td> : null }
              { columns[2].visible ? <td>{car.vehicleType}</td> : null }
              { columns[3].visible ? <td>{car.powerEngine}</td> : null }
              { columns[4].visible ? <td>{`${car.price.currency} ${car.price.amount}`}</td> : null }
              { columns[5].visible ? <td>{car.dateManufacture}</td> : null }
              { columns[6].visible ? <td>{car.location}</td> : null }
              <td className="text-center"><Form.Check checked={car.isChecked} onChange={() => checkCar(car.id)} /></td>
            </tr>
          ))}        
        </tbody>
      </Table>    
    </Fragment>    
  );  
};

DataGridTable.propTypes = {
  cars: PropTypes.array,  
  sortDecrease: PropTypes.func, 
  sortIncrease: PropTypes.func,
  deleteCars: PropTypes.func, 
  checkCar: PropTypes.func,
  filterCars: PropTypes.func
}

DataGridTable.defaultProps = {
  cars: [],  
  sortDecrease: () => {},
  sortIncrease: () => {},
  deleteCars: () => {},
  checkCar: () => {},
  filterCars: () => {}
}

export default DataGridTable;
