import { SORT_DECREASE, SORT_INCREASE, DELETE_CARS, CHECK_CAR, FILTER_CARS } from '../constants';

export const sortDecrease = key => ({ 
  type: SORT_DECREASE, key 
});

export const sortIncrease = key => ({ 
  type: SORT_INCREASE, key 
});

export const deleteCars = () => ({ 
  type: DELETE_CARS 
});

export const checkCar = id => ({ 
  type: CHECK_CAR, id 
});

export const filterCars = valueFilter => ({ 
  type: FILTER_CARS , valueFilter
});