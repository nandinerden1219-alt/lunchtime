import { LunchCard } from "@/components/LunchCard";
export default function Home() {
  const AgentNames = [
    "Ариун",
    "Номио",
    "Аялгуу",
    "Буянаа",
    "Маралгуа",
    "Хандаа",
    "Энхмаа",

    "Цагийн ажилтан",
  ];

  return (
    <main className="w-full h-screen">
      <LunchCard agentNames={AgentNames} />
    </main>
  );
}
