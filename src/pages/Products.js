import { useParams } from "react-router"
import styled from "styled-components"
import {HiPlusSm, HiMinusSm } from "react-icons/hi";

const imagem_frente_URL = "https://cdn.shopify.com/s/files/1/0612/2477/9832/products/Ebbets-C_Cap_Camel_Front-Angle_1080x_8d228c8c-2958-43f0-bd30-7258cb3df3fc.webp?v=1676406497&width=823"
const imagem_costa_URL = "https://cdn.shopify.com/s/files/1/0612/2477/9832/products/Ebbets-C_Cap_Camel_Back_1080x_50142e26-b3dc-4003-8bc7-5f5a2cf98fdd.webp?v=1676406501&width=823"


export default function Products(){

    const { id } = useParams()

    return (
        <Panel>
            <div className="image">
                <img src={imagem_frente_URL} alt="img"/>
                <img src={imagem_costa_URL} alt="img"/>
            </div>
            <div className="info">
                <h1>Cap Wool</h1>
                <p className="total">$48.00</p>
                <p>Quantity</p>
                <Button>
                    <div>
                        <HiMinusSm />
                        <p>1</p>
                        <HiPlusSm />
                    </div>
                </Button>
                <button className="cart">Add to cart</button>
                <button>Buy it now</button>

                <h2>Details:</h2>
                <ol>
                  {details.map((d)=><li>{d}</li>)}
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
    margin: 7px 0px;
    :hover {
      box-shadow: 0px 0px 1px 1.3px rgb(252, 228, 119);
    }

  }

  .cart {
    background-color: white;
    box-sizing: border-box;
    border: 1px solid black;
    box-shadow: rgb(18,18,18) 0px 0px 0px 0.3px;

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
    margin-top: 40px;
    margin-bottom: 10px;
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


const details = ["Made in the USA",
"Genuine wool broadcloth, white felt \"Coursework C\" icon  with combined embroidery",
"Soft visor with green satin under visor",
"Vintage hair cloth backed buckram crown",
"Satin taping with cotton sweatband",
"Black leather strap and black metal press closure"]