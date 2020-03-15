import { SORT_DECREASE, SORT_INCREASE } from '../constants';
import data from '../data.json'

const CARS = data.cars; 

const cars = (state = CARS, { type, key }) => {
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
    default:
      return state;
  }
}

export default cars;