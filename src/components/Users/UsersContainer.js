import React from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/users-reducer";
import Users from "./Users";

let MapStateToProps = (state) => {
    if(state.usersPage.users.followed){
        return {
            users: state.usersPage.users,
            followed: 'followed'
        }
    }
    return {
        users: state.usersPage.users,
        followed: 'unfollowed'
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
        }
    }
}

let UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users)
export default UsersContainer