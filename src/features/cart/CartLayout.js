import { styled } from "styled-components";
import CartCard from "../../ui/CartCard";

const StyledCartLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const cartProducts = [
  {
    id: 1,
    name: "boAt Rockerz 400 Bluetooth",
    price: 25,
    image: "assets/2.jpg",
  },
  {
    id: 2,
    name: "ZEBRONICS Zeb-Thunder",
    price: 15,
    image: "assets/3.jpg",
  },
];

function CartLayout() {
  return (
    <StyledCartLayout>
      <h2>Cart: {cartProducts.length}</h2>
      {cartProducts.map((product) => (
        <CartCard key={product.id} product={product} />
      ))}
    </StyledCartLayout>
  );
}

export default CartLayout;
