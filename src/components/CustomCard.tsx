import { Film } from "../../types";
import Link from "next/link";
import CustomButton from "@/components/CustomButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

export default function CustomCard({ film }: { film: Film }) {
  return (
    <Card className="w-full max-w-xs shadow-lg shadow-stone-400">
      <CardHeader className="text-xl text-center">
        <CardTitle>{film.title}</CardTitle>
        <CardDescription className="justify-self-center">
          Episode {film.episode_id}
        </CardDescription>
      </CardHeader>
      <CardContent className="self-center">
        <div className="text-sm text-stone-800">Director: {film.director}</div>
      </CardContent>
      <CardFooter className="flex-row justify-center">
        <Link href={`/films/${film.id}`}>
          <CustomButton>Learn more</CustomButton>
        </Link>
      </CardFooter>
    </Card>
  );
}
