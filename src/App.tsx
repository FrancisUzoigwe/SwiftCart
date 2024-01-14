import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router/mainRouter";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { store } from "./global/store";
const App = () => {
  const persistor = persistStore(store);
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
