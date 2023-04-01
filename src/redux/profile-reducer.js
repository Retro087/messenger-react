const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const LIKE = 'LIKE'
const DISLIKE = 'DISLIKE'

let initialState = {
    posts: [{ id: 1, name: 'Vladimir', message: 'hello', likes: 0, liked: false }, { id: 2, name: 'Dimon', message: 'first post)', likes: 0, liked: false}],
    newPostText: ''
}

let profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
            let i = state.posts.length - 1
            let post = {
                id: state.posts[i].id + 1,
                message: state.newPostText,
                name: 'Vova',
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
        case LIKE:
            return{
                ...state,
                posts: state.posts.map(el => {
                    if(el.id === action.postId){
                        let likes = el.likes + 1
                        return {...el, likes: likes, liked: true}
                    }
                    return el
                })
            }
        case DISLIKE:
            return {
                ...state,
                posts: state.posts.map(el => {
                    if(el.id === action.postId){
                        let likes = el.likes - 1
                        return {...el, likes: likes, liked: false}
                    }
                    return el
                })
            }
        default:
            return state
    }
}

export default profileReducer
export let addPostAC = () => ({type: ADD_POST})
export let updateNewPostTextAC = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})
export let likePostAC = (postId) => ({type: LIKE, postId})
export let disLikePostAC = (postId) => ({type: DISLIKE, postId})