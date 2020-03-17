import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { sortDecrease, sortIncrease, deleteCars, checkCar, filterCars } from '../../actions/actionCreator';

import DataGridTitle from '../../components/dataGridTitle/DataGridTitle';
import DataGridTable from '../../components/dataGridTable/DataGridTable';

import './DataGrid.css';

const DataGrid = ({ cars, sortDecrease, sortIncrease, deleteCars, checkCar, filterCars }) => {
  return (
    <Fragment>
      <DataGridTitle title="Car list" />        
      <DataGridTable 
        cars={cars}
        sortDecrease={sortDecrease} 
        sortIncrease={sortIncrease}          
        deleteCars={deleteCars}          
        checkCar={checkCar}
        filterCars={filterCars}
      />
    </Fragment>
  );
} 

export default connect(state => ({
  cars: state.cars,
}), { sortDecrease, sortIncrease, deleteCars, checkCar, filterCars })(DataGrid);