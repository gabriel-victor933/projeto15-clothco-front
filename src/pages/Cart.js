import { Section, Title, Products, Total } from "../style/Cart.style";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmptyCart from "../components/EmptyCart";
import Product from "../components/Product";
import axios from "axios";

const Cart = () => {
  const [removing, setRemoving] = useState(false);
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  //pegando itens do localStorage, e atualizando caso item seja removido
  useEffect(() => {
    const itens = JSON.parse(localStorage.getItem("cart")) || [];
    setItems(itens);
  }, [removing]);
  //usando itens do localStorage para pegar os produtos
  useEffect(() => {
    const getProducts = async () => {
      if (items.length > 0) {
        const reqString = process.env.REACT_APP_API_URL;
        try {
          const promises = items.map((item) => axios.get(`${reqString}product/${item._id}`));
          const responses = await Promise.all(promises);
          const products = responses.map((response) => response.data);
          setProducts(products);
        } catch (err) {
          console.log(err);
          setProducts([]);
        }
      }
    };
    getProducts();
  }, [items]);
  //calculando o valor total inicial
  useEffect(() => {
    const totalAmount = items.reduce((total, item) => {
      const product = products.find((p) => p._id === item._id);
      return product ? total + product.price * item.quantity : total;
    }, 0);
    setTotal(totalAmount);
  }, [items, products]);
  //calculando o valor total a cada mudança
  const setTotalPrice = (value, type) => {
    if (type === "increase") setTotal((curr) => curr + value);
    if (type === "decrease") setTotal((curr) => curr - value);
  };
  //finalizando a compra
  const finishPayment = async () => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/signIn");

    const products = JSON.parse(localStorage.getItem("cart"));
    const body = { products: products.map((item) => ({ id: item._id, quantity: item.quantity })) };

    const reqString = process.env.REACT_APP_API_URL;
    const config = { headers: { Authorization: `Bearer ${token}` } };

    try {
      const response = await axios.post(`${reqString}checkout`, body, config);
      //resetar quando comprar for finalizadad e adicionada ao banco de dados de transações
      // localStorage.removeItem("cart");
      // setProducts([]);
      // setTotal(0);
    } catch (err) {
      console.log(err);
    }
  };

  if (products.length === 0) return <EmptyCart />;

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
            total={setTotalPrice}
            removing={setRemoving}
          />
        ))}
      </Products>

      <Total>
        <h2>
          Subtotal<span>{total.toFixed(2)}</span>
        </h2>
        <button onClick={finishPayment}>Checkout</button>
      </Total>
    </Section>
  );
};
export default Cart;