// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bg: string;
      primary: string;
      white: string;
      black: string;
      grey: string;
      green: string;
    };
    fonts: {
      sizes: {
        px80: string;
        px25: string;
        px16: string;
        px24: string;
        px28: string;
        px20: string;
        px18: string;
        px35: string;
        px22: string;
        px14: string;
        px30: string;
        px33: string;
      };
      weights: {
        f400: number;
        f500: number;
        f600: number;
        f700: number;
      };
      FontFace: {
        primary: string;
        secondary: string;
      };
    };
    border: {
      width: {
        light: string;
        normal: string;
        large: string;
        xl: string;
      };
      radius: {
        px5: string;
        px20: string;
        px50: string;
      };
    };
  }
}
