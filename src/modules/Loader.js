import styled from "styled-components";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <Container>
      <Oval
        height={80}
        width={80}
        color="#000000"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#000000"
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
