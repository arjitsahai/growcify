/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useContext } from "react";
import { GroceryContext } from "../context/grocery";

import Link from "./link";

const Menu = () => {
    const {hiddenMenu} = useContext(GroceryContext);


    return(
        <div css={styles} className={(hiddenMenu ? "hidden" : "") + " menu"}>
            <Link btnText="All" />
            <Link btnText="New" />
        </div>
    );
};

const styles = css`
  padding-left: 80px;
  @media(max-width: 860){
      position: absolute;
      top: 0;
      left: 0;
      opacity: 1;
      min-height: 100vh;
      background: rgba(0,0,0,0.8);
      padding: 20px 50px;
      width: 100%;
      max-width: 340px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      transition: all 800ms ease-in-out;
      &.hidden {
          left: -600px;
          opacity: 0;
      }
  }
`;

export default Menu;