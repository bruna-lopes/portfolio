import { css } from "@emotion/react";
import { Gradients, Colors } from "./colors";

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    background: ${Gradients.blueToPinkTwo};
    width: 100vw;
    height: 100vh;
  }
`;

export default globalStyles;
