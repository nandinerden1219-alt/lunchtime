import { LunchCard } from "@/components/LunchCard";
export default function Home() {
  const AgentNames = [
    "Аялгуу",
    "Хандаа",
    "Энхмаа",
    "Ариун",
    "Номио",
    "Маралгуа",
    "Буянаа",
    "Цагийн ажилтан",
  ];

  return (
    <main className="w-full h-screen">
      <LunchCard agentNames={AgentNames} />
    </main>
  );
}
