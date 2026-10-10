import { useEffect, useState } from 'react';
import type { Locale } from '../../locales/sv';
import {
  getWinningCombinations,
  checkForBingo,
  shuffleItems,
} from './bingoUtils';
import BingoWin from './BingoWin';

type BingoProps = {
  bingo: Locale['bingo'];
};

function Bingo({ bingo }: BingoProps) {
  // STATE
  const [isDesktop, setIsDesktop] = useState(false);
  const [shuffledIds, setShuffledIds] = useState(() =>
    shuffleItems(bingo.items),
  );
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  //GAME ACTIONS
  const toggleItem = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id],
    );
  };
  const resetGame = () => {
    setSelectedItems([]);
    setShuffledIds(shuffleItems(bingo.items));
  };
  // RESPONSIVE BOARD SIZE
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
  // BOARD ITEMS
  const shuffledItems = shuffledIds
    .map((id) => bingo.items.find((item) => item.id === id))
    .filter((item) => item !== undefined);
  const visibleItems = isDesktop ? shuffledItems : shuffledItems.slice(0, 9);

  // BINGO CHECK
  const boardSize = isDesktop ? 4 : 3;
  const winningCombinations = getWinningCombinations(boardSize);
  const hasBingo = checkForBingo(
    winningCombinations,
    visibleItems,
    selectedItems,
  );

  return (
    <>
      <section className="ml-8 my-16 md:ml-16 md:mt-22 lg:ml-28 lg:mt-28 text-foreground">
        <div className="flex flex-col md:flex-row gap-4">
          <h2 className="uppercase text-h2 md:[writing-mode:vertical-rl] leading-none whitespace-nowrap text-foreground">
            Lollo-Bingo
          </h2>

          <div className="relative grid grid-cols-3 md:grid-cols-4 gap-1 md:gap-4 w-full">
            {visibleItems.map((item) => {
              const isSelected = selectedItems.includes(item.id);

              return (
                <button
                  onClick={() => toggleItem(item.id)}
                  className={`border-3 lg:border-4 border-foreground px-1 min-h-20 min-w-22 text-sm rounded-2xl text-foreground font-bold ${
                    isSelected ? 'border-green' : ''
                  }`}
                  key={item.id}
                >
                  {item.text}
                </button>
              );
            })}

            {hasBingo && <BingoWin bingo={bingo} onReset={resetGame} />}
          </div>
        </div>
      </section>
    </>
  );
}

export default Bingo;
