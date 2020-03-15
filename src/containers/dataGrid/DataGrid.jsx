import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { sortDecrease, sortIncrease } from '../../actions/actionCreator';

import DataGridTitle from '../../components/dataGridTitle/DataGridTitle';
import DataGridTable from '../../components/dataGridTable/DataGridTable';

import data from '../../data.json'

import './DataGrid.css';

const COLUMNS = data.columns;

class DataGrid extends Component {
  render() {
    const columns = COLUMNS;
    const { cars, sortDecrease, sortIncrease } = this.props;

    return (
      <Fragment>
        <DataGridTitle title="Car list" />        
        <DataGridTable 
          sortDecrease={sortDecrease} 
          sortIncrease={sortIncrease}
          columns={columns} 
          cars={cars}
        />
      </Fragment>
    );
  } 
} 

export default connect(state => ({
  cars: state.cars,
}), { sortDecrease, sortIncrease })(DataGrid);