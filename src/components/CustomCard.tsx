import {User} from "../../types"
import CustomButton from "@/components/CustomButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import React from "react";


export default function CustomCard({ user }: { user: User }) {
  return (
    <Card className="w-full max-w-sm shadow-l shadow-stone-400">
      <CardHeader className="justify-center">
        <CardTitle className="justify-self-center">{user.name}</CardTitle>
        <CardDescription className="justify-self-center">{user.email}</CardDescription>
      </CardHeader>
      <CardContent className="self-center">
        <div className="text-sm text-stone-800">Works at: {user.company.name}</div>
      </CardContent>
      <CardFooter className="flex-row justify-center">
        <CustomButton>Learn more</CustomButton>
      </CardFooter>
    </Card>
  );
}

