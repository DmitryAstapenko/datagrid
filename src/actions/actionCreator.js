import { ADD_CAR } from '../constants';

export const addCar = (
  id, 
  make, 
  condition, 
  vehicleType, 
  powerEngine,
  price, 
  dateManufacture, 
  location 
) => ({
  type: ADD_CAR,
  id, 
  make, 
  condition, 
  vehicleType, 
  powerEngine,
  price, 
  dateManufacture, 
  location 
});