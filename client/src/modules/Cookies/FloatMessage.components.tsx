import styled from "styled-components";
import {
  defaultPadding,
  defaultBorderRadius,
  defaultDropShadow,
  defaultClickable,
  defaultTextLink,
} from "src/modules/shared/UI/defaults";
import colors from "src/modules/shared/UI/colors";
import {
  FLOAT_BUTTON_MARGIN_IN_PX_EXTRA_SMALL,
  NAV_FLOAT_BUTTON_BAR_WIDTH_IN_PX_EXTRA_SMALL,
  FLOAT_BUTTON_MARGIN_IN_PX_MEDIUM,
  NAV_FLOAT_BUTTON_BAR_WIDTH_IN_PX_MEDIUM,
} from "src/modules/Nav/components";
import media from "src/modules/shared/UI/media";
import Icon from "src/modules/shared/UI/Icon";
import InternalLink from "src/modules/Routes/InternalLink";

export const CookiesFloatMessageWrapper = styled.div`
  ${defaultPadding()};
  ${defaultBorderRadius()};
  background-color: ${colors.lightGray};
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;

  bottom: ${FLOAT_BUTTON_MARGIN_IN_PX_EXTRA_SMALL}px;
  /* margin: ${FLOAT_BUTTON_MARGIN_IN_PX_EXTRA_SMALL}px; */

  ${media.get("extraSmall", "large")`
    ${defaultDropShadow()};
  `}
  ${media.get("extraSmall", "medium")`
    margin-right: ${
      NAV_FLOAT_BUTTON_BAR_WIDTH_IN_PX_EXTRA_SMALL -
      FLOAT_BUTTON_MARGIN_IN_PX_EXTRA_SMALL
    }px;
  `}
  ${media.medium`
    bottom: ${FLOAT_BUTTON_MARGIN_IN_PX_MEDIUM}px;
    /* margin: ${FLOAT_BUTTON_MARGIN_IN_PX_MEDIUM}px; */
    /* margin-right: ${NAV_FLOAT_BUTTON_BAR_WIDTH_IN_PX_MEDIUM}px; */
  `}
  ${media.large`
    /* margin-left: calc(50% - ${
      NAV_FLOAT_BUTTON_BAR_WIDTH_IN_PX_MEDIUM / 2
    }px + 1.5vw); */
    border: 3px solid ${colors.white};
  `}
`;

export const CloseIcon = styled(Icon).attrs({ type: "Close" })`
  ${defaultClickable()};
  height: 28px;
  width: 28px;
  margin-left: 15px;
  &:hover {
    color: ${colors.lightBlack};
  }
`;

export const Link = styled(InternalLink)`
  display: inline;
  ${defaultTextLink()};
`;
