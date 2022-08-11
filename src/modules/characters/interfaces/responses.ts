import { Pagination } from "../../../utils/interfaces/pagination";
import { Character } from "./character";

export type GetCharactersResponse = {
    info: Pagination;
    results: Character[] | [];
  };