import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { sortDecrease, sortIncrease } from '../../actions/actionCreator';

import DataGridTitle from '../../components/dataGridTitle/DataGridTitle';
import DataGridTable from '../../components/dataGridTable/DataGridTable';

import './DataGrid.css';

class DataGrid extends Component {
  render() {
    const { cars, sortDecrease, sortIncrease } = this.props;

    return (
      <Fragment>
        <DataGridTitle title="Car list" />        
        <DataGridTable 
          sortDecrease={sortDecrease} 
          sortIncrease={sortIncrease}          
          cars={cars}
        />
      </Fragment>
    );
  } 
} 

export default connect(state => ({
  cars: state.cars,
}), { sortDecrease, sortIncrease })(DataGrid);