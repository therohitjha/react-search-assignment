import React from 'react';
import PropTypes from 'prop-types';

const Address = props => {
  return <div>{props.address}</div>;
};

Address.propTypes = {
  address: PropTypes.string.isRequired
};

export default Address;
