import styled from "styled-components";

import colors from "src/modules/shared/UI/colors";
import media from "src/modules/shared/UI/media";

const RoundImage = styled.div<{ src: string }>`
  background-image: url(${(p) => p.src});
  background-position: center center;
  background-size: cover;
  border-radius: 50%;
  flex-shrink: 0;
`;

export const ArticleDetailsWrapper = styled.header`
  border-radius: 200px;
  overflow: hidden;
  display: flex;
  align-items: center;
  background-color: ${colors.lightGray};
  margin-bottom: 5px;
`;

export const Poster = styled(RoundImage)`
  width: 40%;
  padding-bottom: 40%;
  margin: -5px 0 -5px -5px;
  border: 5px solid ${colors.white};
`;

export const Details = styled.div`
  padding: 0 15px;
  width: 60%;
  box-sizing: border-box;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;

  ${media.medium`
    font-size: 1.3rem;
  `}
`;

export const Avatar = styled(RoundImage)`
  width: 25px;
  height: 25px;
  margin-right: 10px;

  ${media.medium`
    width: 40px;
    height: 40px;
  `}
`;

export const PublishedDate = styled.time`
  font-size: 1rem;
  margin-left: 35px;
  display: block;

  ${media.medium`
    margin-left: 50px;
  `}
`;

export const TagsWrapper = styled.div`
  margin-top: 15px;
  margin-right: 20px;
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: -1px;
    right: 0;
    top: 0;
    bottom: 0;
    box-shadow: inset -10px 0 5px -5px ${colors.lightGray},
      inset 10px 0 5px -5px ${colors.lightGray};
    pointer-events: none;
  }
`;

export const Scrollable = styled.div`
  overflow-x: auto;
  white-space: nowrap;
`;

export const Tag = styled.span`
  display: inline-block;
  padding: 2px 15px;
  border-radius: 15px;
  margin: 5px;
  background-color: ${colors.lightBlack};
  color: ${colors.white};
  font-size: 1rem;
`;
