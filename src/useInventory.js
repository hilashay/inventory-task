import { useState, useEffect } from "react";
export const useInventory = () => {
  const [isLoad, setIsLoad] = useState(true);
  const [inventory, setInventory] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://34.238.153.187:8085/inventory");
        let data = await response.json();

        if (data.length === 0) {
          setErrorMessage("Data not available right now, Please try again later");
          setIsLoad(false);
          setIsError(true);
          return;
        }

        setInventory(data);
        setIsLoad(false);
      } catch (error) {
        setErrorMessage(
          "Poor internet connection detected, Please chack your internet and try again."
        );
        setIsError(true);
        setIsLoad(false);
      }
    };
    getData();
  }, []);

  return { isLoad, inventory, isError, errorMessage };
};
