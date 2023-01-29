import { useInventory } from "../useInventory";
import styled from "styled-components";

const Inventory = () => {
  const items = useInventory();

  return (
    <>
      {items.map((item, index) => (
        <Container key={index}>
          <ItemName>{item.name}:</ItemName>
          <ItemQuantity>{item.quantity}</ItemQuantity>
        </Container>
      ))}
    </>
  );
};

export default Inventory;

const Container = styled.div`
  display: flex;
`;
const ItemName = styled.h2`
  font-size: 24px;
`;
const ItemQuantity = styled.p`
  font-size: 16px;
  align-self: center;
  padding: 10px;
`;
