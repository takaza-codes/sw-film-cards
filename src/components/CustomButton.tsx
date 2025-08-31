import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

export default function CustomButton({
  children,
  onClick,
  className,
  type,
}: {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <Button className={className} onClick={onClick} type={type}>
      {children}
    </Button>
  );
}
