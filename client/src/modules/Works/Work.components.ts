import styled, { css } from "styled-components";

import colors from "src/modules/shared/UI/colors";
import Icon from "src/modules/shared/UI/Icon";
import { defaultBoxFocus } from "src/modules/shared/UI/defaults";
import media from "src/modules/shared/UI/media";

export const TechnologiesWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 15px;

  & * + * {
    margin-left: 15px;
  }

  ${media.medium`
    margin-top: 30px;
  `}
`;

export const TechnologyIcon = styled(Icon)`
  width: 28px;

  ${media.medium`
    width: 36px;
  `}
`;

export const WorkVideo = styled.video<{ isPlaying: boolean }>`
  max-width: 100%;
  margin: 0 auto;
  border-radius: 4px;
  display: block;
  box-sizing: border-box;

  ${(p) =>
    p.isPlaying
      ? css`
          border: 4px solid ${colors.lightYellow};
          &:focus {
            outline: none;
            ${defaultBoxFocus(colors.lightYellow)};
          }
        `
      : css`
          border: 4px solid ${colors.lightGray};
          &:focus {
            outline: none;
            ${defaultBoxFocus(colors.lightGray)};
          }
        `}
`;
