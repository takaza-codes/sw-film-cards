// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { fetchFilms } from "../filmsData";

// interface CardsState {
//   cards: any[];
//   liked: string[];
//   loading: boolean;
//   error: null | string;
//   data: string[];
// }

// const initialState: CardsState = {
//   cards: [],
//   liked: [],
//   loading: false,
//   error: null,
//   data: [],
// };

// const cardsSlice = createSlice({
//   name: "cards",
//   initialState,
//   reducers: {
//     cardAdded(state, action: PayloadAction<string>) {
//       state.cards.push(action.payload);
//     },
//     cardDeleted: (state, action: PayloadAction<string>) => {
//       state.data = state.data.filter((film: any) => film.id !== action.payload);
//     },
//     toggleLike(state, action: PayloadAction<string>) {
//       const id = action.payload;
//       if (state.liked.includes(id)) {
//         state.liked = state.liked.filter((fid) => fid !== id);
//       } else {
//         state.liked.push(id);
//       }
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchFilms.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchFilms.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(fetchFilms.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || "Failed to fetch films";
//       });
//   },
// });

// export const { cardAdded, cardDeleted, toggleLike } = cardsSlice.actions;
// export default cardsSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchFilms } from "../filmsData";
import { Film } from "../../../../types";

interface CardsState {
  cards: Film[];
  liked: string[];
  loading: boolean;
  error: null | string;
}

const initialState: CardsState = {
  cards: [],
  liked: [],
  loading: false,
  error: null,
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    cardAdded(state, action: PayloadAction<Film>) {
      state.cards.push(action.payload);
    },
    cardDeleted(state, action: PayloadAction<string>) {
      state.cards = state.cards.filter((film) => film.id !== action.payload);
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
      .addCase(fetchFilms.fulfilled, (state, action: PayloadAction<Film[]>) => {
        state.loading = false;
        state.cards = action.payload;
      })
      .addCase(fetchFilms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch films";
      });
  },
});

export const { cardAdded, cardDeleted, toggleLike } = cardsSlice.actions;
export default cardsSlice.reducer;
