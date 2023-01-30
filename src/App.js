import Inventory from "./modules/Inventory";
import Loader from "./modules/Loader";
import Error from "./modules/Error";
import { useInventory } from "./useInventory";

function App() {
  const { inventory, isLoad, isError, errorMessage } = useInventory();

  if (isLoad) {
    return <Loader />;
  }

  if (isError) {
    return <Error errorMessage={errorMessage} />;
  }

  return <Inventory inventory={inventory} />;
}

export default App;

// [{"name":"222","quantity":132},{"name":"2023","quantity":22},{"name":"moshe","quantity":32432434},{"name":"beef burger","quantity":56},{"name":"eggs","quantity":123123123},{"name":"nati bodek","quantity":132},{"name":"milk","quantity":555},{"name":"doodle","quantity":132},{"name":"shampoo","quantity":322},{"name":"Checki","quantity":456213}]
