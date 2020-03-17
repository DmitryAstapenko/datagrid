import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './DataGridTitle.css';

const DataGridTitle = ({ title }) => (  
  <Fragment>
    <h1 className="text-center">{title}</h1>
  </Fragment>  
);

DataGridTitle.propTypes = {
  title: PropTypes.string,
}

DataGridTitle.defaultProps = {
  title: " ",
}

export default DataGridTitle;
