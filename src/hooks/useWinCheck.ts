import { useState } from 'react';
import { gridArray } from '../types';

type endConditions = 'Progress' | 'X\'s Win!' | '0\'s Win!' | 'It\'s a Draw!'
type winCustomHook = [endConditions, (grid: gridArray) => void]

function winLogic(grid: gridArray, n: string): boolean {
  if (
    ((grid[0] === n) && (grid[1] === n) && (grid[2] === n))
  || ((grid[3] === n) && (grid[4] === n) && (grid[5] === n))
  || ((grid[6] === n) && (grid[7] === n) && (grid[8] === n))
  || ((grid[0] === n) && (grid[3] === n) && (grid[6] === n))
  || ((grid[1] === n) && (grid[4] === n) && (grid[7] === n))
  || ((grid[2] === n) && (grid[5] === n) && (grid[8] === n))
  || ((grid[6] === n) && (grid[4] === n) && (grid[2] === n))
  || ((grid[0] === n) && (grid[4] === n) && (grid[8] === n))
  ) {
    return true;
  } else {
    return false;
  }
}

export default function useWinCheck(): winCustomHook {
  const [win, setWin] = useState<endConditions>('Progress');
  function winCheck(grid: gridArray): void {
    if (winLogic(grid, 'X')) {
      setWin('X\'s Win!');
    } else if (winLogic(grid, '0')) {
      setWin('0\'s Win!');
    } else if (!grid.includes(' ')) {
      setWin('It\'s a Draw!');
    } else {
      setWin('Progress');
    }
  }
  return [win, winCheck];
}
