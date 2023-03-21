import { gridArray } from '@/types';
import { useState } from 'react';

type endConditions = 'Progress' | "X's Win!" | "0's Win!" | "It's a Draw!"
type winCustomHook = [endConditions, (grid: gridArray) => void]

export default function useWinCheck(): winCustomHook {
  const [win, setWin] = useState<endConditions>('Progress')
  function winCheck(grid: gridArray): void {
     if (checkWin(grid, 'X')) {
      setWin("X's Win!");
    }
    else if (checkWin(grid, '0')) {
      setWin("0's Win!");
    }
    else if (!grid.includes(' ')) {
      console.log(grid);
      setWin("It's a Draw!");
    }
  }
  return [win, winCheck];
}

function checkWin(grid: gridArray, n: string): boolean {
    if ((grid[0] === n) && (grid[1] === n) && (grid[2] === n)) {
      return true;
    }
    else if ((grid[3] === n) && (grid[4] === n) && (grid[5] === n)) {
      return true;
    }
    else if ((grid[6] === n) && (grid[7] === n) && (grid[8] === n)) {
      return true;
    }
    else if ((grid[0] === n) && (grid[3] === n) && (grid[6] === n)) {
      return true;
    }
    else if ((grid[1] === n) && (grid[4] === n) && (grid[7] === n)) {
      return true;
    }
    else if ((grid[2] === n) && (grid[5] === n) && (grid[8] === n)) {
      return true;
    }
    else if ((grid[6] === n) && (grid[4] === n) && (grid[2] === n)) {
      return true;
    }
    else if ((grid[0] === n) && (grid[4] === n) && (grid[8] === n)) {
      return true;
    }
    else {
      return false;
    }
  }