import React, { Fragment } from 'react';
//import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './GridTitle.css';

const GridTitle = ({ title }) => (  
  <Fragment><h1 className="text-center">{title}</h1></Fragment>  
);

GridTitle.propTypes = {
  title: PropTypes.string,
}

GridTitle.defaultProps = {
  title: " ",
}

export default GridTitle;
