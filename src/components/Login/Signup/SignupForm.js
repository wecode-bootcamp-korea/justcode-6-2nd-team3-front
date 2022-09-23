import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Form from '../../LayOut/Form';
import FormTop from '../../LayOut/FormTop';

export default function SignupForm() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [userType, setUserType] = useState('1');
  const [BusinessName, setBusinessName] = useState('');
  const [BusinessEmail, setBusinessEmail] = useState('');
  const [BusinessNum, setBusinessNum] = useState('');
  const [BusinessPhone, setBusinessPhone] = useState('');
  const [BusinessIntro, setBusinessIntro] = useState('');

  const onUserNameHandler = event => {
    setUserName(event.currentTarget.value);
  };

  const onPasswordHandler = event => {
    setPassword(event.currentTarget.value);
  };

  const onEmailHandler = event => {
    setEmail(event.currentTarget.value);
  };

  const onNameHandler = event => {
    setName(event.currentTarget.value);
  };

  const onNicknameHandler = event => {
    setNickname(event.currentTarget.value);
  };

  const onUserTypeHandler = event => {
    setUserType(event.currentTarget.id);
  };

  const onBusinessNameHandler = event => {
    setBusinessName(event.currentTarget.value);
  };

  const onBusinessNumHandler = event => {
    setBusinessNum(event.currentTarget.value);
  };

  const onBusinessEmailHandler = event => {
    setBusinessEmail(event.currentTarget.value);
  };

  const onBusinessPhoneHandler = event => {
    setBusinessPhone(event.currentTarget.value);
  };

  const onBusinessIntroHandler = event => {
    setBusinessIntro(event.currentTarget.value);
  };

  const onSubmit = () => {
    axios
      .post('/signup', {
        id: userName,
        password: password,
        email: email,
        user_name: name,
        nickname: nickname,
        user_type: userType,
      })

      .then(response => {
        console.log('회원가입 성공!');
        // console.log('user_profile', response.data.user);
        // console.log('user_token', response.data.jwt);
        // localStorage.setItem('token', response.data.jwt);
        navigate('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const onSubmitBusiness = () => {
    // const url = `/api/signup`;
    // const formData = new FormData();
    // formData.append('id', userName);
    // formData.append('password', password);
    // formData.append('user_name', name);
    // formData.append('nickname', nickname);
    // formData.append('user_type', userType);
    // formData.append('Business_name', businessName);
    // formData.append('introduction', businessIntro);
    // formData.append('business_registration_number', businessNum);
    // formData.append('contact_information', businessContact);
    // formData.append('Business_email', businessEmail);
    // formData.append('filename', businessRegistration);
    // const config = {
    //   headers: {
    //     'content-type': 'multipart/form-data',
    //   },
    // };
    // return axios.post(url, formData, config);
  };

  return (
    <Form>
      <FormTop />
      <FirstLine>회원가입에 필요한 기본정보를 입력해주세요.</FirstLine>
      <RadioBtns>
        <RadioBtn
          type="radio"
          name="userTypeBtn"
          onClick={onUserTypeHandler}
          value={userType}
          id="1"
        />
        <RadioLabel>개인회원</RadioLabel>
        <RadioBtn
          type="radio"
          name="userTypeBtn"
          onClick={onUserTypeHandler}
          value={userType}
          id="2"
        />
        <RadioLabel>기업회원</RadioLabel>
      </RadioBtns>
      <InputWrapper>
        <InputLabel>아이디</InputLabel>
        <Input
          type="text"
          value={userName}
          onChange={onUserNameHandler}
          placeholder="4-15자 이내로 입력해주세요"
        />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>비밀번호</InputLabel>
        <Input
          type="text"
          value={password}
          onChange={onPasswordHandler}
          placeholder="영문 소문자, 숫자 조합 6자 이상의 비밀번호"
        />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>이메일</InputLabel>
        <Input
          type="text"
          value={email}
          onChange={onEmailHandler}
          placeholder="kimcode@okidoki.kr"
        />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>실명</InputLabel>
        <Input
          type="text"
          value={name}
          onChange={onNameHandler}
          placeholder="김코드"
        />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>닉네임</InputLabel>
        <Input
          type="text"
          value={nickname}
          onChange={onNicknameHandler}
          placeholder="알파벳, 한글, 숫자를 20자 이하로 입력해주세요"
        />
      </InputWrapper>
      {userType === '2' && (
        <SecondLine>기업회원가입에 필요한 추가정보를 입력해주세요.</SecondLine>
      )}
      {userType === '2' && (
        <InputWrapper>
          <InputLabel>회사명</InputLabel>
          <Input
            type="text"
            value={BusinessName}
            onChange={onBusinessNameHandler}
            placeholder="회사명을 입력해주세요"
          />
        </InputWrapper>
      )}
      {userType === '2' && (
        <InputWrapper>
          <InputLabel>사업자 등록번호</InputLabel>
          <Input
            type="text"
            value={BusinessNum}
            onChange={onBusinessNumHandler}
            placeholder="사업자 등록번호를 입력해주세요"
          />
        </InputWrapper>
      )}
      {userType === '2' && (
        <InputWrapper>
          <InputLabel>대표연락처</InputLabel>
          <Input
            type="text"
            value={BusinessPhone}
            onChange={onBusinessPhoneHandler}
            placeholder="연락처를 입력해주세요"
          />
        </InputWrapper>
      )}
      {userType === '2' && (
        <InputWrapper>
          <InputLabel>대표이메일</InputLabel>
          <Input
            type="text"
            value={BusinessEmail}
            onChange={onBusinessEmailHandler}
            placeholder="kimcode@justcode.com"
          />
        </InputWrapper>
      )}
      {userType === '2' && (
        <RegistrationWrapper>
          <InputLabel>회사소개</InputLabel>
          <Text
            value={BusinessIntro}
            onChange={onBusinessIntroHandler}
            placeholder="사업자등록증을 추가하시고 회사를 소개해주세요."
          />
          <input type="file" />
        </RegistrationWrapper>
      )}
      {userType === '1' && <Button onClick={onSubmit}>회원가입</Button>}
      {userType === '2' && <Button onClick={onSubmitBusiness}>회원가입</Button>}
      <QuestionWrapper>
        <Question>
          이미 회원이신가요?
          <Link to="/login">
            <span> 로그인</span>
          </Link>
        </Question>
      </QuestionWrapper>
    </Form>
  );
}

const FirstLine = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: #6b7280;
  margin-top: 20px;
  font-size: 14px;
  :before {
    content: '';
    flex-grow: 1;
    margin-right: 5px;
    background-color: #6b7280;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
  }
  :after {
    content: '';
    flex-grow: 1;
    margin-left: 5px;
    background-color: #6b7280;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
  }
`;

const SecondLine = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: #6b7280;
  margin-top: 35px;
  font-size: 14px;
  :before {
    content: '';
    flex-grow: 1;
    margin-right: 5px;
    background-color: #6b7280;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
  }
  :after {
    content: '';
    flex-grow: 1;
    margin-left: 5px;
    background-color: #6b7280;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
  }
`;

const RadioBtns = styled.div`
  margin-top: 25px;
`;

const RadioBtn = styled.input`
  color: #6b7280;
`;

const RadioLabel = styled.label`
  color: #6b7280;
  font-size: 15px;
  margin-right: 20px;
`;

const InputWrapper = styled.div`
  margin-top: 30px;
  width: 448px;
  height: 66px;
`;

const RegistrationWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 70px;
  width: 448px;
  height: 66px;
`;

const InputLabel = styled.label`
  width: 448px;
  height: 20px;
  color: #6b7280;
  font-size: 15px;
  font-weight: lighter;
`;
const Input = styled.input`
  width: 448px;
  height: 42px;
  font-size: 16px;
  padding: 8px 12px;
  margin-top: 7px;
  border-radius: 5px;
  border: 0.5px solid #6b7280;
`;

const Text = styled.textarea`
  width: 448px;
  height: 100px;
  font-size: 16px;
  padding: 8px 12px;
  margin-top: 7px;
  border-radius: 5px;
  border: 0.5px solid #6b7280;
`;

const Button = styled.button`
  width: 448px;
  height: 38px;
  color: #ffffff;
  background-color: #0090f9;
  padding: 8px 16px;
  border-radius: 10px;
  border-style: none;
  margin-top: 35px;
  font-size: 14px;
  cursor: pointer;
  :hover {
    background-color: skyblue;
  }
`;
const QuestionWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

const Question = styled.span`
  font-weight: lighter;
  font-size: 14px;
  color: #6b7280;
`;
