import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container flex h-screen flex-col items-center justify-center gap-y-4">
      <h1 className="text-4xl font-bold text-gray-700">PROJECT TEMPLATE</h1>
      <h3 className="text-2xl font-semibold text-gray-400">
        Next.js 14.1.4 + Tailwind + shadcn/ui
      </h3>
      <Button>Click me</Button>
    </div>
  );
}
