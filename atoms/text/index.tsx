import styled from 'styled-components';
import { useTranslation } from "react-i18next";


export interface TextProps {
  weight: "100" | "normal" | "bolder" | "bold" | "900";
  color: "primary" | "secondary" | "accent";
  size:  "xxsm" |"xsm" |"sm" |"md" |"lg" |"xlg" |"xxlg";
  align?: "auto" | "center" | "justify" | "left" | "right";
  variant?: "h1" | "h2" | "p" | "span" 
  keyText?: string;
  children?: string;  
}



export function Text({ variant = "span", ...props}: TextProps): JSX.Element {
  const { t } = useTranslation();
  const text = !!props.keyText ? t(props.keyText) : props.children;

  const StyledText = getComponent(variant);
  return (<StyledText {...props}>{text}</StyledText>)
}

const getComponent = variant => styled[variant](
  ({ theme, color, align, weight, size }: Theme & TextProps) => `
    align: ${align};
    font-size: ${theme.text.sizes[size]};
    font-weight: ${weight};
    color: ${theme.text.colors[color]}
  `
);