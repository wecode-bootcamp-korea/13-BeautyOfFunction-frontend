import { Link } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";
import { flexCenter, square600, themeColor } from "./theme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSectionComponent = ({ image, name, detailCost, description }) => {
  const mainSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <StyledSection>
      <div className="slick-container">
        <div className="img-container">
          <Slider {...mainSettings}>
            {image?.map(({ src, idx }) => {
              return (
                <img
                  className="slickImage"
                  key={idx}
                  src={src}
                  alt="상세페이지 이미지 입니다."
                />
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="detailMainExplanation">
        <DetailpageH1>{name}</DetailpageH1>
        <span>{detailCost}</span>
        <ul>
          <li>{description}</li>
        </ul>
        <DetailpageButton to="/Quiz">TAKE THE QUIZ</DetailpageButton>
      </div>
    </StyledSection>
  );
};

export default StyledSectionComponent;

const StyledSection = styled.section`
  ${flexCenter}

  .slick-container {
    ${square600}
    margin-right: 30px;

    .slickImage {
      ${square600}
    }
  }

  .detailMainExplanation {
    margin-left: 70px;
    width: 500px;

    span {
      font-size: 16px;
      color: #6f6f6f;
    }

    ul {
      margin: 20px 0px 45px;
      list-style-type: disc;

      li {
        line-height: 30px;
        margin-bottom: 10px;
        width: 480px;
      }
    }
  }
`;

const DetailpageButton = styled(Link)`
  display: inline-block;
  text-align: center;
  padding: 20px;
  width: 300px;
  height: 56px;
  border: none;
  color: #ffffff;
  background-color: ${themeColor.mainColor};
  font-size: 16px;
  font-weight: bold;

  &::hover {
    cursor: pointer;
  }
`;

const DetailpageH1 = styled.h1`
  margin-bottom: 20px;
  color: ${themeColor.mainColor};
  font-size: 50px;
  font-weight: lighter;
`;
