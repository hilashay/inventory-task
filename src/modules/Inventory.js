import { useState } from "react";
import styled from "styled-components";
import Item from "./Item";
import { Button } from "../components/common/button";

const Inventory = ({ inventory }) => {
  const [shouldFilter, setShouldFilter] = useState(false);
  const items = inventory;

  const handleClick = (items) => {
    setShouldFilter(true);
    return items.sort((item1, item2) =>
      item1.quantity < item2.quantity ? 1 : item1.quantity > item2.quantity ? -1 : 0
    );
  };

  return (
    <Container>
      <Title>Products inventory</Title>
      <SortButten onClick={() => handleClick(items)}>High to low</SortButten>
      <ItemContainer>
        {items.map((item, index) => (
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

const SortButten = styled(Button)`
  margin-left: 25%;
  margin-bottom: 25px;
`;
