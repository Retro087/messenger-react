import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"


let store = {
    _state: {
        profilePage: {
            posts: [{ id: 1, message: 'hello', likes: 2 }, { id: 2, message: 'first post)', likes: 75 }],
            NewPostText: ''
        },
        messagesPage: {
            dialogs: [{ id: 1, name: 'Vova' }, { id: 2, name: 'Dima' }],
            messages: [{ id: 1, message: 'Hello' }, { id: 2, message: 'good game' }],
            newMessageBody: ''
        }
        
    },
    _callSubscriber() {
        console.log('changed')
    },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer
    },
    dispatch(action){
        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.messagesPage, action)
        this._callSubscriber(this._state)
    }
}



export default store