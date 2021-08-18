import React from 'react';
import PropTypes from 'prop-types';

const emptyStyle = { marginTop: '30px' };

const EmptyResult = props => {
  return <div style={emptyStyle}>{props.message}</div>;
};

EmptyResult.propTypes = {
  message: PropTypes.string
};

EmptyResult.defaultProps = {
  message: 'No results found'
};

export default EmptyResult;
