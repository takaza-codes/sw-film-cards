import { createAsyncThunk } from "@reduxjs/toolkit";
import { Film } from "../../../types";

export const fetchFilms = createAsyncThunk("films/fetchFilms", async () => {
  const response = await fetch("https://swapi.info/api/films");
  if (!response.ok) {
    throw new Error(`Request error: ${response.status}`);
  }
  const data = await response.json();
  return data.map((film: Film, idx: number) => ({
    ...film,
    id: (idx + 1).toString(),
  }));
});
