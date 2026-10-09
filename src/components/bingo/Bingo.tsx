import bingoItems from './bingo.json';
import { useEffect, useState } from 'react';

const shuffleItems = () => {
  return [...bingoItems].sort(() => Math.random() - 0.5);
};
function Bingo() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [shuffledItems, setShuffleItems] = useState(shuffleItems);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const toggleItem = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id],
    );
  };
  const resetGame = () => {
    setSelectedItems([]);
    setShuffleItems(shuffleItems());
  };
  useEffect(() => {
    console.log(selectedItems);
  }, [selectedItems]);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleChange = () => {
      setIsDesktop(mediaQuery.matches);
    };
    handleChange();
    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);
  const visibleItems = isDesktop ? shuffledItems : shuffledItems.slice(0, 9);
  const boardSize = isDesktop ? 4 : 3;

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

  // CHECK FOR BINGO
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

  console.log('winningRows:', winningCombinations);
  return (
    <>
      <section className="ml-8 my-16 md:ml-16 md:mt-22 lg:ml-28 lg:mt-28 text-foreground">
        <div className="flex flex-col md:flex-row gap-4">
          <h2 className="uppercase text-h2 md:[writing-mode:vertical-rl] leading-none whitespace-nowrap text-foreground">
            Lollo-Bingo
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-1 md:gap-4 w-full">
            {visibleItems.map((item) => {
              const isSelected = selectedItems.includes(item.id);
              return (
                <button
                  onClick={() => toggleItem(item.id)}
                  className={`border-3 lg:border-4 border-foreground px-1 min-h-20 min-w-22 text-sm rounded-2xl text-foreground font-bold ${isSelected ? 'border-green' : ''}`}
                  key={item.id}
                >
                  {item.text}
                </button>
              );
            })}
          </div>
        </div>
      </section>
      <dialog></dialog>
    </>
  );
}

export default Bingo;
