/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const Logo = () => <h2 css={styles}>Grocery App</h2>

const styles = css`
  font-size:22px;
  color: #cb6ad2;
  font-weight: 900;
  user-select: none;
`;

export default Logo;