import React, { useState } from 'react'
import { Die } from './Die';

export const RollDice = () => {

    const [dice, setDice] = useState({ diceOne: "one", diceTwo: "one" })
    const [rolling, setRolling] = useState(false)

    const diceArray = ["one", "two", "three", "four", "five", "six"];

    const roll = () => diceArray[Math.floor(Math.random() * diceArray.length)];

    const handleClick = e => { setDice({ diceOne: roll(), diceTwo: roll() }); setRolling(true) }

    setTimeout(() => setRolling(false), 1000);


    return (
        <div className="Roll-Dice">
            <div className="Roll-Dice-container">
                <Die rolling={rolling} number={dice.diceOne} />
                <Die rolling={rolling} number={dice.diceTwo} />
            </div>

            <button disabled={rolling} className="Die-button" onClick={() => handleClick()}>{rolling ? "Rolling" : "Roll Dice!"}</button>
        </div>
    )
}
