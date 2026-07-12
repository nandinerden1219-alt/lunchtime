export const LunchCard = ({ agentNames }: { agentNames: string[] }) => {
  const lunchTime = [
    "11:30 - 12:00",
    "11:30 - 12:00",
    "12:00 - 12:30",
    "12:00 - 12:30",
    "12:30 - 13:00",
    "12:30 - 13:00",
    "13:00 - 13:30",
    "13:00 - 13:30",
    "13:30 - 14:00",
    "13:30 - 14:00",
  ];

  const half = Math.ceil(agentNames.length / 2);
  const leftNames = agentNames.slice(0, half);
  const rightNames = agentNames.slice(half);

  const renderCard = (name: string, index: number) => (
    <button
      key={name}
      className="
        rounded-xl
        bg-white/85
        backdrop-blur-md
        shadow-md
        hover:shadow-lg
        hover:scale-[1.03]
        transition-all
        duration-200
        py-2
        px-3
        border border-white/30
      "
    >
      <p className="text-xs text-gray-500 mb-0.5">{lunchTime[index]}</p>
      <h3 className="text-sm font-semibold text-gray-800">{name}</h3>
    </button>
  );

  return (
    <main className="min-h-screen bg-[url('/download.png')] bg-cover bg-center ">
      <div className="w-full h-screen flex justify-between gap-20 p-50 pb-20">
        {/* Left */}
        <div className="grid grid-cols-2 gap-5 h-fit">
          {leftNames.map((name, index) => renderCard(name, index))}
        </div>

        {/* Right */}
        <div className="grid grid-cols-2 gap-5 h-fit">
          {rightNames.map((name, index) => renderCard(name, index + half))}
        </div>
      </div>
    </main>
  );
};
