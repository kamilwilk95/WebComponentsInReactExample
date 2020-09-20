import React from 'react';
import './Comment.css';

const Comment = (props) => {
    return (
        <div className="wrapper">
            <div className="nick">{props.nick}</div>
            <div className="content">{props.content}</div>
        </div>
    );
};

export default Comment;