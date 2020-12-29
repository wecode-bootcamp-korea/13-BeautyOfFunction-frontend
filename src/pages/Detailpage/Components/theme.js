import { css } from "styled-components";

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const square600 = css`
  width: 600px;
  height: 600px;
  padding-top: 50px;
`;

export const themeColor = {
  mainColor: "#61c8b3",
};

const theme = {
  flexCenter,
  square600,
  themeColor,
};

export default theme;
