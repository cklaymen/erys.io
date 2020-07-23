import styled from "styled-components";

import colors from "src/modules/shared/UI/colors";
import {
  FLOAT_BUTTON_SIZE_IN_PX_EXTRA_SMALL,
  FLOAT_BUTTON_SIZE_IN_PX_MEDIUM,
  floatButtonHoverStyle,
  floatButtonFocusStyle,
} from "src/modules/Nav/FloatButton/components";
import media from "src/modules/shared/UI/media";
import FloatButton from "src/modules/Nav/FloatButton";
import { DEFAULT_TRANSITION_TIME } from "src/modules/shared/UI/config";

export const StyledFloatButton = styled(FloatButton)`
  position: absolute;
  left: 0;
  top: 0;
  box-shadow: none;
  border: 3px solid ${colors.white};
  margin-top: -3px;
  margin-left: -3px;
  width: ${FLOAT_BUTTON_SIZE_IN_PX_EXTRA_SMALL + 6}px;
  height: ${FLOAT_BUTTON_SIZE_IN_PX_EXTRA_SMALL + 6}px;

  ${media.medium`
    width: ${FLOAT_BUTTON_SIZE_IN_PX_MEDIUM + 6}px;
    height: ${FLOAT_BUTTON_SIZE_IN_PX_MEDIUM + 6}px;
  `}
`;

export const FloatButtonLabel = styled.div`
  text-align: right;
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: 2.2rem;
  font-weight: 600;
  color: ${colors.white};
  padding: 0 ${FLOAT_BUTTON_SIZE_IN_PX_EXTRA_SMALL / 2}px 0
    ${FLOAT_BUTTON_SIZE_IN_PX_EXTRA_SMALL * 1.25}px;
  transition: all ${DEFAULT_TRANSITION_TIME};

  ${media.medium`
    padding: 0 ${FLOAT_BUTTON_SIZE_IN_PX_MEDIUM / 2}px 0
    ${FLOAT_BUTTON_SIZE_IN_PX_MEDIUM * 1.25}px;
  `}
`;

export const FloatButtonWithLabelContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: ${colors.black};
  border-radius: ${FLOAT_BUTTON_SIZE_IN_PX_EXTRA_SMALL / 2}px;
  height: ${FLOAT_BUTTON_SIZE_IN_PX_EXTRA_SMALL}px;
  max-width: ${FLOAT_BUTTON_SIZE_IN_PX_EXTRA_SMALL}px;
  min-width: ${FLOAT_BUTTON_SIZE_IN_PX_EXTRA_SMALL}px;
  user-select: none;
  transition: all ${DEFAULT_TRANSITION_TIME};
  overflow: hidden;

  ${media.medium`
    height: ${FLOAT_BUTTON_SIZE_IN_PX_MEDIUM}px;
    max-width: ${FLOAT_BUTTON_SIZE_IN_PX_MEDIUM}px;
    min-width: ${FLOAT_BUTTON_SIZE_IN_PX_MEDIUM}px;
    border-radius: ${FLOAT_BUTTON_SIZE_IN_PX_MEDIUM / 2}px;
  `}
`;

export const FloatButtonWithLabelWrapper = styled.div`
  position: relative;

  &:hover {
    & ${FloatButtonWithLabelContainer} {
      max-width: 400px;
      background-color: ${colors.lightBlack};
    }

    & ${StyledFloatButton} {
      ${floatButtonHoverStyle()};
    }
    & ${FloatButtonLabel} {
      transform: scale(1.05);
    }
  }

  &:active {
    opacity: 0.9;
    transform: scale(0.95);
  }

  &:focus {
    & ${FloatButtonWithLabelContainer} {
      max-width: 400px;
    }
    & ${StyledFloatButton} {
      ${floatButtonFocusStyle()};
    }
    & ${FloatButtonLabel} {
      transform: scale(1.05);
    }
  }
`;
