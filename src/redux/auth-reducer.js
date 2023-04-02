const SET_AUTH_DATA = 'SET_AUTH_DATA'
const SET_AUTH_PROFILE = 'SET_AUTH_PROFILE'

let initialState = {
    login: null,
    email: null,
    id: null,
    isAuthorized: false,
    userProfile: null
}

let authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuthorized: true
            }
        case SET_AUTH_PROFILE:
        
            return {
                ...state,
                userProfile: action.profile
            }
        default:
            return state
    }
}

export default authReducer
export let setAuthData = (id, login, email) => ({type: SET_AUTH_DATA, data: {email, login, id}})
export let setAuthProfile = (profile) => ({type: SET_AUTH_PROFILE, profile})