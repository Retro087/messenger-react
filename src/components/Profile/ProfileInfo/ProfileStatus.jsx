import React, { useState, useEffect } from "react";
import s from "./ProfileStatus.module.css";

let Status = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  let onChange = (event) => {
    let newStatus = event.target.value;
    props.onStatusChange(newStatus);
  };

  let onBlur = () => {
    setEditMode(false);
  };

  return (
    <div>
      <div>
        {props.myId === props.profile.userId ? (
          editMode ? (
            <input
              autoFocus={true}
              className={s.input}
              onBlur={onBlur}
              onChange={onChange}
              type="text"
              value={props.status}
            />
          ) : (
            <span
              className={s.myStatus}
              onClick={() => {
                setEditMode(true);
              }}
            >
              {props.status}
            </span>
          )
        ) : (
          <span className={s.status}>{props.status}</span>
        )}
      </div>
    </div>
  );
};

export default Status;
