import type { Locale } from '../../locales/sv';

type BingoWinProps = {
  bingo: Locale['bingo'];
  onReset: () => void;
  onContactClick: () => void;
};

function BingoWin({ bingo, onReset, onContactClick }: BingoWinProps) {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-background/80">
      <div className="absolute bg-background rounded-2xl border-3 border-foreground p-2 md:p-6 flex flex-col items-center gap-6 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="text-green font-bold text-lg lg:text-3xl font-heading text-center uppercase max-w-50 lg:max-w-80">
          {bingo.winTitle} <br />
          {bingo.winMessage}
        </p>

        <div className="flex gap-2 lg:gap-4">
          <button
            className="shrink-0 whitespace-nowrap text-foreground font-bold bg-background border-foreground border-3 p-2 rounded-3xl"
            onClick={onReset}
          >
            {bingo.playAgain}
          </button>

          <button
            type="button"
            onClick={() => {
              onReset();
              onContactClick();
            }}
            className="shrink-0 whitespace-nowrap text-background font-bold bg-foreground p-2 rounded-3xl"
          >
            {bingo.contact}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BingoWin;
