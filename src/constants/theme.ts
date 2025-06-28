declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: {
    black: string;
    white: string;
    grey: string;
    primary: string;
    red: string;
    redLight: string;
  };
  padding: {
    container: number;
  };
  transitionDurationAndFunc: string;
  spacing: (value?: number) => number;
}

const theme: ITheme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    primary: '#38b6ff',
    red: '#d3232f',
    redLight: '#ff9192',
    grey: '#888888',
  },
  padding: {
    container: 16,
  },
  transitionDurationAndFunc: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => value * 4,
};

export default theme;
