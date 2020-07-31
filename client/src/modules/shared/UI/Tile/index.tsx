import React, { FC, ReactElement } from "react";

import {
  TileWrapper,
  TileTitle,
  TileDescription,
  TileIllustration,
  TileContent,
  TileIllustrationWrapper,
  TileOrdinalNumber,
} from "./components";
import { IllustrationType } from "src/modules/shared/UI/Illustration/config";

export interface TileProps {
  title: string;
  description: string | ReactElement;
  illustrationType: IllustrationType;
  ordinalNumber?: number;
  view?: "horizontal" | "vertical";
  className?: string;
}

const Tile: FC<TileProps> = ({
  title,
  description,
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
      <TileDescription view={view}>{description}</TileDescription>
    </TileContent>
  </TileWrapper>
);

export default Tile;
