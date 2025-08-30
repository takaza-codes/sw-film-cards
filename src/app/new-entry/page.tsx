"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { cardAdded } from "../store/slices/CardsSlice";
import { Film } from "../../../types";
import { RootState } from "../store/store";

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
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div>
        <label>Title:</label>
        <input
          {...register("title", { required: "Title is required" })}
          type="text"
        />
        {errors.title && <p style={{ color: "red" }}>{errors.title.message}</p>}
      </div>

      <div>
        <label>Episode ID:</label>
        <input
          {...register("episode_id", {
            required: "Episode ID is required",
            valueAsNumber: true,
            min: { value: 1, message: "Episode ID must be positive" },
          })}
          type="number"
        />
        {errors.episode_id && (
          <p style={{ color: "red" }}>{errors.episode_id.message}</p>
        )}
      </div>

      <div>
        <label>Opening Crawl:</label>
        <textarea
          {...register("opening_crawl", {
            required: "Opening crawl is required",
          })}
        />
        {errors.opening_crawl && (
          <p style={{ color: "red" }}>{errors.opening_crawl.message}</p>
        )}
      </div>

      <div>
        <label>Director:</label>
        <input
          {...register("director", { required: "Director is required" })}
          type="text"
        />
        {errors.director && (
          <p style={{ color: "red" }}>{errors.director.message}</p>
        )}
      </div>

      <div>
        <label>Producer:</label>
        <input
          {...register("producer", { required: "Producer is required" })}
          type="text"
        />
        {errors.producer && (
          <p style={{ color: "red" }}>{errors.producer.message}</p>
        )}
      </div>

      <button type="submit">Add Film</button>
    </form>
  );
}
