import React from 'react'
import GameButton from "./GameButton"

export default function GameBoard() {
    const boardSquares = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    

    return (<div>
        <h2>Gameboard here.</h2>
        <div>
            {boardSquares.map((item) =>
                <GameButton key={item.toString()} text={item.toString()}/>
            )}
        </div>
    </div>)
}