import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

export default function CustomButton({ children }: { children: ReactNode }) {
  return (
    <Button className="bg-stone-300 shadow-md shadow-violet-300/50 hover:bg-violet-800 hover:text-white hover:border-transparent text-stone-800 border border-stone-600 py-4 px-6 rounded">
      {children}
    </Button>
  );
}
