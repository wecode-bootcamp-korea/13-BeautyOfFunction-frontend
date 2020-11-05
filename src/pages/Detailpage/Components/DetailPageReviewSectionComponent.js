import Slider from "react-slick";
import styled, { css } from "styled-components";
import { themeColor } from "./theme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DetailPageReviewSectionComponent = ({ detailReview }) => {
  const reviewSettings = {
    dots: false,
    infinite: true,
    arrow: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <DetailPageReviewSection>
      <DetailpageH1>the people have spoken</DetailpageH1>
      <div className="detailPageReviewWraper">
        <Slider {...reviewSettings}>
          {detailReview?.map(
            ({ starRating, name, text, hairProfile, goal, fragrance }) => {
              return (
                <DetailPageReview>
                  <StarRating>{starRating}</StarRating>
                  <div>
                    <Name>{name}</Name>
                    <Text>{text}</Text>
                    <UserProfile>
                      <div>
                        <SpanTitle>hair profile: </SpanTitle>
                        <span>{hairProfile}</span>
                      </div>
                      <div>
                        <SpanTitle>goals: </SpanTitle>
                        <span>{goal}</span>
                      </div>
                      <div>
                        <SpanTitle>fragrance: </SpanTitle>
                        <span>{fragrance}</span>
                      </div>
                    </UserProfile>
                  </div>
                </DetailPageReview>
              );
            }
          )}
        </Slider>
      </div>
    </DetailPageReviewSection>
  );
};

export default DetailPageReviewSectionComponent;

const slickButtonDefalt = css`
  background-color: white;
  border: 1px solid #e6ebea;
  border-radius: 50%;
`;

const slickBefore = css`
  width: 30px;
  height: 50px;
  content: "";
  background-size: cover;
  background-position: center;
  position: absolute;
  left: 50%;
  top: 50%;
`;

const DetailPageReviewSection = styled.section`
  margin: 50px 0px 80px;
  height: 580px;
  text-align: center;
  overflow: hidden;

  h1 {
    padding: 40px;
  }

  .detailPageReviewWraper {
    .slick-arrow {
      width: 80px;
      height: 80px;
      z-index: 2;
      top: 225px;
    }
    .slick-prev {
      left: 20px;
      box-shadow: -3px 9px 5px 0px rgba(50, 50, 50, 0.43);
      ${slickButtonDefalt}
    }
    .slick-next {
      right: 20px;
      box-shadow: 3px 9px 5px 0px rgba(50, 50, 50, 0.4);
      ${slickButtonDefalt}
    }
    .slick-prev:before {
      ${slickBefore}
      background-image: url(/Images/left-removebg-preview.png);
      transform: translate(-68%, -50%);
    }
    .slick-next:before {
      ${slickBefore}
      background-image: url(/Images/right-removebg-preview.png);
      transform: translate(-44%, -50%);
    }

    .slick-list {
      margin: 0 -20px;
      .slick-slide {
        margin: 0 20px;
      }
    }
  }
`;

const DetailpageH1 = styled.h1`
  margin-bottom: 20px;
  color: ${themeColor.mainColor};
  font-size: 50px;
  font-weight: lighter;
`;

const DetailPageReview = styled.div`
  margin: 20px;
  padding: 20px;
  width: 400px;
  height: 400px;
  text-align: left;
  box-shadow: 0 2px 20px 0 rgba(203, 203, 203, 0.5);
`;

const SpanTitle = styled.span`
  font-weight: bold;
`;

const StarRating = styled.div`
  font-size: 16px;
  color: ${themeColor.mainColor};
  margin-bottom: 25px;
`;

const Name = styled.div`
  color: #353535;
`;

const Text = styled.div`
  width: 360px;
  height: 118px;
  color: #6b6b6b;
`;

const UserProfile = styled.div`
  color: #cbcbcb;
`;
