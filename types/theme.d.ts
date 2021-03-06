declare global {
  interface Theme {
    theme: ThemeProps;
  }
}

export interface ThemeProps {
  round: {
    sm: string;
  };
  onMobile: (s: string) => string;
  unit: (s: number) => string;
  placeholder: {
    primary: string;
    secondary: string;
  };
  background: {
    colors: {
      primary: string;
      secondary: string;
      code: string;
    };
  };
  text: {
    colors: {
      primary: string;
      muted: string;
      accent: string;
    };
    sizes: {
      xxsm: string;
      xsm: string;
      sm: string;
      md: string;
      lg: string;
      xlg: string;
      xxlg: string;
    };
  };
}
