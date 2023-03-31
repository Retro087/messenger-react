const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        { id: 1, photo: 'https://avatars.dzeninfra.ru/get-zen_doc/4079787/pub_605d73daa5f59d2919c8cbcc_605db0c8485bdb6e4a0a4b62/scale_1200', followed: true, fullName: 'Vova', status: 'bigBoss', location: { country: 'Russia', city: 'Moscow' }},
        { id: 2, photo: 'https://avatars.dzeninfra.ru/get-zen_doc/4079787/pub_605d73daa5f59d2919c8cbcc_605db0c8485bdb6e4a0a4b62/scale_1200', followed: true, fullName: 'Dimon', status: 'progger', location: { country: 'Russia', city: 'Moscow' }},
        { id: 3, photo: 'https://avatars.dzeninfra.ru/get-zen_doc/4079787/pub_605d73daa5f59d2919c8cbcc_605db0c8485bdb6e4a0a4b62/scale_1200', followed: true, fullName: 'Sasha', status: 'bandit', location: { country: 'Russia', city: 'Moscow' } }
    ],

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
            return { ...state, users: [...state.users, ...action.users] }
        default:
            return state
    }
}

export const followAC = (id) => ({ type: FOLLOW, id })
export const unfollowAC = (id) => ({ type: UNFOLLOW, id })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export default UsersReducer