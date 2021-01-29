import { Theme } from "../types/theme";

export const theme: Theme = {
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
  },
};
