import React from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
// import { Font, FontSize } from "../utils/constants";
// import GradientButton from "./common/gradientButton";
// import Text from "./common/text";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const history = useHistory();

  return (
    <div className="tw-sticky tw-top-0 tw-py-8 tw-px-4 tw-flex tw-flex-col">
      <Header />
      <Main />
    </div>
  );
};

export default Home;
