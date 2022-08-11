import { selectCharacter } from "../../../modules/characters/actions";
import { Character } from "../../../modules/characters/interfaces/character";
import { getCharacter } from "../../../modules/characters/selectors";
import { useAppDispatch, useAppSelector } from "../../../store";
import { CardContainer } from "../../styled/card/container";
import { CardGradient, BackgroundColorized } from "../../styled/card/gradient";
import { CardImage } from "../../styled/card/image";
import { CardDetail } from "./detail";
import { CardProps } from "./types";

export const Card = ({ character }: CardProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const selectedCharacter = useAppSelector(getCharacter);

  const handleSelectCharacter = (item: Character | null) => {
    dispatch(selectCharacter(item));
  };

  return (
    <CardContainer>
      <CardGradient
        onMouseOver={() => handleSelectCharacter(character)}
        onMouseOut={() => handleSelectCharacter(null)}
        backgroundOption={
          selectedCharacter
            ? selectedCharacter?.id === character.id
              ? BackgroundColorized.NONE
              : BackgroundColorized.FADE
            : BackgroundColorized.NONE
        }
      />
      <CardImage src={character.image} />

      {selectedCharacter?.id === character.id && (
        <CardDetail character={character} />
      )}
    </CardContainer>
  );
};
