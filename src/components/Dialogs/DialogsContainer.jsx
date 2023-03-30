import React from "react";
import { addMessageActionCreator, updateNewMessageBodyActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";



function DialogsContainer(props) {

    let state = props.store.getState().messagesPage

    let sendMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let onMessageChange = (msgText) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(msgText))
    }

    let newMsgBody = props.store.getState().messagesPage.newMessageBody

    return (<Dialogs sendMessage={sendMessage} onMessageChange={onMessageChange}
     state={state} newMessageBody={newMsgBody}/>)
}

export default DialogsContainer