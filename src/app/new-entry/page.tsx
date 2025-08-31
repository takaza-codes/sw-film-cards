"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { cardAdded } from "../store/slices/CardsSlice";
import { Film } from "../../../types";
import { RootState } from "../store/store";
import CustomButton from "@/components/CustomButton";

export default function AddFilmForm() {
  const dispatch = useDispatch();
  const films = useSelector((state: RootState) => state.cards.cards);

  type NewFilmInput = Omit<Film, "id">;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewFilmInput>();

  const onSubmit = (data: NewFilmInput) => {
    const maxId = films.length
      ? Math.max(...films.map((film: Film) => Number(film.id)))
      : 0;

    const newFilm: Film = {
      id: (maxId + 1).toString(),
      ...data,
    };

    dispatch(cardAdded(newFilm));
    alert("New film added");
    console.log("New film added:", newFilm);
    reset();
  };

  return (
    <main className="mt-6 flex flex-col flex-1">
      <h1 className="my-10 text-3xl text-stone-800 font-bold text-center ">
        Create your own entry
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="mx-auto grid grid-cols-[30% 1fr] gap-4 text-2xl max-w-2xl p-4">
        <label>Title:</label>
        <input
          {...register("title", { required: "Title is required" })}
          type="text"
          className="form-input"
        />
        {errors.title && <p className="error-msg">{errors.title.message}</p>}

        <label>Episode ID:</label>
        <input
          {...register("episode_id", {
            required: "Episode ID is required",
            valueAsNumber: true,
            min: { value: 1, message: "Episode ID must be positive" },
          })}
          type="number"
          className="form-input"
        />
        {errors.episode_id && (
          <p className="error-msg">{errors.episode_id.message}</p>
        )}

        <label>Opening:</label>
        <textarea
          {...register("opening_crawl", {
            required: "Opening crawl is required",
          })}
          className="form-input"
        />
        {errors.opening_crawl && (
          <p className="error-msg">{errors.opening_crawl.message}</p>
        )}

        <label>Director:</label>
        <input
          {...register("director", { required: "Director is required" })}
          type="text"
          className="form-input"
        />
        {errors.director && (
          <p className="error-msg">{errors.director.message}</p>
        )}

        <label>Producer:</label>
        <input
          {...register("producer", { required: "Producer is required" })}
          type="text"
          className="form-input"
        />
        {errors.producer && (
          <p className="error-msg">{errors.producer.message}</p>
        )}

        <CustomButton
          type="submit"
          className="custom-button col-start-1 col-end-3 justify-self-center mt-4">
          Add film
        </CustomButton>
      </form>
    </main>
  );
}
