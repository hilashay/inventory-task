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
