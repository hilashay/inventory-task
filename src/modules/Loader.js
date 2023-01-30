import styled from "styled-components";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <Container>
      <Oval
        height={80}
        width={80}
        color="#5cbdb9"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#ebf6f5"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </Container>
  );
};

export default Loader;

const Container = styled.div`
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
