/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import styled from "styled-components";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(email, password);
  }, [email, password]);

  function handleInput(e) {
    console.log("email", e.target.value);
    setEmail(e.target.value);
  }

  const passwordInput = (e) => {
    console.log("password", e.target.value);
    return setPassword(e.target.value);
  };

  const signUp = () => {
    fetch("http://10.58.7.186:8000/account/signup", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("결과", result);
      });
  };

  const {register, handleSubmit, errors} = useForm();

  const onSubmit = (data) => {
    console.log(">>>>", data);
  };

  return (
    <Wrapper>
      <Title>create an account</Title>
      <PwRequirements>
        <AccountTitle>Password strength requirements</AccountTitle>
        <PwConditions>
          <ConditionList> At least 8 characters</ConditionList>

          <ConditionList>At least 1 number ( 0-9 )</ConditionList>

          <ConditionList>
            At least 1 special character (e.g. !, @, #, $, %, -, &,*)
          </ConditionList>
          <ConditionList>At least 1 alphabet ( a-z )</ConditionList>
        </PwConditions>
      </PwRequirements>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputBox>
          <EmailBox
            autoComplete="off"
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleInput}
            ref={register({
              required: "❗️Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "❗️Enter a valid email address",
              },
            })}
          />
        </InputBox>
        {errors.email && <Required> {errors.email.message}</Required>}
        <InputBox>
          <PwBox
            autoComplete="off"
            name="password"
            type="password"
            placeholder="Password"
            onChange={passwordInput}
            ref={register({
              required: "❗️Password is required",
              pattern: {
                value: /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%-&*]).*$/,
                message: "❗️Password strength invalid.",
              },
            })}
          />
        </InputBox>
        {errors.password && <Required>{errors.password.message}</Required>}
        <Button type="submit" onClick={signUp}>
          CONTINUE
        </Button>
      </form>
      <Question>
        Have an account already?<NLink to="/Login">Log in here</NLink>
      </Question>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 480px;
  margin: 100px auto;
`;

const Title = styled.h1`
  font-size: 45px;
  font-weight: 400;
  text-align: center;
`;

const PwRequirements = styled.div`
  width: 440px;
  height: 180px;
  background-color: #fafafa;
  border-radius: 4px;
  margin-top: 60px;
  padding: 20px;
`;

const AccountTitle = styled.h4`
  font-size: 20px;
  line-height: 31px;
  letter-spacing: 1px;
  color: #4c5150;
  text-align: left;
  font-weight: 500;
`;

const PwConditions = styled.ul`
  color: #878e8d;
  display: block;
  padding: 10px 0 10px 30px;
`;

const ConditionList = styled.li`
  font-size: 14px;
  line-height: 23px;
  letter-spacing: 0.5px;
`;

const InputBox = styled.div`
  margin-top: 15px;
`;

const Required = styled.p`
  font-size: 12px;
  color: #d91022;
  padding-top: 7px;
`;

const EmailBox = styled.input`
  width: 440px;
  height: 46px;
  font-size: 14px;
  padding: 5.5px 0 11.5px 14px;
  border: 1px solid #c1cac8;
  background-color: #fafafa;

  ::placeholder {
    color: #a5adab;
  }

  :focus {
    outline: 1px solid transparent;
    border-color: #8ce2d0;
  }
`;

const PwBox = styled.input`
  width: 440px;
  height: 46px;
  font-size: 14px;
  padding: 5.5px 0 11.5px 14px;
  border: 1px solid #c1cac8;
  background-color: #fafafa;
  ::placeholder {
    color: #a5adab;
  }
  :focus {
    outline: 1px solid transparent;
    border-color: #8ce2d0;
  }
`;

const Button = styled.button`
  width: 440px;
  height: 46px;
  margin-top: 20px;
  color: #c1cac8;
  background-color: #e6ebea;
  border: 1px solid transparent;
  border-radius: 3px;
  letter-spacing: 2.5px;
`;

const Question = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.75px;
  color: #4c5150;
  margin-top: 25px;
`;

const NLink = styled(Link)`
  color: #2fa79b;
`;

export default Signup;
