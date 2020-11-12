import styled from "styled-components";
import QuizFirstPage from "./Component/QuizFirstPage";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

const Quiz = () => {
  return (
    <>
      <Nav />
      <QuizContainer>
        <QuizFirstPage />
      </QuizContainer>
      <Footer />
    </>
  );
};

export default Quiz;

export const QuizContainer = styled.div`
  margin: 0 auto;
  padding: 60px 20px 50px 20px;
  width: 700px;
  color: #4c5150;

  img {
    width: 100%;
  }
`;
