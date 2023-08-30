import { styled } from "styled-components";

import Button from "./Button";

const StyledCard = styled.div`
  /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05); */
  max-width: 350px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--color-grey-300);
`;

const Img = styled.img`
  width: 100%;
`;

const Info = styled.div`
  padding: 20px;
`;

const Heading = styled.p`
  font-size: 17px;
  font-weight: 500;
`;

const InnerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

const Price = styled.span`
  font-weight: 600;
`;

function ProductCard({ product }) {
  const { name, price, image } = product;
  return (
    <>
      <StyledCard>
        <Img src={image} alt="" />

        <Info>
          <Heading>{name}</Heading>
          <InnerInfo>
            <Price>${price}</Price>
            <Button>Add to cart</Button>
          </InnerInfo>
        </Info>
      </StyledCard>
    </>
  );
}

export default ProductCard;
