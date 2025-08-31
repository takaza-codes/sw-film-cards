"use client";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store/store";
import { toggleLike, cardDeleted } from "../app/store/slices/CardsSlice";
import { Film } from "../../types";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import trashIcon from "@/../public/icons/trash-icon.svg";
import unlikedIcon from "@/../public/icons/unliked-icon.svg";
import likedIcon from "@/../public/icons/liked-icon.svg";
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
  const router = useRouter();
  const liked = useSelector((state: RootState) =>
    state.cards.liked.includes(film.id)
  );

  const handleCardClick = () => {
    router.push(`/films/${film.id}`);
  };

  return (
    <Card
      className="w-full max-w-xs p-6 shadow-lg shadow-stone-400 cursor-pointer"
      onClick={handleCardClick}>
      <CardAction className="w-full flex flex-row justify-between">
        <CustomButton
          className="action-button"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(toggleLike(film.id));
          }}>
          <Image
            src={liked ? likedIcon : unlikedIcon}
            alt={liked ? "Remove from likes" : "Add to likes"}
            width={24}
            height={24}
          />
        </CustomButton>
        <CustomButton
          className="action-button"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(cardDeleted(film.id));
          }}>
          <Image src={trashIcon} alt="Move to trash" width={24} height={24} />
        </CustomButton>
      </CardAction>
      <CardHeader className="text-xl text-center">
        <CardTitle>{film.title}</CardTitle>
        <CardDescription className="justify-self-center">
          Episode {film.episode_id}
        </CardDescription>
      </CardHeader>
      <CardContent className="self-center">
        <div className="relative w-65 h-100 mb-4 rounded-md mx-auto overflow-hidden">
          <Image
            src={film.image || "/logo.png"}
            alt={film.title}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md"
            sizes="200px"
            priority={false}
          />
        </div>
        <div className="text-sm text-stone-800">Director: {film.director}</div>
      </CardContent>
      <CardFooter className="flex-row justify-center">
        <CustomButton className="custom-button" onClick={handleCardClick}>
          Learn more
        </CustomButton>
      </CardFooter>
    </Card>
  );
}
