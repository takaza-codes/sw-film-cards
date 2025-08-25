// import FilmInfo from "@/components/FilmInfo";
// import { Film } from "../../../../types";
// import { notFound } from "next/navigation";

// type Props = { params: Promise<{ id: string }> };

// async function getFilm(id: string): Promise<Film | null> {
//   try {
//     const response = await fetch(`https://swapi.info/api/films/${id}`);
//     if (!response.ok) return null;

//     const film: Film = await response.json();

//     return film;
//   } catch {
//     return null;
//   }
// }

// export default async function FilmPage({ params }: Props) {
//   const { id } = await params;
//   const film = await getFilm(params.id);

//   if (!film) notFound();

//   return <FilmInfo film={film} />;
// }

// export async function generateMetadata({ params }: Props) {
//   const { id } = await params;
//   const film = await getFilm(params.id);
//   return {
//     title: film?.title || "film",
//   };
// }

import FilmInfo from "@/components/FilmInfo";
import { Film } from "../../../../types";
import { notFound } from "next/navigation";

type Props = { params: { id: string } };

async function getFilm(id: string): Promise<Film | null> {
  try {
    const response = await fetch(`https://swapi.info/api/films/${id}`);
    if (!response.ok) return null;

    const film: Film = await response.json();

    return film;
  } catch {
    return null;
  }
}

export default async function FilmPage({ params }: Props) {
  const { id } = params;
  const film = await getFilm(id);

  if (!film) notFound();

  return <FilmInfo film={film} />;
}

export async function generateMetadata({ params }: Props) {
  const { id } = params;
  const film = await getFilm(id);
  return {
    title: film?.title || "film",
  };
}
