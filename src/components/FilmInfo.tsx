import React from "react";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { Film } from "../../types";

type FilmInfoProps = {
  film: Film | undefined;
};

export default function FilmInfo({ film }: FilmInfoProps) {
  if (!film) {
    return <h1 className="text-3xl text-center">film not found</h1>;
  }

  const { title, episode_id, director, producer, opening_crawl } = film;

  return (
    <main className="m-10 flex-1 flex flex-wrap flex-col content-center gap-8 text-stone-700">
      <h3 className="text-3xl font-bold text-center">{title}</h3>
      <div className="max-w-3xl flex flex-col content-center gap-2 text-xl text-stone-700">
        <div>
          <span className="font-bold">Title: </span>
          {title}
        </div>
        <div>
          <span className="font-bold">Episode: </span>
          {episode_id}
        </div>
        <div>
          <span className="font-bold">Director: </span>
          {director}
        </div>
        <div>
          <span className="font-bold">Producer: </span>
          {producer}
        </div>
        <div>
          <span className="font-bold">Opening: </span>
          {opening_crawl}
        </div>
      </div>
      <div className="mt-8 self-center">
        <Link href="/">
          <CustomButton className="custom-button">Back to main</CustomButton>
        </Link>
      </div>
    </main>
  );
}
