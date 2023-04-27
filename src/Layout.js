import { TfiSearch, TfiBag } from "react-icons/tfi";
import { Body, Header, About, Info, Footer } from "./Layout.styles.js";
import PaymentMethod from "./components/PaymentMethod";
import {
  AiFillBehanceSquare,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import logo from "./assets/Logo.svg";
const Layout = ({ children }) => {
  return (
    <Body>
      <Header>
        <h1>Clothes co.</h1>
        <div>
          <TfiSearch />
          <TfiBag />
        </div>
      </Header>
      <main>{children}</main>
      <Footer>
        <About>
          <img src={logo} alt="logo" />
          <h3>Uma marca que busca inspirar e impulsionar a cultura criativa à frente.</h3>
          <p>
            Encaramos nosso trabalho com a mentalidade de que cada produto é uma experiência de aprendizado
            para aprimorar nossa técnica. Somos praticantes e divulgadores da cultura criativa e nos
            inspiramos em suas diversas formas, como arte, design, moda, música e cinema.
          </p>
          <div>
            <AiFillFacebook />
            <AiFillTwitterSquare />
            <AiFillYoutube />
            <AiFillBehanceSquare />
            <AiFillLinkedin />
          </div>
        </About>
        <Info>
          <div>
            <p>Rua das Flores, 123 Bairro dos Pinheiros Cidade Nova, Estado Utah CEP: 12345-678</p>
            <PaymentMethod />
          </div>
          <div>
            <q>
              © 2023. Todos os direitos reservados. Desenvolvido por
              <a href="https://github.com/Yokuny"> Yokuny</a> e
              <a href="https://github.com/gabriel-victor933"> gabriel-victor</a>.
            </q>
          </div>
        </Info>
      </Footer>
    </Body>
  );
};
export default Layout;
