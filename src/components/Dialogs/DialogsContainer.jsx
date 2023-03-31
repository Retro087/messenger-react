import React from "react";
import { connect } from "react-redux";
import { addMessageAC, updateNewMessageBodyAC } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let MapDispatchToProps = (dispatch) => {
    return {
        sendMessage(){
            dispatch(addMessageAC())
        },

        onMessageChange(msgText){
            dispatch(updateNewMessageBodyAC(msgText))
        }
    }
}

let MapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMsgBody: state.dialogsPage.newMessageBody
    }
}

const DialogsContainer = connect(MapStateToProps, MapDispatchToProps)(Dialogs)

export default DialogsContainer