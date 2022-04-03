import styled from "styled-components";
import Responsive from "../common/Responsive";
import Button from "../common/Button";
import SubInfo from "../common/SubInfo";
import { Link } from "react-router-dom";
const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;

  // 맨위 포스트는 padding-top 없음
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid #c5c5c5;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: #f27983;
    }
  }

  p {
    margin-top: 2rem;
  }
`;

const PostItem = ({ post }) => {
  const {
    questionId,
    title,
    content,
    createdAt,
    updatedAt,
    viewedCnt,
    memberId,
  } = post;
  return (
    <Link to={`/questions/${questionId}`}>
      <PostItemBlock>
        <h2>{title}</h2>
        <SubInfo memberName={memberId} publishedDate={new Date(createdAt)} />
      </PostItemBlock>
    </Link>
  );
};

const PostList = ({ posts, loading, error, showWriteButton }) => {
  if (error) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }
  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        {showWriteButton && (
          <Link to="/ask">
            <Button>질문하기</Button>
          </Link>
        )}
      </WritePostButtonWrapper>
      <div>
        {!loading && posts && (
          <div>
            {posts.$values.map((post, idx) => (
              <PostItem post={post} key={idx} />
            ))}
          </div>
        )}
      </div>
    </PostListBlock>
  );
};

export default PostList;
