import React from "react";
import Main from "./Main";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <div className="tw-sticky tw-top-0">
      <Main />
    </div>
  );
};

export default Home;
