import styled from "styled-components";
import NoteForLastUnits from "./NoteForLastUnits";

const Inventory = ({ inventory }) => {
  const sortedItems = inventory.sort((p1, p2) =>
    p1.quantity < p2.quantity ? 1 : p1.quantity > p2.quantity ? -1 : 0
  );

  return (
    <Container>
      <Title>Products inventory</Title>
      {sortedItems.map((item, index) => (
        <ItemContainer key={index}>
          <Item>
            <ItemName>{item.name}:</ItemName>
            <ItemQuantity>{item.quantity}</ItemQuantity>
            {item.quantity < 25 ? <NoteForLastUnits /> : null}
          </Item>
        </ItemContainer>
      ))}
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
  height: 160px;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-left: 25%;
`;

const Item = styled.div`
  display: flex;
  background: white;
  border-radius: 5px;
  width: 50%;
`;
const ItemName = styled.h2`
  font-size: 24px;
  padding: 40px;
  color: #5cbdb9;
`;
const ItemQuantity = styled.p`
  padding: 40px;
  font-size: 16px;
  align-self: center;
  padding: 10px;
`;
