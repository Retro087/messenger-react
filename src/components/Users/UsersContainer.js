import React from "react";
import { connect } from "react-redux";
import {
  follow,
  getUsers,
  setCurrentPage,
  setFollowingInProgress,
  unfollow,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getAllUsers,
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getNameSearch,
  getOnlyFriends,
  getPageSize,
  getTotalUsersCount,
} from "../../redux/user-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(
      this.props.currentPage,
      this.props.pageSize,
      this.props.onlyFriends,
      this.props.nameSearch
    );
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(
      pageNumber,
      this.props.pageSize,
      this.props.onlyFriends,
      this.props.nameSearch
    );
  };

  getOnlyFriends = (onlyFriends) => {
    this.props.setCurrentPage(1);
    this.props.getUsers(
      null,
      this.props.pageSize,
      onlyFriends,
      this.props.nameSearch
    );
  };

  getUsersByName = (name) => {
    this.props.setCurrentPage(1);
    this.props.getUsers(
      null,
      this.props.pageSize,
      this.props.onlyFriends,
      name
    );
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            getUsersByName={this.getUsersByName}
            getOnlyFriends={this.getOnlyFriends}
            onPageChanged={this.onPageChanged}
            {...this.props}
          />
        )}
      </>
    );
  }
}

let MapStateToProps = (state) => {
  return {
    users: getAllUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    onlyFriends: getOnlyFriends(state),
    nameSearch: getNameSearch(state),
  };
};

let MapDispatchToProps = {
  setCurrentPage,
  setFollowingInProgress,
  getUsers,
  follow,
  unfollow,
};

export default compose(connect(MapStateToProps, MapDispatchToProps))(
  UsersContainer
);
