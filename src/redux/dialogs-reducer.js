const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_POST_TEXT'
const ADD_MESSAGE = 'ADD_MESSAGE'

let initialState = {
    dialogs: [{ id: 1, name: 'Vova' }, { id: 2, name: 'Dima' }],
    messages: [{ id: 1, message: 'Hello' }, { id: 2, message: 'good game' }],
    newMessageBody: ''
}

let dialogsReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: 3,
                message: state.newMessageBody
            }
            state.messages.push(newMessage)
            state.newMessageBody = ''
            return state
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.message
        default:
            return state
    }
}

export default dialogsReducer
export let updateNewMessageBodyActionCreator = (message) => ({type: UPDATE_NEW_MESSAGE_BODY, message: message})
export let addMessageActionCreator = () => ({type: ADD_MESSAGE})