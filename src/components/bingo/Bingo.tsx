import bingoItems from './bingo.json';

function Bingo() {
  return (
    <section className="ml-8 mt-16 md:ml-16 md:mt-22 lg:ml-28 lg:mt-28 text-foreground">
      <div className="flex flex-col md:flex-row gap-4">
        <h2 className="uppercase text-h2 md:[writing-mode:vertical-rl] leading-none whitespace-nowrap text-foreground">
          Lollo-Bingo
        </h2>
        <div className="grid grid-cols-4 gap-2 md:gap-4">
          {bingoItems.map((item) => (
            <button
              className="border-3 border-foreground rounded-2xl text-foreground font-bold"
              key={item.id}
            >
              {item.text}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Bingo;
