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
    "Номио",
    "Халиун",
    "Буянаа",
    "Аялгуу",
    "Нандин-Эрдэнэ.Ж",
  ];

  return (
    <main className="w-full h-screen">
      <LunchCard agentNames={AgentNames} />
    </main>
  );
}
