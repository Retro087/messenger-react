import React from "react";
import { connect } from "react-redux";
import { addMessageAC, updateNewMessageBodyAC } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

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

export default compose(connect(MapStateToProps, MapDispatchToProps), withAuthRedirect)(Dialogs)

