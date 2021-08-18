import React from 'react';
import PropTypes from 'prop-types';

const Id = props => {
  return <div>{props.id}</div>;
};

Id.propTypes = {
  id: PropTypes.string.isRequired
};

export default Id;
