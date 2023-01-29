import styled from "styled-components";

function App() {
  const item = { name: "222", quantity: 132 };
  return (
    <Container>
      <ItemName>{item.name}:</ItemName>
      <ItemQuantity>{item.quantity}</ItemQuantity>
    </Container>
  );
}

export default App;

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
// [{"name":"222","quantity":132},{"name":"2023","quantity":22},{"name":"moshe","quantity":32432434},{"name":"beef burger","quantity":56},{"name":"eggs","quantity":123123123},{"name":"nati bodek","quantity":132},{"name":"milk","quantity":555},{"name":"doodle","quantity":132},{"name":"shampoo","quantity":322},{"name":"Checki","quantity":456213}]
