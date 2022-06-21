import React from "react";
import UkraineButton from "./common/UkraineButton";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="tw-sticky tw-top-0 tw-py-2 tw-px-2 tw-flex tw-flex-row-reverse tw-items-center">
      <UkraineButton />
    </div>
  );
};

export default Header;
