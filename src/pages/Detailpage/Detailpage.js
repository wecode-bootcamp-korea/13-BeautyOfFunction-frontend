import { useState, useEffect } from "react";
import theme from "./Components/theme";
import { ThemeProvider } from "styled-components";
import StyledSectionComponent from "./Components/StyledSectionComponent";
import BadgesComponent from "./Components/BadgesComponent";
import IngredientsComponent from "./Components/IngredientsComponent";
import RecommendedComponent from "./Components/RecommendedComponent";
import GreatforComponent from "./Components/GreatforComponent";
import DetailPageReviewSectionComponent from "./Components/DetailPageReviewSectionComponent";

const Detailpage = () => {
  const [productDetailData, setProductDetailData] = useState([]);
  const [productReviewData, setProductReviewData] = useState([]);
  const [detailLogo, setDetailLogo] = useState([]);

  useEffect(() => {
    fetch("http://10.58.7.106:8000/products/1")
      .then((response) => response.json())
      .then((data) => {
        setProductDetailData(data.detail_list);
        setProductReviewData(data.review_list);
      });
  }, []);

  useEffect(() => {
    fetch("/Data/DetailpageData.json")
      .then((response) => response.json())
      .then((data) => {
        setDetailLogo(data.detailLogo);
      });
  }, []);

  const {
    image,
    name,
    description,
    ingredients,
    ingredients_url,
    recommended,
    recommended_url,
    great_for,
    great_for_url,
  } = productDetailData;

  console.log(productReviewData);

  return (
    <ThemeProvider theme={theme}>
      <StyledSectionComponent
        image={image}
        name={name}
        description={description}
      />
      <BadgesComponent detailLogo={detailLogo} />
      <section>
        <IngredientsComponent
          ingredients={ingredients}
          ingredients_url={ingredients_url}
        />
        <RecommendedComponent
          recommended={recommended}
          recommended_url={recommended_url}
        />
        <GreatforComponent
          great_for={great_for}
          great_for_url={great_for_url}
        />
      </section>
      <DetailPageReviewSectionComponent review_list={productReviewData} />
    </ThemeProvider>
  );
};

export default Detailpage;
