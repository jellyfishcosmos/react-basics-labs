import React from 'react';

const Task1 = (props) => {
    
    return (
        <div className="card">
            <p className='title'>{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className='description'>About: {props.description}</p>
        </div>
    )
}

export default Task1;