import styled from "styled-components";

import Icon from "src/modules/shared/UI/Icon";

export const IconsWrapper = styled.div`
  display: flex;
  margin-top: 15px;
  width: 100%;
`;

export const IconWrapper = styled.div`
  flex: 1;
`;

export const IconWithFlex = styled(Icon)`
  margin: 0 15%;
  width: 70%;
`;
