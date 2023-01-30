import { useState, useEffect, useCallback } from "react";
export const useInventory = () => {
  const [isLoad, setIsLoad] = useState(true);
  const [inventory, setInventory] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    //async function to get data
    const getData = async () => {
      //   setTimeout(async () => {
      try {
        const response = await fetch(" http://34.238.153.187:8085/inventory"); //fatching data
        // let data = await response.json(); //make it a json format
        let data = [
          { name: "hila", quantity: 22 },
          { name: "", quantity: 30 },
        ];
        console.log("data,", data);
        if (data.length === 0) {
          setIsError(true);
          setErrorMessage("Data not available right now, Please try again later");
        }
        data.map((err) => {
          if (err["name"] === "") {
            setIsError(true);
            setErrorMessage(
              "We handling some isuues, part of the details are missing. Please try again later."
            );
          }

          setInventory(data); //update the inventory state
          setIsLoad(false);
        });
      } catch (error) {
        setErrorMessage(
          "Poor internet connection detected, Please chack your internet and try again."
        );
        console.log("errorMessage:", error);
        setIsError(true);
        setIsLoad(false);
      }
      //   }, 5000);
    };
    getData();
  }, []);

  return { isLoad, inventory, isError, errorMessage };
};
