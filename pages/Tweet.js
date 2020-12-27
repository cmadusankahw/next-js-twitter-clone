import React from 'react'

const Tweet = (props) => {
    return (
        <>
         <h3> {props.text}</h3>
         <p> by {props.author} on {props.date}</p>
         </>
    )
}

export default Tweet