import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CardsState {
  cards: any[];
  likedIds: string[];
  loading: boolean;
  error: null | string;
  data: string[];
}

const initialState: CardsState = {
  cards: [],
  likedIds: [],
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
      if (state.likedIds.includes(id)) {
        state.likedIds = state.likedIds.filter((fid) => fid !== id);
      } else {
        state.likedIds.push(id);
      }
    },
  },
});

export const { cardAdded, cardDeleted, toggleLike } = cardsSlice.actions;
export default cardsSlice.reducer;
