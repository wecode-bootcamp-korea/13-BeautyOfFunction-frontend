import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import { YJ_URL } from "../../config";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSocialLogiIn = (e) => {
    e.preventDefault();
    window.Kakao.Auth.login({
      success: function (authObj) {
        fetch(`${YJ_URL}/account/login/kakao`, {
          method: "GET",
          headers: {
            Authorization: authObj.access_token,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            localStorage.setItem("access_token", res.Authorization);
          })
          .then(() => {
            alert("Successfully logged in!");
            props.history.push("/Mypage");
          });
      },
      fail: function (error) {
        alert(JSON.stringify(error));
        console.log("error", error);
      },
    });
  };
  function handleInputEmail(e) {
    setEmail(e.target.value);
  }
  function handleInputPassword(e) {
    setPassword(e.target.value);
  }
  const isLogin = () => {
    fetch(`${YJ_URL}/account/login`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("access_token", res["Authorization"]);
        alert("Successfully logged in!");
        props.history.push("/Mypage");
      });
  };
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Nav />
      <Wrapper>
        <Title>log in</Title>
        <KakaoBtn onClick={handleSocialLogiIn}>LOG IN USING KAKAO</KakaoBtn>
        <BorderLine>
          <BetweenLine>OR</BetweenLine>
        </BorderLine>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputBox>
            <EmailBox
              autoComplete="off"
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleInputEmail}
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
              onChange={handleInputPassword}
              ref={register({
                required: "❗️Password is required",
                pattern: {
                  value: /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%-&*]).*$/,
                  message: "❗️Password strength invalid.",
                },
              })}
            />
          </InputBox>
          {errors.password && <Required>{errors.password.message} </Required>}
          <RecaptchaNote>
            This site is protected by reCAPTCHA and the Google
            <Policy> Privacy Policy </Policy> and
            <Policy> Terms of service </Policy> apply.
          </RecaptchaNote>
          <Button type="submit" onClick={isLogin}>
            CONTINUE
          </Button>
        </form>
        <ForgetPw>Forgot your password?</ForgetPw>
        <CreateAccount>
          Don't have an account?
          <CreateOne to="/Signup"> Create one here. </CreateOne>
        </CreateAccount>
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
`;
const KakaoBtn = styled.button`
  width: 480px;
  height: 46px;
  background-color: #f9e001;
  color: 3b1c1c;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  border-radius: 3px;
  border: 1px solid transparent;
  margin-top: 60px;
  padding: 1rem 1.5rem;
  font-size: 15px;
  font-weight: 600;
  font-family: "Freight";
  letter-spacing: 2.5px;
`;
const BorderLine = styled.div`
  margin: 40px 0;
  position: relative;
  ::before {
    left: 0;
    width: 44%;
    position: absolute;
    content: "";
    border-bottom: 1px solid #c1cac8;
    top: 0.4rem;
  }
  ::after {
    right: 0;
    width: 44%;
    position: absolute;
    content: "";
    border-bottom: 1px solid #c1cac8;
    top: 0.4rem;
  }
`;
const BetweenLine = styled.span`
  display: block;
  text-align: center;
  text-transform: uppercase;
  color: #a5adab;
  font-family: "Freight";
  letter-spacing: 2.5px;
`;
const InputBox = styled.div`
  margin-top: 20px;
`;
const EmailBox = styled.input`
  width: 480px;
  height: 46px;
  font-size: 14px;
  padding: 5.5px 0 11.5px 14px;
  border: 1px solid #c1cac8;
  background-color: #fafafa;
  border-radius: 2px;
  ::placeholder {
    color: #a5adab;
  }
  :focus {
    outline: 1px solid transparent;
    border-color: #8ce2d0;
  }
`;
const PwBox = styled.input`
  width: 480px;
  height: 46px;
  font-size: 14px;
  padding: 5.5px 0 11.5px 14px;
  border: 1px solid #c1cac8;
  background-color: #fafafa;
  border-radius: 2px;
  ::placeholder {
    color: #a5adab;
  }
  :focus {
    outline: 1px solid transparent;
    border-color: #8ce2d0;
  }
`;
const Required = styled.p`
  font-size: 12px;
  color: #d91022;
  padding-top: 7px;
`;
const RecaptchaNote = styled.p`
  color: #a5adab;
  font-family: "Freight";
  font-size: 12px;
  padding-top: 1rem;
`;
const Policy = styled.span`
  color: #2fa79b;
`;
const Button = styled.button`
  width: 480px;
  height: 46px;
  margin-top: 40px;
  color: white;
  background-color: #61c8b3;
  border: 1px solid transparent;
  border-radius: 3px;
  letter-spacing: 2.5px;
`;
const ForgetPw = styled.p`
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.75px;
  color: #2fa79b;
  margin-top: 25px;
`;
const CreateAccount = styled.p`
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.75px;
  color: #4c5150;
  margin-top: 25px;
`;
const CreateOne = styled(Link)`
  color: #2fa79b;
`;
export default Login;
