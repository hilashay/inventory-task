import styled from "styled-components";
import { useInventory } from "../useInventory";

const Error = ({ errorMessage }) => {
  console.log("Error errorMessage", errorMessage);

  return <div>{errorMessage}</div>;
};

export default Error;
