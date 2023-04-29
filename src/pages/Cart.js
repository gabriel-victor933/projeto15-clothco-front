import { Link } from "react-router-dom";
import styled  from "styled-components" ;
import EmptyCart from "../components/EmptyCart";
import Product from "../components/Product";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

export default function Cart() {

  const [selectedItems, setSelectedItems] = useState([])

  const total = useMemo(()=>{
    if (selectedItems.length === 0) return 0

    const initial = 0
    const sum = selectedItems.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price*currentValue.quantity,
      initial
    );
    console.log(sum)
    return sum
  },[selectedItems])

  useEffect(()=>{

    const config = { headers: { Authorization: "Bearer d111f8f2-674e-49b0-9bc1-2786d655f41b" } }

      axios.get(`${process.env.REACT_APP_API_URL}cart`,config)
      .then((response)=>{
        setSelectedItems(response.data)
      })
      .catch((error)=>{
        console.log(error)
      })
  },[])

  console.log(selectedItems)

  if (selectedItems.length === 0) return <EmptyCart />;

  return (
    <Section>
      <Title>
        <h1>Your Cart</h1>
        <Link to="/">Continue shopping</Link>
      </Title>
      <Title>
        <p>Product</p>
        <p>quantity</p>
        <p>total</p>
      </Title>
      <Products>
        {selectedItems.map((item) => (
          <Product
            key={item.id}
            price={item.price}
            image={item.img}
            title={item.title}
            quantity={item.quantity}
          />
        ))}
      </Products>
      <Total>
        <h2>Subtotal <span>${total.toFixed(2)}</span></h2>
        <Link to="/checkout">
          <button>Checkout</button>
        </Link>  
      </Total>
    </Section>
  );
}


const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 19px;
  p {
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 0.5px;
    line-height: 25px;
  }
`;
const Title = styled.div`
  font-size: 52px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 21px;
  margin-bottom: 10px;
  h1 {
    font-family: "Instrument Serif", serif;
    font-weight: 800;
  }
  a {
    text-decoration: underline;
    font-size: 18px;
    :hover {
      text-decoration-thickness: 2px;
    }
  }
  p {
    font-size: 12px;
    color: rgba(18, 18, 18, 0.75);
  }
`;

const Products = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: space-between;
  border-top: 1px solid rgba(18, 18, 18, 0.1);
  border-bottom: 1px solid rgba(18, 18, 18, 0.1);
  padding: 40px 0px;
`;
const Total = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-top: 40px;
    padding-bottom: 50px;

    h2 {
    font-size: 20px;
    margin-top: 45px;
    margin-bottom: 30px;
  }
  span{
    font-size: 22px;
    color: rgba(18, 18, 18, 0.75);
    margin-left: 15px;
  }
  button {
    color: #000000;
    font-size: 17px;
    background-color: rgb(252, 228, 119);
    border: none;
    border-radius: 5px;
    width: 348px;
    height: 45px;
    box-sizing: content-box;
    :hover {
      box-shadow: 0px 0px 1px 1px rgb(252, 228, 119);
    }
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`
