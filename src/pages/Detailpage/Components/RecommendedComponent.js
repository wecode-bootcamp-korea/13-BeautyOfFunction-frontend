import styled from "styled-components";
import { flexCenter, themeColor } from "./theme";

const RecommendedComponent = ({ recommended, recommended_url }) => {
  return (
    <>
      <MoreInfo>
        <img src={recommended_url} alt="ingredients 설명입니다." />
        <div>
          <div>
            <sup>2/3</sup>
            <DetailpageH1>recommended</DetailpageH1>
            <p>{recommended}</p>
          </div>
        </div>
      </MoreInfo>
    </>
  );
};

export default RecommendedComponent;

const MoreInfo = styled.div`
  ${flexCenter}

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 200px;
    width: 50%;
    height: 700px;

    div {
      margin-left: -60px;
      padding: 40px;
      width: 464px;
      height: 263px;

      sup {
        margin-left: -10px;
      }
      h1 {
        padding-left: 30px;
        font-size: 40px;
      }
      p {
        margin: 16px 0px;
        padding-left: 30px;
        color: #878e8d;
        font-size: 15px;
        line-height: 30px;
      }
    }
  }

  img {
    width: 50%;
    height: 700px;
  }
`;

const DetailpageH1 = styled.h1`
  margin-bottom: 20px;
  color: ${themeColor.mainColor};
  font-size: 50px;
  font-weight: lighter;
`;
