import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { charactersType } from "./types";
import axios from "axios";
import { GetCharactersResponse } from "./interfaces/responses";
import { Character, Gender, Status } from "./interfaces/character";

type Options = {
  name?: string | null;
  status?: Status | null;
  gender?: Gender | null;
  page?: string | null;
};

export const getCharacters = createAsyncThunk<GetCharactersResponse, Options>(
  charactersType.GET_CHARACTERS,
  async ({ name, gender, status, page }: Options, thunkApi) => {
    try {
      const getData = await axios.get(
        `${process.env.REACT_APP_API_URL}/character`,
        { params: { name, gender, status, page } }
      );
      return getData.data;
    } catch (error) {
      throw thunkApi.rejectWithValue(error);
    }
  }
);

export const selectCharacter = createAction<Character | null>(
  charactersType.SELECT_CHARACTER
);
