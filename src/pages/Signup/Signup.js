import React, { useState } from "react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { YJ_URL } from "../../config";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleEmailInput(e) {
    setEmail(e.target.value);
  }
  const passwordInput = (e) => {
    return setPassword(e.target.value);
  };
  const signUp = () => {
    fetch(`${YJ_URL}/account/signup`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.Message === "ACCOUNT_SUCCESSFULLY_CREATED") {
          alert("Successfully logged in!");
          props.history.push("/Login");
        }
      });
  };
  const valid = (item) => {
    let inputText = document.querySelector(`#${item}`);
    inputText.style.color = "#61c8b3";
  };
  const invalid = (item) => {
    let inputText = document.querySelector(`#${item}`);
    inputText.style.color = "#D91022";
  };
  const handleInputChange = (e) => {
    const password = e.target.value;
    if (password.match(/[A-z]/) !== null) {
      valid("capital");
    } else {
      invalid("capital");
    }
    if (password.match(/[0-9]/) !== null) {
      valid("num");
    } else {
      invalid("num");
    }
    if (password.match(/[!@#$%-&*]/) !== null) {
      valid("char");
    } else {
      invalid("char");
    }
    if (password.length > 7) {
      valid("more8");
    } else {
      invalid("more8");
    }
  };
  const handlePassword = (e) => {
    passwordInput(e);
    handleInputChange(e);
  };
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(">>>>", data);
  };
  return (
    <>
      <Nav />
      <Wrapper>
        <Title>create an account</Title>
        <PwRequirements>
          <AccountTitle>Password strength requirements</AccountTitle>
          <PwConditions>
            <ConditionList id="more8"> At least 8 characters</ConditionList>
            <ConditionList id="num">At least 1 number ( 0-9 )</ConditionList>
            <ConditionList id="char">
              At least 1 special character (e.g. !, @, #, $, %, -, &,*)
            </ConditionList>
            <ConditionList id="capital">
              At least 1 alphabet ( a-z )
            </ConditionList>
          </PwConditions>
        </PwRequirements>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputBox>
            <EmailBox
              autoComplete="off"
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleEmailInput}
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
              onChange={handlePassword}
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
      <Footer />
    </>
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
  padding-right: 40px;
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
  color: white;
  background-color: #61c8b3;
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
