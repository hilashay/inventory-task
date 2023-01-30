import { useState } from "react";
import styled from "styled-components";
import Item from "./Item";
import { Button } from "../components/common/button";

const Inventory = ({ inventory }) => {
  const [shouldFilter, setShouldFilter] = useState(false);
  const items = inventory;

  const handleClick = (items, direction) => {
    shouldFilter === true ? setShouldFilter(false) : setShouldFilter(true);

    if (direction === "high") {
      return items.sort((item1, item2) =>
        item1.quantity < item2.quantity ? 1 : item1.quantity > item2.quantity ? -1 : 0
      );
    } else {
      return items.sort((item1, item2) =>
        item1.quantity < item2.quantity ? -1 : item1.quantity > item2.quantity ? 1 : 0
      );
    }
  };

  return (
    <Container>
      <Title>Products inventory</Title>
      <ButtonContainer>
        <SortButton onClick={() => handleClick(items, "high")}>High to low</SortButton>
        <SortButton onClick={() => handleClick(items, "low")}>Low to High</SortButton>
      </ButtonContainer>
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

const ButtonContainer = styled.div`
  display: flex;
  margin-left: 25%;
`;

const SortButton = styled(Button)`
  margin-right: 20px;
  margin-bottom: 25px;
`;
