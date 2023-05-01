import { HiPlusSm, HiMinusSm, HiTrash } from "react-icons/hi";
import { Item, Block, Button } from "../style/Cart-Product.style.js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Product = ({ image, title, price, quantity, id }) => {
  const [amount, setAmount] = useState(1);
  const [overAmount, setOverAmount] = useState(false);

  const increase = () => {
    if (amount >= quantity) {
      setOverAmount(true);
      return;
    }
    setAmount((curr) => curr + 1);
  };

  const decrease = () => {
    if (amount <= 0) return;
    if (amount < quantity) {
      setOverAmount(false);
      setAmount((curr) => curr - 1);
    }
  };

  useEffect(() => {
    const allProducts = JSON.parse(localStorage.getItem("cart"));
    const product = allProducts.find((product) => product._id === id);
    setAmount(product.quantity);
    if (product.quantity > quantity) {
      setOverAmount(true);
    } else {
      setOverAmount(false);
    }
  }, [quantity, id]);

  return (
    <Item>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <Block>
        <div>
          <h3>{title}</h3>
          <p>${price.toFixed(2)}</p>
        </div>
        <Button overAmount={overAmount}>
          <p>max {quantity}</p>
          <div>
            <HiMinusSm onClick={decrease} />
            <p>{amount}</p>
            <HiPlusSm onClick={increase} />
          </div>
          <HiTrash />
        </Button>
      </Block>
      <h2>${(price * amount).toFixed(2)}</h2>
    </Item>
  );
};
export default Product;
