import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { addCar } from '../../actions/actionCreator';

import GridTitle from '../../components/gridTitle/GridTitle';
import GridHeader from '../../components/gridHeader/GridHeader';
import GridRow from '../../components/gridRow/GridRow';

import './Grid.css';

const COLUMNS = [
  { id: 1, name: "Number"},
  { id: 2, name: "Make"},
  { id: 3, name: "Condition"},
  { id: 4, name: "Vehicle Type"},
  { id: 5, name: "Power Engine"},
  { id: 6, name: "Price"},
  { id: 7, name: "Date Manufacture"},
  { id: 8, name: "Location"},
];

class Grid extends Component {
  render() {
    const columns = COLUMNS;
    const { cars } = this.props;

    return (
      <Fragment>
        <GridTitle title="Car list" />
        <GridHeader columns={columns} />
        <GridRow cars={cars}/>
      </Fragment>
    );
  } 
} 

export default connect(state => ({
  cars: state.cars,
}), { addCar })(Grid);