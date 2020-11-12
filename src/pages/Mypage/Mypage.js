// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line prettier/prettier
import React, {useState, useEffect} from "react";
// eslint-disable-next-line prettier/prettier
import {Link} from "react-router-dom";
import styled from "styled-components";
// eslint-disable-next-line prettier/prettier
import {SJ_URL} from "../../config";

const Mypage = () => {
  const [users, setUsers] = useState("");

  useEffect(() => {
    fetch(`${SJ_URL}/account/mypage`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
    })
      .then((res) => res.json())
      // eslint-disable-next-line prettier/prettier
      .then((res) => {
        setUsers(res.user_info.email);
      });
  }, []);

  const sList = [
    "✓ free shipping on all orders",
    "✓ access to our complete range of fragrances & colors",
    "✓ exclusive early access to new products",
    "✓ edit your formula and shipments at any time",
    "✓ never run out again - orders are automatically shipped to your door",
  ];

  const totalList = sList.map((sList, index) => (
    <ScribeList key={index}>{sList}</ScribeList>
  ));

  return (
    <>
      <Head>
        <FirstTitle>YOUR ACCOUT </FirstTitle>
        <Hi>hi there!</Hi>
        <ThanksMessage>
          thanks for being a member since November 2020
        </ThanksMessage>
      </Head>
      <TotalContainer>
        <SubscribeBox>
          <WhySubscribe>Why you should subscribe</WhySubscribe>
          <ScribeCondition>{totalList}</ScribeCondition>
        </SubscribeBox>
        <RightContainer>
          <TotalInfo height={200}>
            <TitleBox>
              <Info>Account Info</Info>
              <EditButton>EDIT</EditButton>
            </TitleBox>
            <PersonalInfo>Name</PersonalInfo>
            <EmailBox>
              <PersonalInfo>Email</PersonalInfo>
              <Email>{users} </Email>
            </EmailBox>
            <PersonalInfo>Address</PersonalInfo>
            <PersonalInfo>Phone</PersonalInfo>
          </TotalInfo>
          <TotalInfo height={125}>
            <TitleBox>
              <Info>Password</Info>
              <EditButton>EDIT</EditButton>
            </TitleBox>
            <SecretPw>***************</SecretPw>
          </TotalInfo>
          <TotalInfo height={40}>
            <TitleBox>
              <Info>Payment Method</Info>
              <EditButton>ADD</EditButton>
            </TitleBox>
          </TotalInfo>
          <LogOut to="/Login">LOG OUT</LogOut>
        </RightContainer>
      </TotalContainer>
    </>
  );
};

const Head = styled.div`
  width: 400px;
  margin: 70px auto;
`;

const FirstTitle = styled.h3`
  color: #b1b1b1;
  font-size: 1.2em;
  font-family: "Freight";
  font-weight: normal;
  text-align: center;
`;

const Hi = styled.h2`
  margin: 5px 0;
  padding: 10px 0 0 10px;
  font-size: 30px;
  color: #97d3c7;
  font-weight: 800;
  text-align: center;
  letter-spacing: unset;
`;

const ThanksMessage = styled.p`
  padding: 10px 0 0 10px;
  color: #787887;
  font-size: 14px;
  text-align: center;
`;

const TotalContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 70px;
`;

const SubscribeBox = styled.div`
  margin: 0 0 30px 80px;
  width: 500px;
  height: 280px;
  background-color: #70849a;
`;

const WhySubscribe = styled.p`
  padding: 30px 0 0 20px;
  font-size: 22px;
  font-weight: normal;
  text-align: center;
  color: white;
`;

const ScribeCondition = styled.ul`
  padding: 20px;
  list-style: none;
  color: white;
  font-size: 13px;
`;

const ScribeList = styled.li`
  padding: 10px;
`;

const RightContainer = styled.div`
  flex-direction: column;
  margin: 20px 0 0 50px;
`;

const TitleBox = styled.div`
  width: 500px;
  position: relative;
  padding-bottom: 15px;
  border-bottom: 1px solid #dadada;
`;

const Info = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #787887;
`;
const EditButton = styled.button`
  border: 1px solid #262929;
  background-color: white;
  position: absolute;
  right: 10px;
  font-size: 12px;
  font-family: "Freight";
  font-style: normal;
  letter-spacing: 2.5px;
  border: 1px solid #a5adab;
  outline: none;
  line-height: 18px;
  padding: 2px 10px;
  border-radius: 2px;
`;

const EmailBox = styled.div`
  position: relative;
`;

const PersonalInfo = styled.p`
  padding: 10px 0 10px 0;
  font-size: 13px;
  font-weight: bold;
  color: #787887;
`;

const Email = styled.p`
  position: absolute;
  bottom: 10px;
  left: 70px;
  font-size: 14px;
  font-weight: bold;
  color: #97d3c7; ;
`;

const TotalInfo = styled.div`
  width: 500px;
  height: ${(props) => `${props.height}px`};
`;

const SecretPw = styled.p`
  padding-top: 10px;
  color: #787887;
`;

const LogOut = styled(Link)`
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Freight";
  font-style: normal;
  font-weight: 400;
  letter-spacing: 2.5px;
  border-bottom: 1px solid #262929;
  color: #262929;
  margin: 30px 0 0 200px;
`;

export default Mypage;
