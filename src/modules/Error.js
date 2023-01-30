import styled from "styled-components";

const Error = ({ errorMessage }) => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <Container>
      <MessageContainer>
        <Title>
          Error<Text>{errorMessage}</Text>
        </Title>
        <Button onClick={handleClick}>Try again</Button>
      </MessageContainer>
    </Container>
  );
};

export default Error;

const Container = styled.div`
  display: flex;
  height: 800px;
  align-items: center;
  justify-content: center;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  height: 200px;
  padding: 40px;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #5cbdb9;
`;

const Text = styled.p`
  font-size: 16px;
  color: #808080;
`;

const Button = styled.button`
  height: 40px;
  width: 130px;
  font-size: 15px;
  font-weight: bold;
  background-color: #fbe3e8;
  border-radius: 20px;
  border-width: inherit;
  border: 0px;
  cursor: pointer;
  color: #000000;
`;
