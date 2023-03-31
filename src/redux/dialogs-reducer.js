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
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageBody: ''
            }
        case UPDATE_NEW_MESSAGE_BODY: 
            return{
                ...state,
                newMessageBody: action.message
            }
        default:
            return state
    }
}

export default dialogsReducer
export let updateNewMessageBodyAC = (message) => ({type: UPDATE_NEW_MESSAGE_BODY, message: message})
export let addMessageAC = () => ({type: ADD_MESSAGE})