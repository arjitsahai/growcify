/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useContext } from "react";
import {GroceryContext} from "../context/grocery"

import Container from "./container";
import Logo from "./logo";
import Menu from "./menu"
import Search from "./search"


const Nav = () => {
    const {hiddenMenu, setHiddenMenu} = useContext(GroceryContext);


    return(
        <nav css={styles}>
            <Container>
                <div className="wrapper">
                <Logo />
                <Menu />
                </div>
                <Search />
                <i 
                onClick = {()=> setHiddenMenu(!hiddenMenu)}  
                id="burger" 
                className={hiddenMenu ? "fas fa-bars" : "fas fa-times"}></i>
            </Container>
        </nav>
    );
};

const styles = css`
  width: 100%;
  min-height: 80px;
  padding: 20px 0;
  background: #212229;
  .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .wrapper {
          display: flex;
          align-items: center;
      }
      #burger {
          color: #f9a5ff;
          cursor: pointer;
          display: none;
      }
  }
  @media (max-width: 860px) {
      .container {
          #burger {
              display: block;
          }
      }
  }
  @media (max- width: 1365px) {
      .container {
          max-width: 90%
      }
  }
`;

export default Nav;