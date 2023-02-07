import React from "react";
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
            text={"Jackson Kopitz"}
            font={Font.ARVO_BOLD}
            fontSize={FontSize.XL3}
            color={TextColor.BLACK}
          />
        </div>

        <div className="tw-pl-4">
          <div>
            <a
              href="https://www.linkedin.com/in/jacksonkopitz/"
              target="_blank"
              rel="noreferrer"
            >
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

          <div>
            <span>
              <a
                href="https://www.nytimes.com/2023/02/06/world/europe/helping-earthquake-victims-turkey-syria.html?smid=nytcore-ios-share&referringSource=articleShare"
                target="_blank"
                rel="noreferrer"
              >
                <Text
                  text={"Help Turkey 🇹🇷 and Syria 🇸🇾"}
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
