import styled from "styled-components";

export const Panel = styled.section`
  display: flex;
  padding: 19px;
  ol li {
    font-size: 1rem;
  }
  .image {
    width: 60%;
    img:first-child {
      width: 100%;
      border-radius: 4px;
      margin-bottom: 10px;
    }
    img:nth-child(2) {
      width: 50%;
      border-radius: 4px;
    }
  }

  .info {
    width: 40%;
    box-sizing: border-box;
    padding-left: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
      font-family: "Instrument Serif", serif;
      font-size: 40px;
      font-weight: 800;
      margin-bottom: 20px;
    }

    p {
      font-size: 16px;
      color: rgba(18, 18, 18, 0.75);
    }

    .total {
      font-size: 18px;
      margin-bottom: 20px;
      color: black;
    }

    button {
      color: #000000;
      font-size: 17px;
      background-color: rgb(252, 228, 119);
      border: none;
      border-radius: 5px;
      width: 100%;
      height: 45px;
      margin-top: 7px;
      margin-bottom: 30px;
      transition: all 0.2s ease-in-out;
      :hover {
        box-shadow: 0px 0px 1px 1.3px rgb(252, 228, 119);
      }
    }

    .cart {
      background-color: white;
      box-sizing: border-box;
      border: 1px solid black;
      border: 1px solid black;
      margin-bottom: 7px;
      transition: all 0.2s ease-in-out;
      :hover {
        background-color: #000000;
        color: white;
        border: 1px #000 solid;
        box-shadow: 0px 0px 0px 0px;
      }
    }
  }

  @media (max-width: 990px) {
    .image {
      width: 50%;
      img:nth-child(2) {
        width: 100%;
      }
    }
    .info {
      width: 50%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    .image {
      width: 100%;
    }
    .info {
      width: 100%;
      padding-left: 0px;
      margin-top: 20px;
    }
  }

  h2 {
    margin-top: 30px;
    font-size: 20px;
    color: rgba(18, 18, 18, 0.75);
  }
  ol {
    list-style-type: disc;
    box-sizing: border-box;
    padding: 10px 30px;
    font-size: 20px;
  }
  li {
    margin: 7px 0px;
    color: rgba(18, 18, 18, 0.75);
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7px;
  margin-bottom: 30px;
  div {
    width: 142px;
    height: 47px;
    border: 1px solid black;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 5px;
    margin-right: 15px;
  }
`;
