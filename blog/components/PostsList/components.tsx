import styled from "styled-components";

export const PostWrapper = styled.article`
  display: flex;
  & + & {
    margin-top: 50px;
  }
`;

const RoundImage = styled.div<{ url: string }>`
  border-radius: 50%;
  background: url(${(p) => p.url});
  background-size: cover;
  flex-shrink: 0;
`;

export const Poster = styled(RoundImage)`
  width: 130px;
  height: 130px;
  margin-right: 15px;
`;

export const Avatar = styled(RoundImage)`
  width: 30px;
  height: 30px;
  display: inline-block;
  margin-right: 5px;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
`;

export const PublishedDate = styled.time`
  white-space: nowrap;
`;

export const Title = styled.h2``;

export const Description = styled.p``;

export const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PostsListWrapper = styled.section``;
