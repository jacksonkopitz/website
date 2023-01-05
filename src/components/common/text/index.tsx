import {
  Font,
  FontSize,
  MobileFontSize,
  TextColor,
} from "../../../utils/constants";

interface TextProps {
  text: string;
  font: Font;
  fontSize?: FontSize;
  color?: TextColor;
}

const FontSizeToMobileFontSize = {
  [FontSize.BASE]: MobileFontSize.XS,
  [FontSize.LARGE]: MobileFontSize.BASE,
  [FontSize.XL]: MobileFontSize.LARGE,
  [FontSize.XL2]: MobileFontSize.XL,
  [FontSize.XL3]: MobileFontSize.XL2,
  [FontSize.XL4]: MobileFontSize.XL3,
  [FontSize.XL8]: MobileFontSize.XL4,
};

export const Text: React.FC<TextProps> = ({
  text,
  font,
  fontSize = FontSize.BASE,
  color = TextColor.BLACK,
}) => {
  const fontSizeForDevice = `tw-text-${FontSizeToMobileFontSize[fontSize]} sm:tw-text-${fontSize}`;
  const trackingDevice = `tw-tracking-wide sm:tw-tracking-wide`;
  const style = `${fontSizeForDevice} ${trackingDevice} tw-font-${font} tw-text-${color} `;
  return <span className={style}>{text}</span>;
};

export default Text;
