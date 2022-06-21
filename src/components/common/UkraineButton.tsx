import React from "react";
import { Font, FontSize, TextColor } from "../../utils/constants";
import Text from "../common/text";

interface UkraineButtonProps {}

const UkraineButton: React.FC<UkraineButtonProps> = () => {
  return (
    <div className="tw-cursor-pointer tw-px-4 tw-border tw-rounded-full tw-border-black tw-py-2 tw-px-6 tw-text-center">
      <a
        href="https://www.vox.com/future-perfect/22955885/donate-ukraine"
        target="_blank"
        rel="noreferrer"
      >
        <Text
          text={"Help Ukraine 🇺🇦"}
          font={Font.POPPINS}
          fontSize={FontSize.BASE}
          color={TextColor.BLACK}
        />
      </a>
    </div>
  );
};

export default UkraineButton;
