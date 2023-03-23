import React, { MouseEventHandler } from 'react';
import GameButton from './GameButton';
import { gridArray } from '@/types';

type gameBoardProps = {
  handleGameClick: MouseEventHandler<HTMLButtonElement>;
  grid: gridArray;
};

export default function GameBoard({ handleGameClick, grid }: gameBoardProps) {
  return (
    <div>
      <p data-testid='instructions'>
        Take it in turns.
        <br />
        0s go first.
        <br />
        Get 3 in a vertical, horizontal or diagonal line to win.
        <br />
      </p>
        <p id='click-instruction'><strong>Click a square to play!</strong></p>
      <div data-testid='game-board' className='game-board'>
        {grid.map((item, index) => (
          <GameButton
            key={index.toString()}
            text={item}
            id={index.toString()}
            handleGameClick={handleGameClick}
          />
        ))}
      </div>
    </div>
  );
}