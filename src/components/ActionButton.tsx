import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

export default function ActionButton({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <Button
      className="w-7 h-7 p-0 bg-transparent border-0 shadow-none hover:bg-transparent cursor-pointer"
      onClick={onClick}>
      {children}
    </Button>
  );
}
