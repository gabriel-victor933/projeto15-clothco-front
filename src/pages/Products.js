import { useParams, useNavigate } from "react-router"
import styled from "styled-components"
import {HiPlusSm, HiMinusSm } from "react-icons/hi";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Products(){

    const { id } = useParams()
    const navigate = useNavigate()

    const [item, setItem] = useState({})
    const [quantity,setQuantity] = useState(1)

    useEffect(()=>{

      axios.get(`${process.env.REACT_APP_API_URL}product/${id}`)
      .then(({data})=>{
        setItem(data)
      })
      .catch((erro)=>{
        console.log(erro)
      })
    },[id])

    function changeQuantity(i){
      if(quantity > 1 || i === 1)  setQuantity(quantity + i)
    }

    function addToCart(){
      const order = {_id: item._id, title: item.title, quantity}
      console.log(order)
      //send to cart
    }

    function buyNow(){
      addToCart()
      navigate("/cart")
    }
    
    return (
        <Panel>
            <div className="image">
                <img src={item.img} alt={item.title}/>
                <img src={item.imgb} alt={item.title}/>
            </div>
            <div className="info">
                <h1>{item.title}</h1>
                <p className="total">${item.price?.toFixed(2)}</p>
                <p>Quantity</p>
                <Button>
                    <div>
                        <HiMinusSm onClick={()=>changeQuantity(-1)}/>
                        <p>{quantity}</p>
                        <HiPlusSm onClick={()=>changeQuantity(1)}/>
                    </div>
                </Button>
                <button className="cart" onClick={addToCart}>Add to cart</button>
                <button onClick={buyNow}>Buy it now</button>

                <h2>Type: {item.type}</h2>
                <h2>Color: {item.color}</h2>
                <h2>Details:</h2>
                <ol>
                  {item.description?.map((d,i)=><li key={i}>{d}</li>)}
                </ol>
            </div>
        </Panel>
    )
}

const Panel = styled.section`
  display: flex;
  padding: 19px;

  .image{
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
    :hover {
      box-shadow: 0px 0px 1px 1.3px rgb(252, 228, 119);
    }

  }

  .cart {
    background-color: white;
    box-sizing: border-box;
    border: 1px solid black;
    box-shadow: rgb(18,18,18) 0px 0px 0px 0.3px;
    margin-bottom: 7px;

    :hover{
        box-shadow: rgb(18,18,18) 0px 0px 0px 1.3px;
    }
  }
    
  }

  @media (max-width: 990px) {

    .image{
        width: 50%;
        img:nth-child(2) {
        width: 100%;
    }
    }
    .info{
        width: 50%;
        
    }
    
  }

  @media (max-width: 768px){
    flex-direction: column;
    .image{
        width: 100%;
    }
    .info{
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


  ol{
    list-style-type: disc;
    box-sizing: border-box;
    padding: 10px 30px;
    font-size: 20px;
  }

  li{
    margin: 7px 0px;
    color: rgba(18, 18, 18, 0.75);
  }

`

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7px;
  margin-bottom:  30px;
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
