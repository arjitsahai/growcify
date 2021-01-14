/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import {useContext} from "react";
import {GroceryContext} from "../context/grocery";




const Link = ({btnText}) => {
    const { setHiddenMenu, activeLink, setActiveLink} = useContext(GroceryContext);


    return(
        <button onClick ={()=> {
            setActiveLink(btnText);
            setHiddenMenu(true);
        }} css={styles}
        style ={{ color: activeLink === btnText ? "#f9a5ff" : "white" }}>{btnText}</button>
    );
};

const styles = css`
  border: none;
  outline: none;
  background: transparent;
  font-size: 22px;
  margin-right: 24px;
  font-weight: 700;
  cursor: pointer;
  user-select: none;
  @media (max-width: 860px) {
      font-size: 40px;
  }
`;

export default Link;