import React from "react";
import UkraineButton from "./common/UkraineButton";
import "../App.css";
import { Font, FontSize, TextColor } from "../utils/constants";
import Text from "./common/text";

interface MainProps {}

export const Main: React.FC<MainProps> = () => {
  const [isCopied, setIsCopied] = React.useState(false);

  async function copyTextToClipboard(text: string) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard("jsk363@cornell.edu")
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="tw-pb-16 tw-pt-44 tw-flex tw-flex-col tw-text-center">
      <div className="tw-py-2">
        <Text
          text={"Jackson Kopitz"}
          font={Font.POPPINS}
          fontSize={FontSize.XL4}
          color={TextColor.BLACK}
        />
      </div>

      <div className="tw-flex tw-flex-col tw-text-center">
        <div>
          <a
            href="https://www.linkedin.com/in/jacksonkopitz/"
            target="_blank"
            rel="noreferrer"
            className="tw-px-2"
          >
            <Text
              text={"LinkedIn"}
              font={Font.POPPINS}
              fontSize={FontSize.BASE}
              color={TextColor.BLACK}
            />
          </a>
        </div>

        <div>
          <span onClick={handleCopyClick} className="tw-cursor-pointer">
            <Text
              text={isCopied ? "Copied!" : "Email"}
              font={Font.POPPINS}
              fontSize={FontSize.BASE}
              color={TextColor.BLACK}
            />
          </span>
        </div>

        <div>
          <Text
            text={"(more coming soon, maybe)"}
            font={Font.POPPINS}
            fontSize={FontSize.XS}
            color={TextColor.BLACK}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
