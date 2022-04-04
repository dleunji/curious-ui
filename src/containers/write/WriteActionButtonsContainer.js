import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { writePost } from '../../modules/write';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import user from '../../modules/user';

const WriteActionButtonsContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { title, body, post, postError, memberId, categoryId } = useSelector(
    ({ write, user, category }) => ({
      title: write.title,
      body: write.body,
      post: write.post,
      postError: write.postError,
      memberId: user.user.memberId,
      categoryId: category.selection.small,
    }),
  );

  // 포스트 등록
  const onPublish = () => {
    dispatch(writePost({ title, body, memberId, categoryId }));
  };

  const onCancel = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (post) {
      // 데이터 추출
      console.log(post);
      const questionId = post.questionId;
      navigate(`/questions/${questionId}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [navigate, post, postError]);

  return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} />;
};

export default WriteActionButtonsContainer;
