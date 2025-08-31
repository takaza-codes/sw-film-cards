import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchFilms } from "../filmsData";
import { Film } from "../../../../types";

interface CardsState {
  cards: Film[];
  liked: string[];
  loading: boolean;
  error: null | string;
  deletedIds: string[];
  isInitialized: boolean;
}

const initialState: CardsState = {
  cards: [],
  liked: [],
  loading: false,
  error: null,
  deletedIds: [],
  isInitialized: false,
};

const loadFromSessionStorage = (): Partial<CardsState> => {
  if (typeof window === "undefined") return {};

  try {
    const saved = sessionStorage.getItem("cardsState");
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
};

const saveToSessionStorage = (state: CardsState) => {
  if (typeof window === "undefined") return;

  try {
    sessionStorage.setItem(
      "cardsState",
      JSON.stringify({
        cards: state.cards,
        liked: state.liked,
        deletedIds: state.deletedIds,
        isInitialized: state.isInitialized,
      })
    );
  } catch {
    return;
  }
};

const cardsSlice = createSlice({
  name: "cards",
  initialState: { ...initialState, ...loadFromSessionStorage() },
  reducers: {
    cardAdded(state, action: PayloadAction<Film>) {
      state.cards.push(action.payload);
      saveToSessionStorage(state);
    },
    cardDeleted(state, action: PayloadAction<string>) {
      const cardId = action.payload;

      state.cards = state.cards.filter((film) => film.id !== cardId);

      if (!state.deletedIds.includes(cardId)) {
        state.deletedIds.push(cardId);
      }

      state.liked = state.liked.filter((id) => id !== cardId);

      saveToSessionStorage(state);
    },
    toggleLike(state, action: PayloadAction<string>) {
      const id = action.payload;
      if (state.liked.includes(id)) {
        state.liked = state.liked.filter((fid) => fid !== id);
      } else {
        state.liked.push(id);
      }
      saveToSessionStorage(state);
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

        if (!state.isInitialized) {
          state.cards = action.payload;
          state.isInitialized = true;
        } else {
          const apiCards = action.payload.filter(
            (film) => !state.deletedIds.includes(film.id)
          );

          const userCards = state.cards.filter(
            (card) => !action.payload.some((apiCard) => apiCard.id === card.id)
          );

          state.cards = [...apiCards, ...userCards];
        }

        saveToSessionStorage(state);
      })
      .addCase(fetchFilms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch films";
        saveToSessionStorage(state);
      });
  },
});

export const { cardAdded, cardDeleted, toggleLike } = cardsSlice.actions;
export default cardsSlice.reducer;
