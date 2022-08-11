import { CardDetailBody } from "../../styled/card/card-detail/body";
import { CardDetailContainer } from "../../styled/card/card-detail/container";
import { CardDetailHeader } from "../../styled/card/card-detail/header";
import { CardProps } from "./types";

export const CardDetail = ({ character }: CardProps): JSX.Element => {
  return (
    <CardDetailContainer>
      <CardDetailHeader>
        <p>{`${character.name} - ${character.location.name}`}</p>
      </CardDetailHeader>

      <CardDetailBody>
        <p>
          <strong>Species:</strong> {character.species}
        </p>
        <p>
          <strong>Planet:</strong> {character.location.name}
        </p>
        <p>
          <strong>Status:</strong> {character.status}
        </p>
        <p>
          <strong>Gender:</strong> {character.gender}
        </p>
        <p>
          <strong>Origin:</strong> {character.origin.name}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
          laboriosam reprehenderit, temporibus, aspernatur tenetur fugiat
          doloremque accusamus obcaecati perferendis provident hic ipsum atque,
          cum minus nemo ratione a deleniti eius!
        </p>
      </CardDetailBody>
    </CardDetailContainer>
  );
};
