import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router/mainRouter";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { store } from "./global/store";
import { useEffect } from "react";
import axios from "axios";

const App = () => {
  const persistor = persistStore(store);
  useEffect(() => {
    axios
      .get("https://swift-cart-be.onrender.com")
      .then((res) => {
        console.log("Backend now spinning:", res?.data);
      })
      .catch((error: any) => {
        console.log("Error connecting to the backend server:", error?.message);
      });
  });
  return (
    <div>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RouterProvider router={mainRouter} />
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
