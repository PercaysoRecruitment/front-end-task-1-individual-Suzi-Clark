import '@testing-library/jest-dom'
import React from 'react'
import {render, screen} from '@testing-library/react'
import GameButton from '../src/components/GameButton'


describe('GameButton', () => {
    const handleClick = jest.fn();
    const id = '3';
    const text = 'X';
    
    test('contains text passed in as props', () => {
        render(<GameButton text={text} id={id} handleClick={handleClick}/>)
        expect(screen.getByTestId('game-button')).toHaveTextContent(text);
    })
  });