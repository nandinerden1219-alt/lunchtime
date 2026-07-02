import { LunchCard } from "@/components/LunchCard";
export default function Home() {
  const AgentNames = [
    "Аялгуу",
    "Хандаа",
    "Ариун",
    "Номио",
    "Буянаа",
    "Маралгуа",
    "Энхмаа",

    "Цагийн ажилтан",
  ];

  return (
    <main className="w-full h-screen">
      <LunchCard agentNames={AgentNames} />
    </main>
  );
}
