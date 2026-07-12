import { LunchCard } from "@/components/LunchCard";
export default function Home() {
  const AgentNames = [
    "Аялгуу",
    "Бат-Очир",
    "Ариун",
    "Энхмаа",
    "Буянаа",
    "Номио",
    "Халиун",
    "Маралгуа",
    "Хандаа",
    "Туяацэцэг",
    "Нандин-Эрдэнэ.Ж",
  ];

  return (
    <main className="w-full h-screen">
      <LunchCard agentNames={AgentNames} />
    </main>
  );
}
