import type { Locale } from '../../locales/sv';

export const getWinningCombinations = (boardSize: number) => {
  const winningCombinations: number[][] = [];

  // ROWS CHECK
  for (let row = 0; row < boardSize; row++) {
    const currentRow: number[] = [];

    for (let col = 0; col < boardSize; col++) {
      currentRow.push(row * boardSize + col);
    }
    winningCombinations.push(currentRow);
  }
  // COLS CHECK
  for (let col = 0; col < boardSize; col++) {
    const currentCol: number[] = [];

    for (let row = 0; row < boardSize; row++) {
      currentCol.push(row * boardSize + col);
    }
    winningCombinations.push(currentCol);
  }

  // DIAGANOL CHECK
  const diagonal: number[] = [];
  const reverseDiagonal: number[] = [];
  for (let i = 0; i < boardSize; i++) {
    diagonal.push(i * boardSize + i);
    reverseDiagonal.push(i * boardSize + (boardSize - 1 - i));
  }
  winningCombinations.push(diagonal);
  winningCombinations.push(reverseDiagonal);

  return winningCombinations;
};

export const checkForBingo = (
  winningCombinations: number[][],
  visibleItems: { id: number; text: string }[],
  selectedItems: number[],
) => {
  // Check if any of the winning combinations is complete
  const hasBingo = winningCombinations.some((combination) => {
    // Check if .every position in the combination is selected
    return combination.every((index) => {
      // Get the ID of the item at this position on the shuffled board
      const itemId = visibleItems[index].id;
      // Check if that item's ID exists in selectedItems
      return selectedItems.includes(itemId);
    });
  });
  return hasBingo;
};

export const shuffleItems = (items: Locale['bingo']['items']) => {
  return [...items].sort(() => Math.random() - 0.5).map((item) => item.id);
};
