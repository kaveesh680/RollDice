import React, { useState } from 'react'
import { Die } from './Die';

export const RollDice = () => {

    const [dice, setDice] = useState({ diceOne: "one", diceTwo: "one" })

    const diceArray = ["one", "two", "three", "four", "five", "six"];

    const roll = () => diceArray[Math.floor(Math.random() * diceArray.length)];

    const handleClick = e => setDice({ diceOne: roll(), diceTwo: roll() })


    return (
        <div>
            <Die number={dice.diceOne} />
            <Die number={dice.diceTwo} />
            <button onClick={() => handleClick()}>Roll</button>
        </div>
    )
}
