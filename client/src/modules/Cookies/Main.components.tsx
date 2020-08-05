import styled from "styled-components";
import { defaultTextLink } from "src/modules/shared/UI/defaults";
import ExternalLink from "src/modules/shared/ExternalLink";

export const CookiesMainWrapper = styled.div``;

export const Link = styled(ExternalLink)`
  ${defaultTextLink()}
  word-break: break-word;
`;
