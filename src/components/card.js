import React from 'react';

export default function Card(props) {
    return (
        <span className='card'>
            <span className='circle'>
                <img src={props.img} alt='icon'/>
            </span>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </span>
    )
}


