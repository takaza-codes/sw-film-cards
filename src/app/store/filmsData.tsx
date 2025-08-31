import { createAsyncThunk } from "@reduxjs/toolkit";
import { Film } from "../../../types";

const localImages = [
  "/filmImages/image1.jpg",
  "/filmImages/image2.jpg",
  "/filmImages/image3.jpg",
  "/filmImages/image4.jpg",
  "/filmImages/image5.jpg",
  "/filmImages/image6.jpg",
];

export const fetchFilms = createAsyncThunk("films/fetchFilms", async () => {
  const response = await fetch("https://swapi.info/api/films");
  if (!response.ok) {
    throw new Error(`Request error: ${response.status}`);
  }
  const data = await response.json();
  return data.map((film: Film, idx: number) => ({
    ...film,
    id: (idx + 1).toString(),
    image: localImages[idx] || "/logo.png",
  }));
});
