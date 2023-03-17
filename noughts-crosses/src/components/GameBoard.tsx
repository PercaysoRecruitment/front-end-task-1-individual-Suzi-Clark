import React from 'react'
import GameButton from "./GameButton"
import { gridTuple } from '@/types'

type gameBoardProps = {
    handleClick: any,
    noughtsNext: boolean,
    grid: gridTuple

}


export default function GameBoard({handleClick, noughtsNext, grid}: gameBoardProps) {
    
    return (<div>
        <h2>Gameboard here.</h2>
        <div className='game-board'>
            {grid.map((item, index) =>
                <GameButton key={index.toString()} text={item}/>
            )}
        </div>
    </div>)
}