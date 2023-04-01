import React from "react";
import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "../../redux/users-reducer";
import Users from "./Users";

let MapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        followed: state.usersPage.users.followed,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let MapDispatchToProps = (dispatch) => {
    return {
        follow(id){
            dispatch(followAC(id))
        },
        unfollow(id){
            dispatch(unfollowAC(id))
        },
        setUsers(users){
            dispatch(setUsersAC(users))
        },
        setCurrentPage(pageNumber){
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount(totalCount){
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

let UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users)
export default UsersContainer