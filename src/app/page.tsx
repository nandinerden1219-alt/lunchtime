import { LunchCard } from "@/components/LunchCard";
export default function Home() {
  const AgentNames = [
    "Ариун",
    "Энхүүш",
    "Уянга",
    "Маралгуа",
    "Хандаа",
    "Бат-Очир",
    "Энхмаа",
    "Нандин-Эрдэнэ.Т",
    "Буянаа",
    "Номио",
    "Халиун",
    "Аялгуу",
    "Нандин-Эрдэнэ.Ж",
  ];

  return (
    <main className="w-full h-screen">
      <LunchCard agentNames={AgentNames} />
    </main>
  );
}
