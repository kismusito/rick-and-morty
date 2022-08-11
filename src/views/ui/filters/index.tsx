import { Gender, Status } from "modules/characters/interfaces/character";
import { FilterContainer } from "views/styled/filters/container";
import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "store";
import { getCharactersPagination } from "modules/characters/selectors";
import { Pagination } from "views/styled/pagination";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

type Params = {
  [key: string]: string;
};

export const Filters = (): JSX.Element => {
  const paginationOptions = useAppSelector(getCharactersPagination);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchParams = (key: string, value: string) => {
    const prevParams: Params = {};
    searchParams.forEach((item, key) => {
      prevParams[key] = item;
    });
    setSearchParams({ ...prevParams, [key]: value });
  };

  return (
    <FilterContainer>
      <TextField
        placeholder="name"
        fullWidth
        style={{ marginBottom: 20 }}
        onChange={({ target }) => handleSearchParams("name", target.value)}
        value={searchParams.get("name") || ""}
        sx={{ backgroundColor: "#fff" }}
      />

      <FormControl fullWidth>
        <Select
          onChange={({ target }) => handleSearchParams("gender", target.value)}
          defaultValue={searchParams.get("gender") || ""}
          fullWidth
          displayEmpty
          style={{ marginBottom: 20 }}
          sx={{ backgroundColor: "#fff" }}
        >
          <MenuItem value="">
            <p>Gender</p>
          </MenuItem>
          {Object.values(Gender).map((value) => (
            <MenuItem value={value}>{value}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <Select
          onChange={({ target }) => handleSearchParams("status", target.value)}
          defaultValue={searchParams.get("status") || ""}
          fullWidth
          displayEmpty
          style={{ marginBottom: 20 }}
          sx={{ backgroundColor: "#fff" }}
        >
          <MenuItem value="">
            <p>Status</p>
          </MenuItem>
          {Object.values(Status).map((value) => (
            <MenuItem value={value}>{value}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <Pagination
        pageCount={paginationOptions?.pages || 0}
        onPageChange={({ selected }) =>
          handleSearchParams("page", Number(selected + 1).toString())
        }
        initialPage={Number(searchParams.get("page")) || 1}
        previousLabel="<"
        nextLabel=">"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageRangeDisplayed={2}
        containerClassName="pagination"
        activeClassName="active"
        disableInitialCallback={true}
      />
    </FilterContainer>
  );
};
