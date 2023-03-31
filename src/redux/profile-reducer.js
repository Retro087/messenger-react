const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [{ id: 1, message: 'hello', likes: 2 }, { id: 2, message: 'first post)', likes: 75 }],
    newPostText: ''
}

let profileReducer = (state = initialState, action) => {

    switch (action.type){
        case ADD_POST:
            let post = {
                id: 5,
                message: state.newPostText,
                likes: 0
            }
            
            return {
                ...state,
                posts: [...state.posts, post],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            }
        default:
            return state
    }
}

export default profileReducer
export let addPostAC = () => ({type: ADD_POST})
export let updateNewPostTextAC = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})