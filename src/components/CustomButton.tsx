import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

export default function CustomButton({
  children,
  onClick,
  className,
}: {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}) {
  return (
    <Button className={className} onClick={onClick}>
      {children}
    </Button>
  );
}
