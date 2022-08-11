import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const rootState = (state: RootState) => state.characters;

export const getCharactersItems = createSelector(
  rootState,
  (state) => state.items?.results
);

export const getCharactersPagination = createSelector(
  rootState,
  (state) => state.items?.info
);

export const getCharacter = createSelector(rootState, (state) => state.item);
