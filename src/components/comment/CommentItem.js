import styled from "styled-components";
import ReplyList from "./ReplyList";
import { useState } from "react";
import CommentEditor from "./CommentEditor";
import ReplyEditor from "./ReplyEditor";
const CommentItemBlock = styled.div`
  margin: 30px 0px;
  .header {
    display: flex;
    align-items: center;
    .member-name {
      font-weight: bold;
    }

    .date {
      margin-left: 10px;
      color: gray;
    }

    .reply-post {
      font-size: 15px;
      margin-left: 10px;
      cursor: pointer;
    }
  }
  .content {
    margin: 10px 0px;
  }

  .reply-get {
    color: #f27983;
    font-size: 15px;
  }

  &:first-child {
    padding-top: 0;
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

const CommentItem = ({ comment, onPostReply, members, user }) => {
  const id = comment.$id || comment.$ref;
  const [openReply, setOpenReply] = useState(false);
  const [reply, setReply] = useState("");

  const onCancel = () => setOpenReply(false);

  return (
    <CommentItemBlock>
      {comment && members && (
        <>
          <div className="header">
            <div className="member-name">
              {
                members.filter(
                  (member) => member.memberId === comment.memberId
                )[0].memberName
              }
            </div>
            <span className="date">
              {new Date(comment.createdAt).toLocaleDateString()}
            </span>
            {comment.depth < 2 && user && (
              <span className="reply-post" onClick={() => setOpenReply(true)}>
                답글
              </span>
            )}
          </div>
          <div className="content">{comment.content}</div>
          {openReply && (
            <ReplyEditor
              onChangeField={(e) => setReply(e.target.value)}
              commentBox={reply}
              parentCommentId={comment.commentId}
              onPostReply={onPostReply}
              onCancel={onCancel}
            />
          )}
          <ReplyList
            onPostReply={onPostReply}
            members={members}
            replies={comment.inverseParentComment}
            user={user}
          />
        </>
      )}
    </CommentItemBlock>
  );
  // const id = comment.$id || comment.$ref;
  // console.log(id);
  // if (commentDict.hasOwnProperty(id)) {
  //   const { depth, createdAt, content, replies } = commentDict[id];
  //   return (
  //   <CommentItemBlock>
  //     <div className="header">
  //       <div className="member-name">이름</div>
  //       <span className="date">{new Date(createdAt).toLocaleDateString()}</span>
  //       <span className="reply-post">답글</span>
  //     </div>
  //     <div className="content">{content}</div>
  //     {/* {depth < 2 && replies.length > 0 && (
  //       <>
  //         <span className="reply-get">답글보기</span>
  //         <ReplyList depth={depth + 1} />
  //       </>
  //     )} */}
  //   </CommentItemBlock>
  // }
  // if (depth > 2) {
  //   return null;
  // }
};

export default CommentItem;
