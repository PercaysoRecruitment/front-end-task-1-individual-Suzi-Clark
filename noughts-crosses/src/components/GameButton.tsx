import React from 'react'

type buttonProps = {
    text: string,
}

export default function GameButton({text}: buttonProps) {
    return (<div>
        <button data-testid="game-button" type="button">{text}</button>
    </div>)
}