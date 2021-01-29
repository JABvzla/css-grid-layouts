import { ThemeProps } from "../types/theme";

export const theme: ThemeProps = {
  round: {
    sm: "5px",
  },
  unit: (s: number): string => `${s * 4}px`,
  placeholder: {
    primary: "#999",
    secondary: "#aaa",
  },
  background: {
    colors: {
      primary: "#333",
      secondary: "#acc",
    },
  },
  text: {
    colors: {
      primary: "#000",
      muted: "#000",
      accent: "#ff0",
    },
    sizes: {
      xxsm: "0.4rem",
      xsm: "0.6rem",
      sm: "0.8rem",
      md: "1rem",
      lg: "1.2rem",
      xlg: "1.4rem",
      xxlg: "2rem",
    },
  },
};
