declare global {
  interface GlobalTheme {
    theme: Theme;
  }
}

export interface Theme {
  round: {
    sm: string;
  };
  unit: (s: number) => string;
  placeholder: {
    primary: string;
    secondary: string;
  };
  background: {
    colors: {
      primary: string;
      secondary: string;
    };
  };
  text: {
    colors: {
      primary: string;
      muted: string;
      accent: string;
    };
  };
}
