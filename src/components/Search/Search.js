import React, { Component } from "react";
import SearchInput from "./SearchInput";
import List from "./List";
import EmptyResult from "../EmptyResult";
import users from "../../data";
import "./Search.scss";

class Search extends Component {
  state = {
    currentInput: "",
    users: [],
  };
  listRef = React.createRef();

  componentDidMount() {
    this.setState({
      users,
    });
  }

  matchItems = (items, regexp) => {
    let match = false;
    items.forEach((item) => {
      if (item.search(regexp) > -1) {
        match = true;
      }
    });
    return match;
  };

  filterUsers = (users, regexp) => {
    const filteredUsers = users.filter(
      (user) =>
        user.name.search(regexp) > -1 ||
        user.id.search(regexp) > -1 ||
        this.matchItems(user.items, regexp) ||
        user.address.search(regexp) > -1 ||
        user.pincode.search(regexp) > -1
    );
    return filteredUsers;
  };

  filterByKeyword = (e) => {
    const keyword = e.target.value;
    this.setState({ currentInput: keyword });
    if (keyword) {
      const regexp = new RegExp(`${keyword}`, "i");
      this.setState({ users: this.filterUsers(users, regexp) });
    } else {
      this.setState({ users });
    }
  };

  handleKeyPress = (e) => {
    // to enable keyboard navigation when key is pressed while input is focused
    this.listRef.current && this.listRef.current.handleKeyPress(e);
  };

  render() {
    const searchResults = this.state.users.length ? (
      <List users={this.state.users} ref={this.listRef} />
    ) : (
      <EmptyResult message="No users found" />
    );
    return (
      <div className="search-container">
        <SearchInput
          currentInput={this.state.currentInput}
          keyPressHandler={this.handleKeyPress}
          changeHandler={this.filterByKeyword}
          placeholder="Search..."
        />
        {searchResults}
      </div>
    );
  }
}

export default Search;
