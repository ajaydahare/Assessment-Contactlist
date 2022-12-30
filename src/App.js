import React, { useEffect } from "react";
import { routes } from "./routes";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import { saveToLocalStorage } from "./redux/persistStorage";
import Header from "./components/Header";

function App() {
  useEffect(() => {
    if (typeof window !== undefined) {
      store.subscribe(() => {
        console.log("subscribe", store.getState());
        saveToLocalStorage(store.getState());
      });
    }
  }, []);

  return (
    <Provider store={store}>
      <Header />
      <div className="px-6 py-5 sm:px-20 sm:py-10 ">
        <Routes>
          {routes.map((item, i) => {
            return <Route path={item.path} key={i} element={item.component} />;
          })}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
