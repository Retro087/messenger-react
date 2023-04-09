import React from "react";
import s from './ProfileStatus.module.css'

class Status extends React.Component{
    state = {
        editMode: false,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }
    onChange = (event) => {
        let status = event.target.value;
        this.props.onStatusChange(status)
    }
    render(){
        return (
            <div>
                <div>
                    {this.props.myId === this.props.profile.userId ? this.state.editMode ? <input onChange={this.onChange} className={s.input} onBlur={this.deactivateEditMode} autoFocus={true} type="text" value={this.props.status}/> : <span className={s.myStatus} onClick={this.activateEditMode}>{this.props.status}</span> 
                    : <span className={s.status} onClick={this.activateEditMode}>{this.props.status}</span>}                 
                </div>
            </div>
        )
    }
}

export default Status