import React, { Component, Fragment } from 'react';

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

const CARS = [
  {
    id: 1,
    make: 'Mercedes',
    condition: true,
    vehicleType: 'Saloon',
    powerEngine: 235,    
    price: { currency: '$', amount: 34000},
    dateManufacture: '20-10-2019',
    location: 'Berlin',
  },
  {
    id: 2,
    make: 'Mercedes',
    condition: true,
    vehicleType: 'Estate car',
    powerEngine: 190,    
    price: { currency: '$', amount: 55000},
    dateManufacture: '22-01-2020',
    location: 'Minsk',
  },
  {
    id: 3,
    make: 'BMW',
    condition: false,
    vehicleType: 'Coupe',
    powerEngine: 420,    
    price: { currency: '$', amount: 120000},
    dateManufacture: '02-08-2018',
    location: 'London',
  },
  {
    id: 4,
    make: 'Land Rover',
    condition: true,
    vehicleType: 'SUV',
    powerEngine: 356,    
    price: { currency: '$', amount: 157000},
    dateManufacture: '13-11-2019',
    location: 'Paris',
  },
  {
    id: 5,
    make: 'Mercedes',
    condition: true,
    vehicleType: 'Saloon',
    powerEngine: 555,    
    price: { currency: '$', amount: 235000},
    dateManufacture: '24-11-2019',
    location: 'Berlin',
  },
];

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