import { Section, Title, Products, Total } from "../style/Cart.style";
import { useEffect, useState } from "react";
import EmptyCart from "../components/EmptyCart";
import Product from "../components/Product";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Cart() {
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const itens = JSON.parse(localStorage.getItem("cart"));
    setItems(itens);
  }, []);

  const getProducts = async () => {
    try {
      const reqString = process.env.REACT_APP_API_URL;
      const promises = items.map((item) => axios.get(`${reqString}product/${item._id}`));
      const responses = await Promise.all(promises);
      const products = responses.map((response) => response.data);
      setProducts(products);
    } catch (err) {
      console.log(err);
      setProducts([]);
    }
  };

  useEffect(() => {
    if (items.length > 0) {
      getProducts();
    }
  }, [items]);

  if (products.length === 0) return <EmptyCart />;
  const total = products.reduce((total, curr) => total + curr.price * curr.quantity, 0);

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
        {products.map((item) => (
          <Product
            key={item._id}
            image={item.img}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            id={item._id}
          />
        ))}
      </Products>
      <Total>
        <h2>
          Subtotal <span>${total.toFixed(2)}</span>
        </h2>
        <Link to="/checkout">
          <button>Checkout</button>
        </Link>
      </Total>
    </Section>
  );
}
