const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_POST_TEXT'
const ADD_MESSAGE = 'ADD_MESSAGE'

type dialogType = {
    id: number
    name: string
  
}

type messageType = {
    id: number
    message: string
  
}

type InitialStateType = {
    dialogs: Array<dialogType>
    messages: messageType[]
    newMessageBody: string
}
let initialState: InitialStateType = {
    dialogs: [{ id: 1, name: 'Vova',}, { id: 2, name: 'Dima' }],
    messages: [{ id: 1, message: 'Hello' }, { id: 2, message: 'good game' }],
    newMessageBody: ''
}

type Action = updateNewMessageBodyACType | addMessageACType

let dialogsReducer = (state = initialState, action: Action): InitialStateType => {
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
type updateNewMessageBodyACType = {
    type: typeof UPDATE_NEW_MESSAGE_BODY
    message: string
}
export let updateNewMessageBodyAC = (message: string): updateNewMessageBodyACType => ({type: UPDATE_NEW_MESSAGE_BODY, message: message})

type addMessageACType = {
    type: typeof ADD_MESSAGE
}
export let addMessageAC = (): addMessageACType => ({type: ADD_MESSAGE,})