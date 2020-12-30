import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { QuizContainer } from "../Quiz";
import { QuizButton, SuperScript, Title, AnswerArea } from "./QuizFirstPage";
import { PreviousButton } from "./QuizSecondPage";
import { themeColor, flexCenter } from "./subComponent/theme";
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import { YJ_URL } from "../../../config";

const QuizThirdPage = () => {
  const [fragrance, setFragrance] = useState([]);
  const [strength, setStrength] = useState([]);
  const [nameImg, setNameImg] = useState([]);
  const [nameConditionerImg, setNameConditionerImg] = useState([]);
  const [nameImgIdx, setNameImgIdx] = useState(0);
  const [nameConditionerImgIdx, setNameConditionerImgIdx] = useState(0);
  const [inputState, setInputState] = useState("");

  const [selectedFragrance, setSelectedFragrance] = useState("");
  const [selectedStrength, setSelectedStrength] = useState("");

  const getFragranceData = (type) => {
    setSelectedFragrance(type);
    localStorage.setItem("Fragrance", type);
  };
  const getStrengthData = (type) => {
    setSelectedStrength(type);
    localStorage.setItem("Strength", type);
  };

  const getInnerNameData = () => {
    localStorage.setItem("InnerName", inputState);
  };

  const getShampoo_color = (idx) => {
    setNameImgIdx(idx);
    localStorage.setItem("shampoo_color", idx + 1);
  };

  const getShampoo_purple = () => {
    setNameImgIdx(9);
    localStorage.setItem("shampoo_color", 9);
  };

  const getConditioner_color = (idx) => {
    setNameConditionerImgIdx(idx);
    localStorage.setItem("conditioner_color", idx + 1);
  };

  useEffect(() => {
    fetch(`${YJ_URL}/quiz/appearance-and-fragrance`, {
      method: "POST",
      headers: {},
      body: JSON.stringify({
        purple_shampoo: JSON.parse(localStorage.getItem("purple")),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setFragrance(data.fragrance_options[0].fragrances);
        setStrength(data.fragrance_options[0].strengths);
        setNameImg(data.shampoo_colors);
        setNameConditionerImg(data.conditioner_colors);
      });
  }, []);

  const purpleKey = JSON.parse(localStorage.getItem("purple"));

  return (
    <>
      <Nav />
      <QuizContainer>
        <SuperScript>
          <div>
            HAIR QUIZ
            <sup>3/4</sup>
          </div>
        </SuperScript>
        <Title>customize your formula</Title>
        <FragranceQuiz>
          <h3>FRAGRANCE</h3>
          {fragrance?.map((fragrance, idx) => {
            return (
              <FragranceButton
                key={idx}
                fragrance={fragrance.fragrance}
                selectedFragrance={selectedFragrance}
                onClick={() => getFragranceData(fragrance.fragrance)}
              >
                {fragrance.fragrance}
                <img
                  className="buttonImg"
                  src={fragrance.image}
                  alt="이미지입니다."
                />
              </FragranceButton>
            );
          })}
        </FragranceQuiz>
        <img
          className="formula"
          src="https://www.functionofbeauty.com/images/peach.svg"
          alt="formula"
        />
        <FragranceStrength>
          <h3>FRAGRANCE STRENGTH</h3>
          <div className="FragranceStrengthButton">
            {strength?.map((strength, idx) => {
              return (
                <StrengthButton
                  key={idx}
                  strength={strength.strength}
                  selectedStrength={selectedStrength}
                  onClick={() => getStrengthData(strength.strength)}
                >
                  {strength.strength}
                </StrengthButton>
              );
            })}
          </div>
        </FragranceStrength>

        <FormulaNameSection>
          <h3>F O R M U L A &nbsp; N A M E (P R I N T E D O N B O T T L E)</h3>
          <input
            type="text"
            placeholder="first name or nickname"
            onChange={(e) => setInputState(e.currentTarget.value)}
            onKeyPress={() => getInnerNameData()}
          />
          <p>pleas press Enter After input value</p>
        </FormulaNameSection>

        <section>
          <ShampooColorComponent>
            <h3>S H A M P O O &nbsp; C O L O R</h3>
            {!purpleKey && (
              <img
                className="ShampooColorImg"
                src={nameImg[nameImgIdx]?.color_image}
                alt="Shampoo Color"
              />
            )}
            {purpleKey && (
              <img
                className="ShampooColorImg"
                src={nameImg[0]?.color_image}
                alt="Shampoo Color"
              />
            )}
            <div className="innerName">{inputState}</div>
            <div>
              {nameImg?.map((nameImg, idx) => {
                return (
                  <>
                    {!purpleKey && (
                      <ShampooColorButton
                        key={idx}
                        nameImgColor={nameImg.color_code}
                        onClick={() => getShampoo_color(idx)}
                      />
                    )}
                    {purpleKey && (
                      <ShampooColorButton
                        key={idx}
                        nameImgColor={nameImg.color_code}
                        onClick={() => getShampoo_purple()}
                      />
                    )}
                  </>
                );
              })}
            </div>
          </ShampooColorComponent>

          <ShampooColorComponent>
            <h3>C O N D I T I O N E R &nbsp; C O L O R</h3>
            <img
              className="ShampooColorImg"
              src={nameConditionerImg[nameConditionerImgIdx]?.color_image}
              alt="Shampoo Color"
            />
            <div className="innerName">{inputState}</div>
            <div>
              {nameConditionerImg?.map((nameImg, idx) => {
                return (
                  <ShampooColorButton
                    key={idx}
                    nameImgColor={nameImg.color_code}
                    onClick={() => getConditioner_color(idx)}
                  />
                );
              })}
            </div>
            <p>
              *note: Slight variations in color may occur due to your formula’s
              unique blend of natural ingredients. That means, like you, each
              bottle is one-of-a-kind!
            </p>
          </ShampooColorComponent>
        </section>
        <AnswerArea>
          <div>
            <Link to="/secondPage">
              <PreviousButton>PREVIOUS</PreviousButton>
            </Link>
            <input type="hidden" className="answer" value="" id="goal" />
            <Link to="/fourthPage">
              <QuizButton>NEXT</QuizButton>
            </Link>
          </div>
        </AnswerArea>
      </QuizContainer>
      <Footer />
    </>
  );
};

export default QuizThirdPage;

const Opacity = keyframes`from {opacity : 0} to {
  opacity : 1}`;

const FragranceQuiz = styled.section`
  text-align: center;
  margin: -20px 0px -30px 0px;
  padding: 30px;
  width: 660px;

  h3 {
    margin: 17px 0px 25px;
    font-size: 17px;
    font-weight: lighter;
  }

  .formula {
    width: 660px;
  }
`;

const FragranceButton = styled.button`
  display: block;
  text-align: left;
  width: 350px;
  margin: 0px auto 10px;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #c1cac8;
  color: ${(props) =>
    props.fragrance === props.selectedFragrance
      ? `${themeColor.whiteColor}`
      : "#4C5150"};
  background-color: ${(props) =>
    props.fragrance === props.selectedFragrance
      ? `${themeColor.quizColor}`
      : `${themeColor.whiteColor}`};

  .buttonImg {
    width: 12px;
  }
`;

const StrengthButton = styled.button`
  display: block;
  margin: 0px 10px;
  padding: 10px;
  width: 110px;
  height: 44.4px;
  font-size: 16px;
  border: 1px solid #c1cac8;
  color: ${(props) =>
    props.strength === props.selectedStrength
      ? `${themeColor.whiteColor}`
      : "#4C5150"};
  background-color: ${(props) =>
    props.strength === props.selectedStrength
      ? `${themeColor.quizColor}`
      : `${themeColor.whiteColor}`};
`;

const FragranceStrength = styled.section`
  margin-top: 70px;
  padding-bottom: 30px;
  text-align: center;

  h3 {
    margin: 17px 0px 25px;
    font-weight: lighter;
  }

  .FragranceStrengthButton {
    ${flexCenter}
  }
`;

const FormulaNameSection = styled.section`
  text-align: center;
  padding-bottom: 30px;

  h3 {
    margin: 17px 0px;
    height: 24.8px;
    font-size: 17px;
    font-weight: lighter;
    text-align: center;
  }

  input {
    display: inline-block;
    width: 350px;
    height: 45.4px;
    text-align: center;
    font-size: 17px;
  }

  p {
    margin: 16px 0px;
    font-size: 14px;
  }
`;

const ShampooColorComponent = styled.div`
  padding-bottom: 30px;
  text-align: center;

  h3 {
    margin: 17px 0px;
    padding-top: 20px;
    font-size: 17px;
    font-weight: lighter;
  }

  .ShampooColorImg {
    position: relative;
    margin: -80px 0px -95px -50px;
    width: 180px;
    transform: rotate(270deg);
    transition-timing-function: linear;
    animation: ${Opacity} 1s;
  }

  .innerName {
    position: relative;
    top: -115px;
    left: -12px;
  }

  p {
    margin: 30px auto 0px;
    width: 425px;
    color: #878e8d;
    font-size: 14px;
    font-weight: lighter;
    line-height: 25px;
  }
`;

const ShampooColorButton = styled.button`
  display: inline-block;
  margin: 0px 10px;
  padding: 8px;
  width: 60px;
  height: 60px;
  border: 1px solid gray;
  border-radius: 50%;
  background-color: ${(props) => props.nameImgColor};

  :hover {
    cursor: pointer;
  }
`;
