import React, { Component } from "react";
import PropTypes from "prop-types";
import User from "../User/User";

class List extends Component {
  state = {
    focusedUser: -1,
    scrollIntoView: false,
  };
  userRef = React.createRef();

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.focusedUser !== prevState.focusedUser &&
      this.state.scrollIntoView
    ) {
      this.ensureFocusedItemVisible();
    }
  }

  ensureFocusedItemVisible() {
    this.userRef.current &&
      this.userRef.current.scrollIntoView({
        behaviour: "smooth",
        block: "center",
      });
  }

  handleKeyPress = (e) => {
    // scroll into view only on keyboard navigation
    this.setState({ scrollIntoView: true });
    // up arrow
    if (e.keyCode === 38) {
      this.setState((state) => {
        const currentFocus = state.focusedUser;
        // if up key is pressed multiple times on first list item, keep first item highlighted
        const focusedUser = currentFocus <= 0 ? 0 : currentFocus - 1;
        return {
          focusedUser,
        };
      });
    }
    // down arrow
    if (e.keyCode === 40) {
      this.setState((state) => {
        const currentFocus = state.focusedUser;
        // if down key is pressed multiple times on last list item, keep last item highlighted
        const focusedUser =
          currentFocus >= this.props.users.length - 1
            ? this.props.users.length - 1
            : currentFocus + 1;
        return {
          focusedUser,
        };
      });
    }
  };

  handleMouseEvent = (id) => {
    this.userRef.current && this.userRef.current.focus();
    this.setState({ focusedUser: parseInt(id), scrollIntoView: false });
  };

  render() {
    const listElements = this.props.users.map((user, index) => {
      const focused = index === this.state.focusedUser;

      return (
        <User
          divId={index}
          data={user}
          focused={focused}
          ref={focused && this.userRef}
          handleKeyPress={this.handleKeyPress}
          handleMouseEvent={this.handleMouseEvent}
        />
      );
    });
    return <div className="result-list">{listElements}</div>;
  }
}

List.propTypes = {
  users: PropTypes.array.isRequired,
};

export default List;
