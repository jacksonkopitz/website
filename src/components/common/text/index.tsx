import { Font, FontSize, TextColor } from "../../../utils/constants";

interface TextProps {
  text: string;
  font: Font;
  fontSize?: FontSize;
  color?: TextColor;
}

export const Text: React.FC<TextProps> = ({
  text,
  font,
  fontSize = FontSize.BASE,
  color = TextColor.BLACK,
}) => {
  const style = `tw-font-${font} tw-text-${color} tw-text-${fontSize} tw-tracking-wide`;
  return <span className={style}>{text}</span>;
};

export default Text;
