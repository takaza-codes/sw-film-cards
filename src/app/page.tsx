"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Film } from "../../types";
import { fetchFilms } from "./store/filmsData";
import { loadSavedState } from "./store/slices/CardsSlice";
import CustomCard from "@/components/CustomCard";
import CustomButton from "@/components/CustomButton";
import { AppDispatch, RootState } from "./store/store";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { cards, liked, error } = useSelector(
    (state: RootState) => state.cards
  );
  const [showLikes, setShowLikes] = useState(false);

  useEffect(() => {
    // if (typeof window !== "undefined") {
    try {
      const saved = sessionStorage.getItem("cardsState");
      if (saved) {
        const savedState = JSON.parse(saved);
        dispatch(loadSavedState(savedState));
      }
    } catch (error) {
      console.error("Failed to load saved state:", error);
    }
    // }

    dispatch(fetchFilms());
  }, [dispatch]);

  if (error) {
    return (
      <main className="mt-10 mb-10 flex-1 flex flex-col items-center justify-center text-fuchsia-700">
        <h1 className="text-4xl font-bold mb-4">Sorry!</h1>
        <p className="text-3xl">{error}</p>
      </main>
    );
  }

  const toggleShowLikes = () => {
    setShowLikes(!showLikes);
  };

  const films = showLikes
    ? cards.filter((film: Film) => liked.includes(film.id.toString()))
    : cards;

  return (
    <main className="m-10 flex-1 flex flex-wrap flex-col content-center gap-6">
      <h1 className="pt-8 pb-8 text-center font-bold text-3xl sm:text-4xl lg:text-5xl">
        We proudly present our lore!
      </h1>
      <p className="text-center text-sm mb-8 px-4">
        (as provided by{" "}
        <a href="https://swapi.info/" className="underline">
          SWAPI
        </a>
        )
      </p>
      <CustomButton
        onClick={toggleShowLikes}
        className="custom-button w-30 h-10 mr-0 self-center sm:mr-30 sm:self-end">
        {showLikes ? "Show all" : "Show liked"}
      </CustomButton>
      <div className="flex justify-center flex-wrap gap-8 xs:flex-col">
        {films.length === 0 ? (
          <p className="text-center text-xl mt-10 mb-10 text-gray-500">
            {showLikes
              ? "You don't have any liked films yet."
              : "No films available."}
          </p>
        ) : (
          films.map((film: Film) => <CustomCard key={film.id} film={film} />)
        )}
      </div>
    </main>
  );
}
