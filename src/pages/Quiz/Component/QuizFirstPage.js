import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Straight from "./svgComponents/straight";
import Wavy from "./svgComponents/wavy";
import Curly from "./svgComponents/curly";
import Coily from "./svgComponents/coily";
import Dry from "./svgComponents/dry";
import Normal from "./svgComponents/normal";
import Oily from "./svgComponents/oily";
import Fine from "./svgComponents/fine";
import Coarse from "./svgComponents/coarse";
import Medium from "./svgComponents/medium";
import { QuizContainer } from "../Quiz";
import { themeColor } from "./subComponent/theme";
import { YJ_URL } from "../../../config";

const QuizFirstPage = () => {
  const [hairType, setHairType] = useState([]);
  const [hairStructure, setHairStructure] = useState([]);
  const [scalpMoisture, setScalpMoisture] = useState([]);

  const [selectedHairType, setSelectedHairType] = useState("");
  const [selectedHairStructure, setSelectedStructure] = useState("");
  const [selectedScalpMoisture, setSelectedScalpMoisture] = useState("");

  const getHairTypeData = (type) => {
    setSelectedHairType(type);
    localStorage.setItem("hairType", type);
  };
  const getHairStructureData = (type) => {
    setSelectedStructure(type);
    localStorage.setItem("hairStructure", type);
  };
  const getScalpMoistureData = (type) => {
    setSelectedScalpMoisture(type);
    localStorage.setItem("scalpMoisture", type);
  };

  const hairTypeSvg = [<Straight />, <Wavy />, <Curly />, <Coily />];
  const hairStructureSvg = [<Fine />, <Coarse />, <Medium />];
  const scalpMoistureSvg = [<Dry />, <Normal />, <Oily />];

  useEffect(() => {
    fetch(`${YJ_URL}/quiz/hair-profile`)
      .then((response) => response.json())
      .then((data) => {
        setHairType(data.hair_profile[0].hair_types);
        setHairStructure(data.hair_profile[0].hair_structures);
        setScalpMoisture(data.hair_profile[0].scalp_moistures);
      });
  }, []);

  return (
    <QuizContainer>
      <SuperScript>
        <div>
          HAIR QUIZ
          <sup>1/4</sup>
        </div>
      </SuperScript>
      <Title>build your hair profile</Title>
      <BelowTitle>
        <Link to="/Cart">already a customer? retrieve your formula here</Link>
      </BelowTitle>
      <QuizSection>
        <h3>H A I R &nbsp; T Y P E</h3>
        <div className="typeContainer">
          {hairType?.map((hairType, idx) => {
            return (
              <EachType
                idx={idx}
                hairType={hairType.type}
                selectedType={selectedHairType}
                onClick={() => getHairTypeData(hairType.type)}
              >
                {hairTypeSvg[idx]}
                <div>{hairType.type}</div>
              </EachType>
            );
          })}
        </div>
      </QuizSection>
      <QuizSection>
        <h3>H A I R &nbsp; S T R U C T U R E</h3>
        <div className="typeContainer">
          {hairStructure?.map((hairStructure, idx) => {
            return (
              <EachType
                idx={idx}
                hairType={hairStructure.structure}
                selectedType={selectedHairStructure}
                onClick={() => getHairStructureData(hairStructure.structure)}
              >
                {hairStructureSvg[idx]}
                <div>{hairStructure.structure}</div>
              </EachType>
            );
          })}
        </div>
      </QuizSection>
      <QuizSection>
        <h3>S C A L P &nbsp; M O I S T U R E</h3>
        <div className="typeContainer">
          {scalpMoisture?.map((scalpMoisture, idx) => {
            return (
              <EachType
                idx={idx}
                hairType={scalpMoisture.moisture}
                selectedType={selectedScalpMoisture}
                onClick={() => getScalpMoistureData(scalpMoisture.moisture)}
              >
                {scalpMoistureSvg[idx]}
                <div>{scalpMoisture.moisture}</div>
              </EachType>
            );
          })}
        </div>
      </QuizSection>
      <AnswerArea>
        <Link to="/secondPage">
          <QuizButton>CONTINUE</QuizButton>
        </Link>
        <p>over 52,000 five-star reviews!!!</p>
      </AnswerArea>
    </QuizContainer>
  );
};

export default QuizFirstPage;

export const QuizButton = styled.button`
  width: 150px;
  height: 50px;
  font-size: 17px;
  font-weight: bold;
  background-color: #787887;
  color: ${themeColor.whiteColor};
  border: 1px solid transparent;
  border-radius: 4px;

  :hover {
    cursor: pointer;
  }
`;

export const SuperScript = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${themeColor.quizColor};
  font-size: 18px;
  font-weight: bold;

  div {
    sup {
      position: relative;
      margin: 0px 0px 0px 10px;
      top: -10px;
      vertical-align: top;
      text-align: right;
    }
  }
`;

export const Title = styled.h2`
  margin: 43.16px 0px;
  font-size: 52px;
  text-align: center;
  font-weight: lighter;
`;

const BelowTitle = styled.div`
  text-align: center;

  a {
    display: inline-block;
    text-align: center;
    margin: 10px -15px 20px -15px;
    padding: 18px 0px;
    width: 320px;
    color: #878e8d;
    background-color: #efefef;
    text-decoration: underline;
    font-size: 13px;
    font-style: italic;
  }
`;

const QuizSection = styled.section`
  text-align: center;
  margin-top: 70px;

  h3 {
    font-size: 17px;
    font-weight: lighter;
  }

  .typeContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 660px;
    height: 212px;
  }
`;

const EachType = styled.div`
  margin: 3px 5px;
  width: 158px;
  height: 170px;
  text-align: center;
  color: ${(props) =>
    props.hairType === props.selectedType
      ? `${themeColor.quizColor}`
      : "#4C5150"};

  :hover {
    cursor: pointer;
  }

  svg {
    width: 90%;
    fill: ${(props) =>
      props.hairType === props.selectedType
        ? `${themeColor.quizColor}`
        : "#787887"};
  }

  div {
    margin-top: 10px;
  }
`;

export const AnswerArea = styled.section`
  text-align: center;
  margin: 50px 0px;
  width: 660px;

  div {
    display: flex;
    justify-content: space-between;
  }

  p {
    margin: 40px 0px 16px;
    color: ${themeColor.quizColor};
    font-size: 14px;
    font-style: italic;
  }

  ${QuizButton}
`;
