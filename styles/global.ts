import { css, Theme } from "@emotion/react";

const createGlobalStyles = (theme: Theme) => css`
  :root {
    color: ${theme.darkMode ? theme.color.positive : theme.color.negative};
    background: ${theme.darkMode ? theme.color.negative : theme.color.positive};
  }
`;

export default createGlobalStyles;
