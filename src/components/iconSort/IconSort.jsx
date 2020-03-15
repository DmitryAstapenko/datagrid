import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import sortAmountDownAlt from '@iconify/icons-fa-solid/sort-amount-down-alt';
import sortAmountDown from '@iconify/icons-fa-solid/sort-amount-down';

import './IconSort.css';

const IconSort = ({ key, sortDecrease, sortIncrease }) => (  
  <Fragment>
    <Icon 
      className="icon-sort ml-2" 
      onClick={() => sortIncrease(column.key)} 
      icon={sortAmountDownAlt} />
    <Icon 
      className="icon-sort ml-1" 
      onClick={() => sortDecrease(column.key)} 
      icon={sortAmountDown} />
  </Fragment>  
);

IconSort.propTypes = {
}

IconSort.defaultProps = {  
}

export default IconSort;
