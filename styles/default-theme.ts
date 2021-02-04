import { ThemeProps } from "../types/theme";

export const theme: ThemeProps = {
  round: {
    sm: "5px",
  },
  onMobile: (s: string) => `@media (max-width: 800px) { ${s} }`,

  unit: (s: number): string => (!s ? "100%" : `${s * 4}px`),
  placeholder: {
    primary: "#999",
    secondary: "#aaa",
  },
  background: {
    colors: {
      primary: "rgba(45, 40, 60, 1)",
      secondary: "#ddd",
      code: "rgba(42, 39, 52, 1)",
    },
  },
  text: {
    colors: {
      primary: "#ccc",
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
