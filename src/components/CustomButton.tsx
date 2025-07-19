import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

export default function CustomButton({ children }: { children: ReactNode }) {
  return (
    <Button className="bg-violet-100 shadow-md shadow-violet-200/50 hover:bg-pink-200 hover:text-white hover:border-transparent text-stone-800 border border-stone-600 py-4 px-6 rounded">
      {children}
    </Button>
  );
}
