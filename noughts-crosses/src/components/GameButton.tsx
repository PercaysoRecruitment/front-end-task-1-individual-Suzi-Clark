import React from 'react'

type buttonProps = {
    text: string,
}

//PLAN
// needs to receive as props an onClick function that should just take (e: React.ClickEvent<HTMLInputElement>) as arg


export default function GameButton({text}: buttonProps) {
    return (<div>
        <button data-testid="game-button" type="button" className='game-button'>{text}</button>
    </div>)
}