import React, { Component, Fragment } from 'react';

import GridTitle from '../../components/gridTitle/GridTitle';
import GridHeader from '../../components/gridHeader/GridHeader';
import GridRow from '../../components/gridRow/GridRow';

import data from '../../data.json'
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

const CARS = data.cars;

class Grid extends Component {
  render() {
    return (
      <Fragment>
        <GridTitle title="Car list" />
        <GridHeader columns={COLUMNS} />
        <GridRow cars={CARS} />
      </Fragment>
    );
  } 
} 

export default Grid;