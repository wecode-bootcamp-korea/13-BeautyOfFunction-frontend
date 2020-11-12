import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { QuizContainer } from "../Quiz";
import { QuizButton, SuperScript, Title, AnswerArea } from "./QuizFirstPage";
import { PreviousButton } from "./QuizSecondPage";
import { themeColor } from "./subComponent/theme";
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import { YJ_URL } from "../../../config";

const QuizFourthPage = () => {
  const [colletionItem, setColletionItem] = useState([]);
  const [shampoo_image, setShampoo_image] = useState("");
  const [conditioner_image, setConditioner_image] = useState("");
  const [frequency_options, setFrequency_options] = useState([]);

  const [selectedColletionItemName, setSelectedColletionItemName] = useState(
    ""
  );
  const [selectedFrequency, setSelectedFrequency] = useState("");

  const getColletionItemName = (type) => {
    setSelectedColletionItemName(type);
    localStorage.setItem("selectedColletionItemName", type);
  };
  const getFrequency = (type) => {
    setSelectedFrequency(type);
    localStorage.setItem("selectedFrequency", type);
  };

  useEffect(() => {
    fetch(`${YJ_URL}/quiz/size-and-frequency`, {
      method: "POST",
      headers: {},
      body: JSON.stringify({
        shampoo_color: localStorage.getItem("shampoo_color"),
        conditioner_color: localStorage.getItem("conditioner_color"),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setColletionItem(data.size_options[0].size_options);
        setShampoo_image(data.size_options[0].shampoo_image);
        setConditioner_image(data.size_options[0].conditioner_image);
        setFrequency_options(data.frequency_options);
      });
  }, []);

  const shampooArr = [0, 1, 2, 3, 4, 6];
  const conditionerArr = [0, 1, 2, 3, 5, 7];

  const shampooSize = [0, 3, 4];
  const conditionerSize = [0, 2, 5];

  return (
    <>
      <Nav />
      <QuizContainer>
        <SuperScript>
          <div>
            HAIR QUIZ
            <sup>4/4</sup>
          </div>
        </SuperScript>
        <Title>size and frequency</Title>
        <CollectionSection>
          <h3>
            S H A M P O O &nbsp; + &nbsp; C O N D I T I O N E R &nbsp; S E T
          </h3>
          <ul>
            {colletionItem?.map((item, idx) => {
              return (
                <ColletionItemList
                  className="colletionItem"
                  key={idx}
                  name={item.name}
                  selectedColletionItemName={selectedColletionItemName}
                  shampooSize={shampooSize.includes(idx)}
                  conditionerSize={conditionerSize.includes(idx)}
                  onClick={() => getColletionItemName(item.name)}
                >
                  {idx === 0 && <span className="bestDeal">best deal</span>}
                  <span className="checkBox">&#10003;</span>
                  <label>{item.name}</label>
                  <div className="ImgAndCost">
                    <div>
                      {shampooArr.includes(idx) && (
                        <img
                          className="shampooImg"
                          src={shampoo_image}
                          alt="shampoo"
                        />
                      )}
                      {conditionerArr.includes(idx) && (
                        <img
                          className="conditionerImg"
                          src={conditioner_image}
                          alt="conditioner"
                        />
                      )}
                    </div>
                    <span className="bigCost">{item.price}</span>
                  </div>
                </ColletionItemList>
              );
            })}
          </ul>
        </CollectionSection>
        <FrequencySection>
          <h3>F R E Q U E N C Y</h3>
          <p>cancel anytime</p>
          <div>
            {frequency_options?.map((frequencyContent) => {
              return (
                <FrequencyButton
                  option={frequencyContent.option}
                  selectedFrequency={selectedFrequency}
                  onClick={() => getFrequency(frequencyContent.option)}
                >
                  <div className="checkBox">&#10003;</div>
                  {frequencyContent.option}
                  <span className="freeShiping">free shiping</span>
                </FrequencyButton>
              );
            })}
          </div>
        </FrequencySection>
        <GiftCheckBoxCenter>
          <input type="checkbox" />
          <label>is this a gift? 🎁</label>
        </GiftCheckBoxCenter>
        <AnswerArea>
          <div>
            <Link to="/thirdPage">
              <PreviousButton>PREVIOUS</PreviousButton>
            </Link>
            <input type="hidden" className="answer" value="" id="goal"></input>
            <Link to="/Cart">
              <QuizButton>NEXT</QuizButton>
            </Link>
          </div>
        </AnswerArea>
      </QuizContainer>
      <Footer />
    </>
  );
};

export default QuizFourthPage;

const CollectionSection = styled.section`
  padding-bottom: 20px;

  h3 {
    margin: 20px 0px;
    text-align: center;
    font-weight: lighter;
    font-size: 15px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0px 140px;

    .noThanks {
      width: 178px;
      text-align: center;
      padding: 11px 0px 9px;
      border: 1px solid #a5adab;
      margin-top: 20px;
      margin-left: 25%;
    }
  }
`;

const ColletionItemList = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0px 7px 7px 0px;
  padding: 10px;
  width: 180px;
  border: ${(props) =>
    props.name === props.selectedColletionItemName
      ? `3px solid ${themeColor.quizColor}`
      : "1px solid gray"};
  position: relative;
  opacity: ${(props) =>
    props.name === props.selectedColletionItemName ? "1" : "0.5"};

  .bestDeal {
    position: absolute;
    top: -9px;
    left: 13px;
    width: 71px;
    height: 22px;
    padding: 3px 9px;
    border-radius: 100px;
    color: ${themeColor.whiteColor};
    background-color: ${themeColor.quizColor};
    font-size: 12px;
    font-style: italic;
  }

  .checkBox {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 18px;
    height: 20px;
    text-align: center;
    font-size: 20px;
    color: ${themeColor.whiteColor};
    background-color: ${themeColor.quizColor};
    visibility: ${(props) =>
      props.name === props.selectedColletionItemName ? "visible" : "hidden"};
  }

  label {
    display: inline-block;
    margin-bottom: 10px;
    padding: 0px 20px;
    font-size: 13px;
    line-height: 20px;
  }

  .ImgAndCost {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0px 8px;

    div {
      margin-left: 11px;

      .shampooImg {
        margin-left: -5px;
        width: ${(props) => (props.shampooSize ? "45px" : "30px")};
        height: ${(props) => (props.shampooSize ? "80px" : "60px")};
      }

      .conditionerImg {
        margin-left: -5px;
        width: ${(props) => (props.conditionerSize ? "45px" : "30px")};
        height: ${(props) => (props.conditionerSize ? "80px" : "60px")};
      }

      .bigCost {
        position: absolute;
        bottom: 19px;
        right: 6px;
        font-size: 18px;

        .smallCost {
          padding: 5px;
          font-size: 12px;
          vertical-align: top;
        }
      }
    }
  }
`;

const FrequencyButton = styled.button`
  position: relative;
  padding: 15px;
  width: 190px;
  height: 74px;
  font-size: 15px;
  background-color: ${themeColor.whiteColor};
  border: ${(props) =>
    props.option === props.selectedFrequency
      ? `3px solid ${themeColor.quizColor}`
      : "1px solid gray"};
  outline: none;

  .freeShiping {
    display: block;
    width: 85px;
    margin: 5px auto 0px;
    padding: 3px 5px;
    border-radius: 100px;
    font-size: 12px;
    font-style: italic;
    color: ${themeColor.whiteColor};
    background-color: ${themeColor.quizColor};
  }

  .oncePrice {
    display: block;
    margin-top: 5px;
    font-size: 14px;
    color: ${themeColor.quizColor};
  }

  .checkBox {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 18px;
    height: 24px;
    text-align: center;
    font-size: 20px;
    color: ${themeColor.whiteColor};
    background-color: ${themeColor.quizColor};
    visibility: ${(props) =>
      props.option === props.selectedFrequency ? "visible" : "hidden"};
  }
`;

const FrequencySection = styled.section`
  margin-top: 80px;
  text-align: center;

  h3 {
    margin: 17px 0px;
    font-size: 17px;
    font-weight: lighter;
  }

  p {
    margin: 0px 0px 16px;
    font-size: 14px;
    font-weight: lighter;
    color: #878e8d;
  }

  div {
    display: flex;
    justify-content: space-around;
  }
`;

const GiftCheckBoxCenter = styled.section`
  margin: 120px 0px 80px;
  text-align: center;
`;
