import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchFilms } from "../filmsData";

interface CardsState {
  cards: any[];
  liked: string[];
  loading: boolean;
  error: null | string;
  data: string[];
}

const initialState: CardsState = {
  cards: [],
  liked: [],
  loading: false,
  error: null,
  data: [],
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    cardAdded(state, action: PayloadAction<string>) {
      state.cards.push(action.payload);
    },
    cardDeleted: (state, action: PayloadAction<string>) => {
      const index = state.data.findIndex((card) => card === action.payload);
      if (index !== -1) {
        state.data.splice(index, 1);
      }
    },
    toggleLike(state, action: PayloadAction<string>) {
      const id = action.payload;
      if (state.liked.includes(id)) {
        state.liked = state.liked.filter((fid) => fid !== id);
      } else {
        state.liked.push(id);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchFilms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch films";
      });
  },
});

export const { cardAdded, cardDeleted, toggleLike } = cardsSlice.actions;
export default cardsSlice.reducer;
