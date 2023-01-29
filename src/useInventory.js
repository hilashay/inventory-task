import { useState, useEffect } from "react";
export const useInventory = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    //async function to get data
    const getData = async () => {
      try {
        const response = await fetch(" http://34.238.153.187:8085/inventory"); //fatching data
        let data = await response.json(); //make it a json format
        setInventory(data); //update the inventory state
      } catch (error) {
        console.log("Error:", error);
        // setIsError(true);
      }
    };
    getData();
  }, []);

  return inventory;
};
