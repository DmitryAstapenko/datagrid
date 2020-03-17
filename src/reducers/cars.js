import { SORT_DECREASE, SORT_INCREASE, DELETE_CARS, CHECK_CAR, FILTER_CARS } from '../constants';
import data from '../data.json'

const CARS = data.cars; 
let state = CARS;

const cars = (currentState = CARS, { type, key, id, valueFilter }) => {     
  const compare = (p, n) => { 
    const prev = key === "price" ? p.amount : p;
    const next = key === "price" ? n.amount : n;    
    if (prev > next) {
      return -1; 
    } else if (prev < next) { 
      return 1;
    } else return 0;
  }; 
  
  const filterCars = (cars, value) => {    
    return cars.filter(car => {
      value = value.toLowerCase();
      for (var prop in car) {     
        if (prop === "id") {
          continue;
        } else if (String(car[prop]).toLowerCase().indexOf(value) !== -1) {                    
          return true;          
        } else if (prop === "price" && String(car[prop]["amount"]).toLowerCase().indexOf(value) !== -1) {                              
          return true;
        }          
      }        
      return false;          
    });    
  }

  switch (type) {
    case SORT_DECREASE : {          
      return [ ...currentState ].sort((prev, next) => compare(prev[key], next[key]));             
    }
    case SORT_INCREASE : {            
      return [ ...currentState ].sort((prev, next) => compare(next[key], prev[key]));                 
    }
    case DELETE_CARS : {      
      state = [ ...state ].filter(car => !car.isChecked);       
      return [ ...currentState ].filter(car => !car.isChecked);
    }
    case CHECK_CAR : {      
      return [ ...currentState ].map(car => { if (car.id === id) {car.isChecked = !car.isChecked; } return car;});      
    }
    case FILTER_CARS : {        
      if (valueFilter !== "") {        
        return filterCars([ ...state ], valueFilter);       
      } else {
        return [ ...state ];
      }
    }
    default:
      return currentState;
  }
}

export default cars;