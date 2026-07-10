export const LunchCard = ({ agentNames }: { agentNames: string[] }) => {
  const lunchTime = [
    "11:00 - 11:30",
    "11:00 - 11:30",
    "11:00 - 11:30",
    "11:00 - 11:30",
    "11:35 - 12:05",
    "11:35 - 12:05",
    "11:35 - 12:05",
    "11:35 - 12:05",
    "12:10 - 12:40",
    "12:10 - 12:40",
    "12:10 - 12:40",
    "12:10 - 12:40",
    "12:45 - 13:15",
    "12:45 - 13:15",
    "12:45 - 13:15",
    "12:45 - 13:15",
    "13:20 - 13:50",
    "13:20 - 13:50",
    "13:20 - 13:50",
    "13:20 - 13:50",
  ];

  const half = Math.ceil(agentNames.length / 2);
  const leftNames = agentNames.slice(0, half);
  const rightNames = agentNames.slice(half);

  const renderCard = (name: string, index: number) => (
    <button
      key={name}
      className="
        rounded-2xl
        bg-white/85
        backdrop-blur-md
        shadow-lg
        hover:shadow-xl
        hover:scale-[1.03]
        transition-all
        duration-200
        py-5
        px-4
        border border-white/30
      "
    >
      <p className="text-sm text-gray-500 mb-2">{lunchTime[index]}</p>
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
    </button>
  );

  return (
    <main className="min-h-screen bg-[url('/background.webp')] bg-cover bg-center">
      <div className="w-full h-screen flex">
        <section className="w-1/2 flex items-center justify-center p-8">
          <div className="grid grid-cols-2 gap-5 w-full max-w-xl">
            {leftNames.map((name, index) => renderCard(name, index))}
          </div>
        </section>

        <section className="w-1/2 flex items-center justify-center p-10">
          <div className="grid grid-cols-2 gap-5 w-full max-w-xl">
            {rightNames.map((name, index) => renderCard(name, index + half))}
          </div>
        </section>
      </div>
    </main>
  );
};
