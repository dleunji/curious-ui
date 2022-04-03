import styled from "styled-components";
import SubInfo from "../common/SubInfo";
import Responsive from "../common/Responsive";

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
`;

const PostHead = styled.div`
  border-bottom: 1px solid #c5c5c5;
  padding-bottom: 3rem;
  margin-bottom: 3rem;

  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
`;

const PostViewer = ({ post, error, loading }) => {
  if (error) {
    // error status에 따라 처리
    console.log(error);
    return <PostViewerBlock>오류</PostViewerBlock>;
  }

  if (loading || !post) {
    return null;
  }
  const { title, content, createdAt, updatedAt, viewedCnt, memberId } = post;
  return (
    <PostViewerBlock>
      <PostHead>
        <h1>{title}</h1>
        <SubInfo
          memberName={memberId}
          publishedDate={new Date(createdAt).toLocaleDateString()}
        />
      </PostHead>
      <PostContent dangerouslySetInnerHTML={{ __html: content }} />
    </PostViewerBlock>
  );
};

export default PostViewer;
