import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = props => {
  return (
    <input
      className="search-input"
      type="search"
      value={props.currentInput}
      onChange={props.changeHandler}
      onKeyDown={props.keyPressHandler}
      placeholder={props.placeholder}
      autofocus
    />
  );
};

SearchInput.propTypes = {
  currentInput: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

SearchInput.defaultProps = {
  placeholder: 'Search'
};

export default SearchInput;
