import client from './client';

// 회원가입
export const register = ({ memberName, mailAddress, password }) => {
  console.log({
    memberName,
    mailAddress,
    memberPassword: password,
  });
  return client.post('/api/Members/register', {
    memberName,
    mailAddress,
    memberPassword: password,
  });
};

// 로그인
export const signin = ({ mailAddress, password }) => {
  console.log({
    mailAddress,
    memberPassword: password,
  });
  return client.post('/api/Members/signin', {
    mailAddress,
    memberPassword: password,
  });
};
