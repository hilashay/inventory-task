import styled from "styled-components";
import NoteForLastUnits from "./NoteForLastUnits";

const Item = ({ item }) => {
  return (
    <Container>
      {item.name ? <ItemName> {item.name}</ItemName> : <NoNameItem>No name found:</NoNameItem>}
      <ItemQuantity>{item.quantity}</ItemQuantity>
      {item.quantity < 25 ? <NoteForLastUnits /> : null}
    </Container>
  );
};

export default Item;

const Container = styled.div`
  display: flex;
  background: white;
  border-radius: 5px;
  width: 50%;
  margin: 10px;
`;
const ItemName = styled.h2`
  font-size: 24px;
  padding: 40px;
  color: #5cbdb9;
`;

const NoNameItem = styled.h2`
  font-size: 24px;
  padding: 40px;
  color: #a0a0a0;
`;

const ItemQuantity = styled.p`
  padding: 40px;
  font-size: 16px;
  align-self: center;
  padding: 10px;
`;
