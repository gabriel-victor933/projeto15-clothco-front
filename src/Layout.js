import styled from "styled-components";
import { TfiSearch, TfiBag } from "react-icons/tfi";
const Layout = ({ children }) => {
  const Header = styled.header`
    max-width: 1050px;
    height: 116px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
      height: 92px;
    }
    h1 {
      font-size: 32px;
      font-family: "Vina Sans", cursive;
    }
    div:last-child {
      display: flex;
      gap: 20px;
    }
    div:last-child svg {
      cursor: pointer;
      font-size: 18px;
      padding: 0.8px;
      transition: all 0.2s ease-in-out;
    }
    div:last-child svg:hover {
      padding: 0px;
      font-size: 19px;
    }
  `;
  const Body = styled.div`
    max-width: 1050px;
    margin: 0 auto;
    padding: 0 20px;
    @media (max-width: 768px) {
      padding: 0 10px;
    }
    main {
      min-height: 100vh;
    }
  `;
  return (
    <Body>
      <Header>
        <h1>Clothes co.</h1>
        <div>
          <TfiSearch />
          <TfiBag />
        </div>
      </Header>
      <main>{children}</main>
      <footer>
        <p>Footer</p>
      </footer>
    </Body>
  );
};
export default Layout;
