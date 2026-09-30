import { notFound } from "next/navigation";
import { CARDS } from "@/data/cards";
import { CardView } from "@/components/CardView";

export function generateStaticParams() {
  return CARDS.map((_, i) => ({ n: String(i + 1) }));
}

export default async function LearnPage({ params }: { params: Promise<{ n: string }> }) {
  const { n } = await params;
  const index = Number(n) - 1;
  if (!Number.isInteger(index) || index < 0 || index >= CARDS.length) notFound();
  // key remounts the card so audio state resets when the card changes
  return <CardView key={index} index={index} />;
}
