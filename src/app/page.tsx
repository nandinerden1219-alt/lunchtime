import { LunchCard } from "@/components/LunchCard";
export default function Home() {
  const AgentNames = [
    "Аялгуу",
    "Ариун",
    "Бат-Очир",
    "Энхмаа",
    "Нандин-Эрдэнэ.Т",
    "Буянаа",
    "Номио",
    "Халиун",
    "Маралгуа",
    "Хандаа",
    "Нандин-Эрдэнэ.Ж",
  ];

  return (
    <main className="w-full h-screen">
      <LunchCard agentNames={AgentNames} />
    </main>
  );
}
