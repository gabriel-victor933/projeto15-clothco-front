import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const CheckoutContent = () => {
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const itens = JSON.parse(localStorage.getItem("cart")) || [];
    setItems(itens);
  }, []);
  useEffect(() => {
    const getProducts = async () => {
      if (items.length > 0) {
        const reqString = process.env.REACT_APP_API_URL;
        try {
          const promises = items.map((item) => axios.get(`${reqString}product/${item._id}`));
          const responses = await Promise.all(promises);
          const products = responses.map((response) => response.data);
          setProducts(products);
          localStorage.removeItem("cart");
        } catch (err) {
          console.log(err);
          setProducts([]);
        }
      }
    };
    getProducts();
  }, [items]);

  return (
    <Table>
      <thead>
        <tr>
          <th>item</th>
          <th>amount</th>
          <th>unity price</th>
          <th>total</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={product._id}>
            <td>{product.title}</td>
            <td>{items[index].quantity}</td>
            <td>$ {product.price}</td>
            <td>$ {product.quantity * items[index].quantity}</td>
          </tr>
        ))}
        <tr>
          <td colSpan="4">transaction _id</td>
        </tr>
      </tbody>
    </Table>
  );
};
export default CheckoutContent;

const Table = styled.table`
  width: 100%;
  margin: 8vh 0px;
  thead,
  tbody,
  tr,
  th,
  td {
    padding: 0.6rem;
    text-align: center;
    border: 1px solid gray;
  }
  thead,
  tr {
    border-left: 3px solid rgb(188, 254, 47);
  }
  thead,
  th {
    font-family: "Instrument Serif", serif;
    font-style: italic;
    font-size: 1.4rem;
  }
  tbody {
    font-size: 1rem;
  }
`;
