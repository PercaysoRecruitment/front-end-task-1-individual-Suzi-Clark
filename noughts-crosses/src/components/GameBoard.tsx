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
            <p data-testid='instructions'>Take it in turns.<br/>0s go first.<br/>Get 3 in a vertical, horizontal or diagonal line to win.<br/><strong>Click a square to play!</strong></p>
        <div data-testid='game-board' className='game-board'>
            {grid.map((item, index) =>
                <GameButton key={index.toString()} text={item} id={index.toString()} handleClick={handleClick}/>
            )}
        </div>
    </div>)
}