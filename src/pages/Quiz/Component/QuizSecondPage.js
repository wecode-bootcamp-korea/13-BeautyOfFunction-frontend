import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { QuizContainer } from "../Quiz";
import { QuizButton, SuperScript, Title, AnswerArea } from "./QuizFirstPage";
import { themeColor } from "./subComponent/theme";

const QuizSecondPage = () => {
  const [choice, setChoice] = useState([]);

  const [userGoal, setUserGoal] = useState([]);
  const [purpleSelected, setPurpleSelected] = useState(false);

  const getHairGoalData = (idx) => {
    let tempArr = [...userGoal];

    if (!userGoal.includes(idx)) {
      tempArr.push(idx);
    } else {
      tempArr = tempArr.filter((el) => el !== idx);
    }

    setUserGoal(tempArr);
  };

  const getPurpleData = () => {
    setPurpleSelected(!purpleSelected);
    localStorage.setItem("purple", purpleSelected);
  };

  console.log(purpleSelected);

  useEffect(() => {
    fetch("http://10.58.7.186:8000/quiz/hair-goals")
      .then((response) => response.json())
      .then((data) => {
        setChoice(data.hair_goals);
        console.log(data.hair_goals);
      });
  }, []);

  return (
    <QuizContainer>
      <SuperScript>
        <div>
          HAIR QUIZ
          <sup>2/4</sup>
        </div>
      </SuperScript>
      <Title>select up to 5 hair goals</Title>
      <QuizSelector>
        {choice?.map((choice, idx) => {
          return (
            <>
              {choice.id < 18 && (
                <QuizSelectorButton
                  idx={idx}
                  key={choice.id}
                  userGoal={userGoal}
                  onClick={() => {
                    getHairGoalData(idx);
                  }}
                  isSelected={userGoal.includes(idx)}
                >
                  {choice.goal}
                </QuizSelectorButton>
              )}
              {choice.id === 18 && (
                <QuizSelectorButtonPurple
                  purpleSelected={purpleSelected}
                  onClick={() => {
                    getPurpleData();
                  }}
                >
                  reduce brassiness
                </QuizSelectorButtonPurple>
              )}
            </>
          );
        })}
      </QuizSelector>
      <LabelSection>
        <input type="checkbox" className="booleanCheck" />
        <label>
          I'd like a silicone-free formula for my shampoo + conditioner.
        </label>
      </LabelSection>
      <AnswerArea>
        <div>
          <Link to="/Quiz">
            <PreviousButton>PREVIOUS</PreviousButton>
          </Link>
          <Link to="/Quiz/thirdPage">
            <QuizButton>NEXT</QuizButton>
          </Link>
        </div>
        <p>over 52,000 five-star reviews!!!</p>
      </AnswerArea>
    </QuizContainer>
  );
};

export default QuizSecondPage;

export const PreviousButton = styled(QuizButton)`
  border: 1px solid #a5adab;
  color: #878e8d;
  background-color: ${themeColor.whiteColor};
`;

const QuizSelectorButton = styled.button`
  display: inline-block;
  margin: 0px 5px 8px 0px;
  padding: 10px;
  border: 1px solid #c1cac8;
  color: ${(props) =>
    props.isSelected ? `${themeColor.whiteColor}` : "#4C5150"};
  background-color: ${(props) =>
    props.isSelected ? `${themeColor.quizColor}` : `${themeColor.whiteColor}`};
  font-size: 16px;
  cursor: pointer;
`;

const QuizSelectorButtonPurple = styled.button`
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 8px;
  padding: 10px;
  border: 1px solid #c1cac8;
  color: ${(props) =>
    props.purpleSelected ? `${themeColor.whiteColor}` : "4C5150"};
  background-color: ${(props) =>
    props.purpleSelected ? "#52469a" : `${themeColor.whiteColor}`};
  font-size: 16px;
  cursor: pointer;
`;

const QuizSelector = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 660px;
  color: #4c5150;
  font-size: 16px;

  ${QuizSelectorButton}
`;

const LabelSection = styled.section`
  margin: 40px;
  text-align: center;

  label {
    margin: 8px;
  }
`;
