import { LunchCard } from "@/components/LunchCard";
export default function Home() {
  const AgentNames = [
    "Маралгуа",
    "Хандаа",
    "Энхмаа",
    "Ариун",
    "Номио",
    "Аялгуу",
    "Буянаа",
    "Цагийн ажилтан",
  ];

  return (
    <main className="w-full h-screen">
      <LunchCard agentNames={AgentNames} />
    </main>
  );
}
