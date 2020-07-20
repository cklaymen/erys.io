import styled from "styled-components";

import colors from "src/modules/shared/UI/colors";
import { defaultClickable } from "src/modules/shared/UI/defaults";

export const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 11;
  box-sizing: border-box;
  background-color: ${colors.black};
  color: ${colors.yellow};
  width: min(290px, 100vw);
`;

export const NavPages = styled.div`
  margin-top: 100px;
`;

export const NavLink = styled.a`
  ${defaultClickable()};
  display: block;
  padding: 10px 70px;
  font-weight: 600;
  font-size: 2.4rem;

  &:hover {
    -webkit-text-stroke: 1px ${colors.lightYellow};
    color: ${colors.lightYellow};
  }
`;
