import { createSlice } from "@reduxjs/toolkit";
import { Character } from "./interfaces/character";
import { characterPrefix } from "./types";
import { GetCharactersResponse } from "./interfaces/responses";
import { getCharacters, selectCharacter } from "./actions";

type InitialState = {
  items: GetCharactersResponse | null;
  item: Character | null;
  loading: boolean;
};

const initialState: InitialState = {
  items: null,
  item: null,
  loading: false,
};

const characterSlice = createSlice({
  name: characterPrefix,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(selectCharacter, (state, action) => {
      state.item = action.payload;
    });
    builder.addCase(getCharacters.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    });
  },
});

export default characterSlice.reducer;
