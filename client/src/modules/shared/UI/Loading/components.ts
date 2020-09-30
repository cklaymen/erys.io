import styled, { keyframes } from "styled-components";

import colors from "src/modules/shared/UI/colors";

const spin = keyframes`
  from {

  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const LoadingSpinner = styled.div`
  width: 28%;
  padding-bottom: 28%;
  border: 5px solid ${colors.black};
  border-top: 5px solid ${colors.yellow};
  border-radius: 50%;
  animation: ${spin} 1s infinite linear;
`;
