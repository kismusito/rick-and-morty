import { Fragment, useEffect } from "react";
import { CardContainerGrid } from "views/styled/general/container";
import { getCharacters } from "modules/characters/actions";
import { getCharactersItems } from "modules/characters/selectors";
import { useAppDispatch, useAppSelector } from "store";
import { Card } from "views/ui/card";
import { Navbar } from "views/ui/navbar";
import { Filters } from "views/ui/filters";
import { useSearchParams } from "react-router-dom";
import { Gender, Status } from "modules/characters/interfaces/character";

const Dashboard = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const characters = useAppSelector(getCharactersItems);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(
      getCharacters({
        name: searchParams.get("name"),
        gender: searchParams.get("gender") as Gender,
        status: searchParams.get("status") as Status,
        page: searchParams.get("page"),
      })
    );
  }, [dispatch, searchParams]);

  return (
    <Fragment>
      <Navbar />

      <div style={{ display: "flex" }}>
        <CardContainerGrid>
          {characters?.map((character) => (
            <Card key={character.id} character={character} />
          ))}
        </CardContainerGrid>
        <Filters />
      </div>
    </Fragment>
  );
};

export default Dashboard;
