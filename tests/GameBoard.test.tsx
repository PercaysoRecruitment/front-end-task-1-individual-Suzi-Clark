import React, { MouseEventHandler } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GameBoard from '../src/components/GameBoard';
import { gridArray } from '../src/types';

describe('GameBoard', () => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = jest.fn();
  const grid: gridArray = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

  test('renders game board div', () => {
    render(<GameBoard handleClick={handleClick} grid={grid} />);
    const gameBoard = screen.getByTestId('game-board');
    expect(gameBoard).toBeInTheDocument();
  });

  test('renders game board div with 9 buttons in it', () => {
    render(<GameBoard handleClick={handleClick} grid={grid} />);
    const buttons = screen.getAllByTestId('game-button');
    expect(buttons.length).toBe(9);
  });

  test('renders instructions on the page', () => {
    render(<GameBoard handleClick={handleClick} grid={grid} />);
    const info = screen.getByTestId('instructions');
    expect(info).toBeInTheDocument();
  });
});
