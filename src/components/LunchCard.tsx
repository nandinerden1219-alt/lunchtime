export const LunchCard = ({ agentNames }: { agentNames: string[] }) => {
  const lunchTime = [
    "16:20 - 16:40",
    "16:20 - 16:40",
    "16:45 - 17:05",
    "16:45 - 17:05",
    "17:10 - 17:30",
    "17:10 - 17:30",
    "17:35 - 17:55",
    "17:35 - 17:55",
    "18:00 - 18:20",
    "18:00 - 18:20",
  ];

  return (
    <main className="min-h-screen bg-[url('/background.jpg')] bg-cover bg-center">
      <div className="w-full h-screen flex">
        {/* Left Side */}
        <section className="w-1/2 flex items-center justify-center p-10">
          <div className="grid grid-cols-2 gap-5 w-full max-w-xl">
            {agentNames.map((name, index) => (
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
            ))}
          </div>
        </section>

        {/* Right Side */}
        <section className="w-1/2"></section>
      </div>
    </main>
  );
};
