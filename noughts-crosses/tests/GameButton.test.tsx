import '@testing-library/jest-dom'
import React from 'react'
import {render, screen} from '@testing-library/react'
import GameButton from '../src/components/GameButton'

test('shows the children when the checkbox is checked', () => {
    render(<GameButton text="X"/>)
    expect(screen.getByTestId('game-button')).toHaveTextContent('X');
})