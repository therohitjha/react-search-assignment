import React from 'react';
import PropTypes from 'prop-types';

const Items = props => {
  return <div>{props.items}</div>;
};

Items.propTypes = {
  items: PropTypes.array.isRequired
};

export default Items;
