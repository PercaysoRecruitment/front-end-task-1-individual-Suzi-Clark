import React, { MouseEventHandler } from 'react';

type buttonProps = {
  text: string;
  id: string;
  handleGameClick: MouseEventHandler<HTMLButtonElement>;
};

export default function GameButton({ text, id, handleGameClick }: buttonProps) {
  return (
    <div>
      <button
        data-testid='game-button'
        type='button'
        className='game-button'
        id={id}
        onClick={handleGameClick}
      >
        {text}
      </button>
    </div>
  );
}
