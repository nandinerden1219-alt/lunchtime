import { LunchCard } from "@/components/LunchCard";
export default function Home() {
  const AgentNames = [
    "Энхүүш",
    "Уянга",
    "Маралгуа",
    "Хандаа",
    "Цэрэнтогтох",
    "Бат-Очир",
    "Ариун",
    "Энхмаа",
    "Нандин-Эрдэнэ.Т",
    "Туяацэцэг",
    "Номио",
    "Халиун",
    "Түмээ",
    "Буянаа",
    "Батсувд",
    "Аялгуу",
    "Нандин-Эрдэнэ.Ж",
    "Бадамхатан",
    "Лхагвасүрэн",
    "Мягмарсүрэн",
    "Өсөхөө",
  ];

  return (
    <main className="w-full h-screen">
      <LunchCard agentNames={AgentNames} />
    </main>
  );
}
