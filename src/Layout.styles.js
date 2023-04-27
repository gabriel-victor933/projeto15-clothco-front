import styled from "styled-components";

export const Body = styled.div`
  max-width: 1070px;
  margin: 0 auto;
  main {
    padding-top: 116px;
    min-height: 100vh;
  }
  @media (max-width: 768px) {
    main {
      padding-top: 92px;
    }
  }
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  height: 116px;
  max-width: 1070px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;

  -webkit-backdrop-filter: saturate(180%) blur(5px);
  backdrop-filter: saturate(180%) blur(5px);
  background: hsla(0, 0%, 100%, 0.8);

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

export const Footer = styled.footer`
  max-width: 1070px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
  }
`;

export const About = styled.div`
  max-width: 700px;
  width: 100%;
  gap: 18px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding: 56px 0;
  border-top: 1px solid rgba(18, 18, 18, 0.1);
  border-bottom: 1px solid rgba(18, 18, 18, 0.1);
  img {
    height: 70px;
    margin-bottom: calc(50px - 18px);
  }
  h3 {
    font-size: 1.3rem;
  }
  p {
    font-size: 14px;
    letter-spacing: 0.5px;
    line-height: 25px;
  }
  div {
    display: flex;
    gap: 10px;
  }
  div svg {
    cursor: pointer;
    font-size: 22px;
    padding: 1px;
  }
  div svg:hover {
    cursor: pointer;
    padding: 0px;
    font-size: 24px;
  }
  @media (max-width: 768px) {
    padding: 42px 0;
  }
`;

export const Info = styled.div`
  width: 100%;
  padding: 56px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 32px;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  div p {
    font-size: 11px;
    width: 300px;
    line-height: 19px;
  }
  div q {
    font-size: 9.5px;
    width: 420px;
    letter-spacing: 0.5px;
    line-height: 14px;
  }
  div q a {
    text-decoration: none;
    color: initial;
    transition: all 1s ease-in-out;
  }
  div q a:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    padding: 36px 0;
    gap: 24px;

    div {
      flex-direction: column;
      gap: 16px;
    }
    div q {
      width: 80%;
    }
  }
`;
