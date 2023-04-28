import styled from "styled-components"
import { Link } from "react-router-dom"
import { useRef } from "react";

export default function Checkout(){
  
  const serverResponse = false;

  if(!serverResponse) return <Sucess />

  return  <Failure />
}

function Sucess(){
  return (
    <Section ref={myRef}>
      <h1 ref={myRef}>Congratulations! Your purchase is complete. </h1>
      <p>An email confirmation will be sent to you shortly.</p>
      <Link to="/">
        <button>Continue shopping</button>
      </Link>
    </Section>
  );
}

function Failure(){
  return (
    <Section>
      <h1>Your order could not be completed at this time. </h1>
      <p>Please try again later.</p>
      <Link to="/">
        <button>Continue shopping</button>
      </Link>
    </Section> 
  )
}

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;

    h1 {
    margin-top: 45px;
    margin-bottom: 15px;
    font-family: "Instrument Serif", serif;
    font-weight: 800;
    font-size: 40px;
    text-align: center;
  }
  p {
    margin-bottom: 40px;
  }
    button {
    color: #000000;
    font-size: 17px;
    background-color: rgb(252, 228, 119);
    border: none;
    border-radius: 5px;
    width: 208px;
    height: 45px;
    box-sizing: content-box;
    :hover {
      box-shadow: 0px 0px 1px 1px rgb(252, 228, 119);
    }
  }
`