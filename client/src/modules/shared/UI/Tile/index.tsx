import React, { FC } from "react";

import {
  TileWrapper,
  TileTitle,
  TileText,
  TileIllustration,
  TileContent,
  TileIllustrationWrapper,
  TileOrdinalNumber,
} from "./components";
import { IllustrationType } from "src/modules/shared/UI/Illustration/config";

interface Props {
  title: string;
  text: string;
  illustrationType: IllustrationType;
  ordinalNumber?: number;
  view?: "horizontal" | "vertical";
  className?: string;
}

const Tile: FC<Props> = ({
  title,
  text,
  illustrationType,
  ordinalNumber,
  view = "horizontal",
  className,
}) => (
  <TileWrapper className={className} view={view}>
    <TileIllustrationWrapper>
      {ordinalNumber && <TileOrdinalNumber>{ordinalNumber}</TileOrdinalNumber>}
      <TileIllustration type={illustrationType} />
    </TileIllustrationWrapper>
    <TileContent>
      <TileTitle view={view}>{title}</TileTitle>
      <TileText view={view}>{text}</TileText>
    </TileContent>
  </TileWrapper>
);

export default Tile;
