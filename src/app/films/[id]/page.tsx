"use client";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import FilmInfo from "@/components/FilmInfo";

export default function FilmPage() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const film = useSelector((state: RootState) =>
    state.cards.cards.find((film) => film.id === id)
  );

  return <FilmInfo film={film} />;
}
