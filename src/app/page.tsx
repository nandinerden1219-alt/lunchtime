import { LunchCard } from "@/components/LunchCard";
export default function Home() {
  const AgentNames = [
    "Аялгуу",
    "Хандаа",
    "Ариун",
    "Энхмаа",
    "Буянаа",
    "Маралгуа",
    "Номио",
    "Халиун",

    "Туяацэцэг",
    "Нандин-Эрдэнэ.Ж",
  ];

  return (
    <main className="w-full h-screen">
      <LunchCard agentNames={AgentNames} />
    </main>
  );
}
