import React from "react";
import { connect } from "react-redux";
import { follow, getUsers, setCurrentPage, setFollowingInProgress, unfollow } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";  
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize, this.props.onlyFriends, this.props.nameSearch)   
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize, this.props.onlyFriends, this.props.nameSearch)
    }

    getOnlyFriends = (onlyFriends) => {
        this.props.setCurrentPage(1)
        this.props.getUsers(null, this.props.pageSize, onlyFriends, this.props.nameSearch)
    }

    getUsersByName = (name) => {
        this.props.setCurrentPage(1)
        this.props.getUsers(null, this.props.pageSize, this.props.onlyFriends, name)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : <Users getUsersByName={this.getUsersByName} getOnlyFriends={this.getOnlyFriends} onPageChanged={this.onPageChanged} {...this.props}/>}
            </>
        )
    }

}

let MapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuthorized,
        onlyFriends: state.usersPage.onlyFriends,
        nameSearch: state.usersPage.nameSearch
    }
}

let MapDispatchToProps = {
    setCurrentPage,
    setFollowingInProgress,
    getUsers,
    follow,
    unfollow
}

export default compose(connect(MapStateToProps, MapDispatchToProps), withAuthRedirect)(UsersContainer)