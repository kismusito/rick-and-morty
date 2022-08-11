import styled from "styled-components";

export enum BackgroundColorized {
  NONE,
  FADE,
}

interface Props {
  backgroundOption: BackgroundColorized;
}

const getBackgroundColor = (type: BackgroundColorized) => {
  if (type === BackgroundColorized.NONE) {
    return "#3c230138";
  }

  return "#000";
};

export const CardGradient = styled.div<Props>`
  background: linear-gradient(
      20deg,
      ${(props) => getBackgroundColor(props.backgroundOption)},
      ${(props) => getBackgroundColor(props.backgroundOption)}
    ),
    url("https://grainy-gradients.vercel.app/noise.svg");
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  cursor: pointer;
`;
