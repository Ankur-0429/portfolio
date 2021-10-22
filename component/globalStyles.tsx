import { createGlobalStyle, DefaultTheme} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }:any) => theme.body};
    color: ${({ theme }:any) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.30s linear;
  }  
  `