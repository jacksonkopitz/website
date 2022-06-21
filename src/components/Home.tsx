import React from "react";
import Header from "./Header";
import Main from "./Main";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <div className="tw-sticky tw-top-0 tw-py-8 tw-px-4 tw-flex tw-flex-col">
      <Header />
      <Main />
    </div>
  );
};

export default Home;
