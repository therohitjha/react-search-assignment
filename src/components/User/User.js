import React from 'react';
import PropTypes from 'prop-types';
import Id from './Id';
import Name from './Name';
import Items from './Items';
import Address from './Address';
import './User.scss';

const User = React.forwardRef((props, ref) => {
  const { id, name, items, address, pincode } = props.data;
  let classes = 'user';
  if (props.focused) {
    classes += ' focused';
  }
  const handleMouseEvent = () => {
    props.handleMouseEvent(props.divId);
  };
  return (
    <div
      tabIndex="0"
      id={props.divId}
      ref={ref}
      className={classes}
      onKeyDown={props.handleKeyPress}
      onMouseMove={handleMouseEvent}
    >
      <Id id={id} />
      <Name name={name} />
      <Items items={items} />
      <Address address={address} pincode={pincode} />
    </div>
  );
});

User.propTypes = {
  data: PropTypes.object.isRequired,
  divId: PropTypes.number.isRequired,
  focused: PropTypes.bool.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  handleMouseEvent: PropTypes.func.isRequired
};

export default User;
