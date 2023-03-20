import React from "react";

type buttonProps = {
  text: string;
  id: string;
  handleClick: any;
};

export default function GameButton({ text, id, handleClick }: buttonProps) {
  return (
    <div>
      <button
        data-testid="game-button"
        type="button"
        className="game-button"
        id={id}
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
}
