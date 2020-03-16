import { SORT_DECREASE, SORT_INCREASE, DELETE_CARS, CHECK_CAR } from '../constants';
import data from '../data.json'

const CARS = data.cars; 

const cars = (state = CARS, { type, key, id }) => {
  const compare = (p, n) => { 
    const prev = key === "price" ? p.amount : p;
    const next = key === "price" ? n.amount : n;    
    if (prev > next) {
      return -1; 
    } else if (prev < next) { 
      return 1;
    } else return 0;
  }; 

  switch (type) {
    case SORT_DECREASE :
      return [ ...state ].sort((prev, next) => compare(prev[key], next[key]));
    case SORT_INCREASE :
      return [ ...state ].sort((prev, next) => compare(next[key], prev[key]));
    case DELETE_CARS :      
      return [ ...state ].filter(car => !car.isChecked);      
    case CHECK_CAR :      
      return [ ...state ].map(car => { 
        if (car.id === id) {
          car.isChecked = !car.isChecked; 
        }
        return car;
      });
    default:
      return state;
  }
}

export default cars;