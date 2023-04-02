import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, setIsFetching, setTotalUsersCount, setUsers, unfollow } from "../../redux/users-reducer";
import Users from "./Users";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize} `,{
            withCredentials: true
        })
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.setIsFetching(false)
            })

    }

    onPageChanged = (pageNumber) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize} `, {
            withCredentials: true
        })
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setIsFetching(false)
            })
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader /> : <Users followed={this.props.followed} onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage} users={this.props.users}
                    name={this.props.users.name} pageSize={this.props.pageSize} totalUsersCount={this.props.totalUsersCount}
                    follow={this.props.follow} unfollow={this.props.unfollow} />}

            </>

        )


    }


}

let MapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        followed: state.usersPage.users.followed,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let MapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching

}


export default connect(MapStateToProps, MapDispatchToProps)(UsersContainer)