import colors from "src/modules/shared/UI/colors";
import { DEFAULT_TRANSITION_TIME } from "src/modules/shared/UI/config";
import { defaultAppearanceAnimationSequence } from "src/modules/shared/UI/defaults";
import media from "src/modules/shared/UI/media";
import styled from "styled-components";

const SIDE_WIDTH_EXTRA_SMALL_IN_PX = 120;
const SIDE_WIDTH_MEDIUM_IN_PX = 130;
const SIDE_WIDTH_EXTRA_LARGE_IN_PX = 140;

export const ArticleWrapper = styled.article<{ ordinalNumber?: number }>`
  ${(p) => defaultAppearanceAnimationSequence(p.ordinalNumber)};
  & header {
    display: flex;
  }
  & + & {
    margin-top: 40px;
  }

  ${media.medium`
    & + & {
      margin-top: 80px;
    }
  `}
`;

const RoundImage = styled.div<{ url: string }>`
  border-radius: 50%;
  background: url(${(p) => p.url});
  background-size: cover;
`;

export const Poster = styled(RoundImage)`
  width: 100%;
  height: ${SIDE_WIDTH_EXTRA_SMALL_IN_PX}px;
  margin-right: 15px;

  ${media.medium`
    height: ${SIDE_WIDTH_MEDIUM_IN_PX}px;
  `}
  ${media.extraLarge`
    height: ${SIDE_WIDTH_EXTRA_LARGE_IN_PX}px;
  `}
`;

export const Avatar = styled(RoundImage)`
  width: 30px;
  height: 30px;
  display: inline-block;
  margin: -3px 5px -3px -3px;
  border: 3px solid ${colors.lightYellow};
  flex-shrink: 0;

  ${media.extraLarge`
    width: 35px;
    height: 35px;
  `}
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
`;

export const PublishedDate = styled.time`
  white-space: nowrap;
  color: ${colors.white};
`;

export const Title = styled.h2`
  margin-top: 0;
`;

export const Description = styled.p`
  margin-bottom: 0;
`;

export const Bar = styled.div`
  display: flex;
  align-items: center;
  margin-top: -30px;
  border-radius: 20px;
  background-color: ${colors.lightBlack};
`;

export const Side = styled.div`
  width: ${SIDE_WIDTH_EXTRA_SMALL_IN_PX}px;
  flex-shrink: 0;
  margin-right: 15px;

  ${media.medium`
    width: ${SIDE_WIDTH_MEDIUM_IN_PX}px;
    margin-right: 23px;
  `}
  ${media.extraLarge`
    width: ${SIDE_WIDTH_EXTRA_LARGE_IN_PX}px;
  `}
`;

export const Content = styled.div``;

export const ArticlesListWrapper = styled.section`
  & ${ArticleWrapper} {
    transition: all ${DEFAULT_TRANSITION_TIME};
  }
  & ${ArticleWrapper}:hover {
    transform: scale(1.02);
    /* filter: drop-shadow(0 10px 5px ${colors.lightBlack}); */
  }
`;
