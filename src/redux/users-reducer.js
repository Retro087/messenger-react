const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

let initialState = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1

}

let UsersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:

            return {
                ...state,
                users: state.users.map(u => {
                    if (action.id === u.id) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (action.id === u.id) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        default:
            return state
    }
}

export const followAC = (id) => ({ type: FOLLOW, id })
export const unfollowAC = (id) => ({ type: UNFOLLOW, id })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (pageNumber) => ({type: SET_CURRENT_PAGE, currentPage: pageNumber})
export const setTotalUsersCountAC = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export default UsersReducer