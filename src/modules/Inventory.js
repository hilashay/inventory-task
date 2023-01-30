import styled from "styled-components";
import Item from "./Item";

const Inventory = ({ inventory }) => {
  const sortedItems = inventory.sort((p1, p2) =>
    p1.quantity < p2.quantity ? 1 : p1.quantity > p2.quantity ? -1 : 0
  );

  return (
    <Container>
      <Title>Products inventory</Title>
      <ItemContainer>
        {sortedItems.map((item, index) => (
          <Item item={item} key={index} />
        ))}
      </ItemContainer>
    </Container>
  );
};

export default Inventory;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #ebf6f5;
`;

const ItemContainer = styled.div`
  background: #ebf6f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-left: 25%;
`;
