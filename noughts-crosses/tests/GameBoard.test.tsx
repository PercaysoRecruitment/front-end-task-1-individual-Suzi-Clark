import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import GameBoard from "@/components/GameBoard";
import { gridTuple } from '@/types';

describe('GameBoard', () => {
  const handleClick = jest.fn();
  const noughtsNext = true;
  const grid: gridTuple = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

  test('renders game board div', () => {
    render(<GameBoard handleClick={handleClick} noughtsNext={noughtsNext} grid={grid} />);
    const gameBoard = screen.getByTestId('game-board');
    expect(gameBoard).toBeInTheDocument();
  });

  test('renders game board div with 9 buttons in it', () => {
    render(<GameBoard handleClick={handleClick} noughtsNext={noughtsNext} grid={grid} />);
    const buttons = screen.getAllByTestId('game-button');
    expect(buttons.length).toBe(9);
  });

  test('renders instructions on the page', () => {
    const info = screen.getByTestId('instructions')
    expect(info).toBeInTheDocument();
  })
});















// test("renders all 9 noughts and crosses buttons", () => {
//   //render GameBoard here - need to work out how to mock props
//   render(<GameBoard handleClick={() => console.log('hi')} noughtsNext={true} grid={[' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ']}/>);
//   const gameButtons = screen.getByRole('button');

// });