import React, { FC } from "react";

import {
  TileWrapper,
  TileTitle,
  TileText,
  TileIllustration,
  TileContent,
  TileIllustrationWrapper,
} from "./components";
import { IllustrationType } from "src/modules/shared/UI/Illustration/config";

interface Props {
  title: string;
  text: string;
  illustrationType: IllustrationType;
  className?: string;
}

const Tile: FC<Props> = ({ title, text, illustrationType, className }) => (
  <TileWrapper className={className}>
    <TileIllustrationWrapper>
      <TileIllustration type={illustrationType} />
    </TileIllustrationWrapper>
    <TileContent>
      <TileTitle>{title}</TileTitle>
      <TileText>{text}</TileText>
    </TileContent>
  </TileWrapper>
);

export default Tile;
