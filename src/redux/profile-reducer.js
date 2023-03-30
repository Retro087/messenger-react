const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [{ id: 1, message: 'hello', likes: 2 }, { id: 2, message: 'first post)', likes: 75 }],
    NewPostText: ''
}

let profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
            let post = {
                id: 5,
                message: state.NewPostText,
                likes: 0
            }
            state.posts.push(post)
            state.NewPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.NewPostText = action.text
            return state
        default:
            return state
    }
}

export default profileReducer
export let addPostActionCreator = () => ({type: ADD_POST})
export let updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})