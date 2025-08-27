"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store/store";
import { toggleLike } from "../app/store/slices/CardsSlice";
import { Film } from "../../types";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import ActionButton from "./ActionButton";
import trashIcon from "@/../public/trash-icon.svg";
import unlikedIcon from "@/../public/unliked-icon.svg";
import likedIcon from "@/../public/liked-icon.svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card";
import React from "react";

export default function CustomCard({ film }: { film: Film }) {
  const dispatch = useDispatch();
  const liked = useSelector((state: RootState) =>
    state.cards.likedIds.includes(film.id)
  );

  return (
    <Card className="w-full max-w-xs p-6 shadow-lg shadow-stone-400">
      <CardAction className="w-full flex flex-row justify-between">
        <ActionButton onClick={() => dispatch(toggleLike(film.id))}>
          <Image
            src={liked ? likedIcon : unlikedIcon}
            alt={liked ? "Remove from likes" : "Add to likes"}
            width={24}
            height={24}
          />
        </ActionButton>
        <ActionButton>
          <Image src={trashIcon} alt="Move to trash" width={24} height={24} />
        </ActionButton>
      </CardAction>
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
