import styled from "styled-components";
import { flexCenter, themeColor } from "./theme";

const BadgesComponent = ({ detailLogo }) => {
  return (
    <Badges>
      <DetailpageH1>CLEAN, SCIENCE-BACKED INGREDIENTS</DetailpageH1>
      <div>
        {detailLogo?.map(({ src, alt }, idx) => {
          return <img key={idx} src={src} alt={alt} />;
        })}
      </div>
    </Badges>
  );
};

export default BadgesComponent;

const Badges = styled.section`
  margin: 120px 0px;
  padding: 100px 20px 60px 20px;
  background-color: #fffaf9;

  h1 {
    display: block;
    align-items: center;
    text-align: center;
    height: 50px;
    font-size: 32px;
  }

  div {
    ${flexCenter}
    margin: 40px 74px 0px 74px;
    padding-bottom: 60px;

    img {
      margin: 8px;
      width: 100px;
    }
  }
`;

const DetailpageH1 = styled.h1`
  margin-bottom: 20px;
  color: ${themeColor.mainColor};
  font-size: 50px;
  font-weight: lighter;
`;
