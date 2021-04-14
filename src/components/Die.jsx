import React from 'react'

export const Die = (props) => {
    return (
        <div>
            <i className={"Die-Dice fas fa-dice-" + props.number + " fa-7x"} />
        </div >
    )
}
