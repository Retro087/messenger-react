import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import Message from "./Message/Message";


function Dialogs(props) {
    let dialogsElemenets = props.dialogsPage.dialogs.map(data => <DialogItem key={data.id} name={data.name} id={data.id} />)
    let messageElements = props.dialogsPage.messages.map(msgData => <Message key={msgData.id} message={msgData.message} id={msgData.id} />)
    let areaElement = React.createRef()

    let sendMessage = () => {
        props.sendMessage()
    }

    let onMessageChange = () => {
        let msgText = areaElement.current.value
        props.onMessageChange(msgText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElemenets}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div>
                <textarea ref={areaElement} onChange={onMessageChange} value={props.dialogsPage.newMessageBody}/>
            </div>
            <div>
                <button onClick={sendMessage}>Send Message</button>
            </div>
        </div>
    )
}

export default Dialogs