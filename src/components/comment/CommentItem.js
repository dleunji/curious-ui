import styled from "styled-components";
import ReplyList from "./ReplyList";
import { useState } from "react";
import CommentEditor from "./CommentEditor";
const CommentItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
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

const CommentItem = ({ comment, commentDict, memberDict }) => {
  const id = comment.$id || comment.$ref;
  const [openReply, setOpenReply] = useState(false);
  const [reply, setReply] = useState("");
  return (
    <CommentItemBlock>
      {commentDict.hasOwnProperty(id) && (
        <>
          <div className="header">
            <div className="member-name">
              {memberDict.hasOwnProperty(commentDict[id].memberId) &&
                memberDict[commentDict[id].memberId].memberName}
            </div>
            <span className="date">
              {new Date(commentDict[id].createdAt).toLocaleDateString()}
            </span>
            {commentDict[id].depth < 2 && (
              <span className="reply-post" onClick={() => setOpenReply(true)}>
                답글
              </span>
            )}
          </div>
          <div className="content">{commentDict[id].content}</div>
          {openReply && (
            <CommentEditor
              onChangeField={(e) => setReply(e.target.value)}
              commentBox={reply}
            />
          )}
          <ReplyList replies={comment.inverseParentComment} />
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
