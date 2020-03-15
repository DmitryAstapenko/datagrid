import { SORT_DECREASE, SORT_INCREASE } from '../constants';

export const sortDecrease = key => ({ 
  type: SORT_DECREASE, key 
});

export const sortIncrease = key => ({ 
  type: SORT_INCREASE, key 
});