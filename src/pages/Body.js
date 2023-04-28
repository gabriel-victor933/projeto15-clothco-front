import { BodyStyle } from "../style/Body.style";
const Body = () => {
  // usar use Effect para puxar os produtos
  return (
    <BodyStyle>
      {/* {products.map((item) => (
        <div key={item._id}>
          <img src={item.image} alt={item.title} />
          <h6>{item.title}</h6>
          <p>{item.price}</p>
        </div>
      ))} */}
    </BodyStyle>
  );
};
export default Body;
