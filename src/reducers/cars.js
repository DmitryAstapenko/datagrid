import { SORT_DECREASE, SORT_INCREASE } from '../constants';
import data from '../data.json'

const CARS = data.cars; 

const cars = (state = CARS, { type, key }) => {
  switch (type) {
    case SORT_DECREASE :
      return [ ...state ].sort( function (prev, next) {
        if (prev[key] > next[key]) return -1;
        if (prev[key] < next[key]) return 1;        
        return 0;
      });
    case SORT_INCREASE :
      return [ ...state ].sort( function (prev, next) {
        if (prev[key] > next[key]) return 1;
        if (prev[key] < next[key]) return -1;        
        return 0;
      });
    default:
      return state;
  }
}

export default cars;