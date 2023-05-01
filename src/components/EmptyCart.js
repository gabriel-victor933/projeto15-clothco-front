import { Link } from "react-router-dom";
import styled  from "styled-components" 

export default function EmptyCart() {


  return (
    <Container>
      <h1>Your Cart is empty</h1>
      <Link to="/">
        <button>Continue shopping</button>
      </Link>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  h1 {
    margin-top: 45px;
    margin-bottom: 30px;
    text-align: center;
    font-family: "Instrument Serif", serif;
    font-weight: 800;
    font-size: 52px;
  }
  button {
    font-size: 17px;
    background-color: rgb(188, 254, 47);
    border: none;
    border-radius: 5px;
    width: 208px;
    height: 45px;
    box-sizing: content-box;
    border: 1px solid transparent;
    transform: all 0.2s ease-in-out;
    :hover {
      border: 1px solid #000;
      box-shadow: 0px 0px 1px 1px rgb(188, 254, 47);
    }
  }
`;