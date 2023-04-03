import React from 'react';

type endProps = {
  winner: string;
  handlePlayAgain: () => void;
};

export default function EndGame({ winner, handlePlayAgain }: endProps) {
  return (
    <div data-testid="end-game">
      <h2>
        {winner}
        !!
      </h2>
      <button type="button" onClick={handlePlayAgain} id="play-again">
        Play Again?
      </button>
    </div>
  );
}
