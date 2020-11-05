/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line prettier/prettier
import React, {useState, useEffect} from "react";
// eslint-disable-next-line prettier/prettier
import {Link} from "react-router-dom";
// eslint-disable-next-line prettier/prettier
import {useForm} from "react-hook-form";

import styled from "styled-components";

const Login = () => {
  const handleSocialLogiIn = () => {
    window.Kakao.Auth.login({
      success: function (authObj) {
        console.log(JSON.stringify(authObj));
        fetch("http://10.58.7.186:8000/account/login/kakao", {
          method: "GET",
          headers: {
            Authorization: authObj.access_token,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res.access_token);
            localStorage.setItem("Kakao_token", res.access_token);
            if (res.access_token) {
              alert("Successfully logged in!");
              this.props.history.push("/");
              window.location.reload();
            }
          });
      },
      fail: function (error) {
        alert(JSON.stringify(error));
      },
    });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(email, password);
  }, [email, password]);

  function handleInputEmail(e) {
    setEmail(e.target.value);
  }
  function handleInputPassword(e) {
    setPassword(e.target.value);
  }

  const isLogin = () => {
    fetch("http://10.58.7.186:8000/account/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((result) => console.log("결과:", result));
  };

  // eslint-disable-next-line prettier/prettier
  const {register, handleSubmit, errors} = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
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
  background-color: #ffff00;
  color: black;
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
  color: #c1cac8;
  background-color: #e6ebea;
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
