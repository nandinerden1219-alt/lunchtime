import { LunchCard } from "@/components/LunchCard";
export default function Home() {
  const AgentNames = [
    "Аялгуу",
    "Буянаа",
    "Маралгуа",
    "Хандаа",
    "Энхмаа",
    "Ариун",
    "Номио",

    "Цагийн ажилтан",
  ];

  return (
    <main className="w-full h-screen">
      <LunchCard agentNames={AgentNames} />
    </main>
  );
}
