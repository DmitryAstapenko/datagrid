import { ADD_CAR } from '../constants';
import data from '../data.json'

const CARS = data.cars; 

const cars = (state = CARS, { 
  id, 
  make, 
  condition, 
  vehicleType, 
  powerEngine,
  price, 
  dateManufacture, 
  location, 
  type 
}) => {
  switch (type) {
    case ADD_CAR :
      return [
        ...state, {
          id,
          make,
          condition,
          vehicleType,
          powerEngine,
          price,
          dateManufacture,
          location
        }
      ];
    default:
      return state;
  }
}

export default cars;