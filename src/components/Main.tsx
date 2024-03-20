import React from "react";
import "../App.css";
import { Font, FontSize, TextColor } from "../utils/constants";
import Text from "./common/text";

interface MainProps {}

const EMAIL = "jkopitz1@gmail.com";
const LINKED_IN_URL = "https://www.linkedin.com/in/jackson5375/";
const NAME = "Jackson Kopitz";

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
    copyTextToClipboard(EMAIL)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="tw-pl-8 tw-pt-24 tw-flex tw-flex-col sm:tw-pl-32">
      <div className="tw-w-72">
        <div className={"tw-pb-1"}>
          <Text
            text={NAME}
            font={Font.ARVO_BOLD}
            fontSize={FontSize.XL3}
            color={TextColor.BLACK}
          />
        </div>

        <div className="tw-pl-4">
          <div>
            <a href={LINKED_IN_URL} target="_blank" rel="noreferrer">
              <Text
                text={"LinkedIn"}
                font={Font.ARVO_BOLD}
                fontSize={FontSize.BASE}
                color={TextColor.BLACK}
              />
            </a>
          </div>

          <div>
            <span onClick={handleCopyClick} className="tw-cursor-pointer">
              <Text
                text={isCopied ? "Copied!" : "Email"}
                font={Font.ARVO_BOLD}
                fontSize={FontSize.BASE}
                color={TextColor.BLACK}
              />
            </span>
          </div>

          <div>
            <span>
              <a
                href="https://www.vox.com/future-perfect/22955885/donate-ukraine"
                target="_blank"
                rel="noreferrer"
              >
                <Text
                  text={"Support Ukraine 🇺🇦"}
                  font={Font.ARVO_BOLD}
                  fontSize={FontSize.BASE}
                  color={TextColor.BLACK}
                />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
