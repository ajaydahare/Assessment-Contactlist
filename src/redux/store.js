
import { createStore } from "redux";
import { loadFromLocalStorage } from "./persistStorage";
import reducer from "./reducer";


let persistantState = undefined;

if (typeof window !== undefined) {
  persistantState = loadFromLocalStorage();
}

const store = createStore(
  reducer,
  persistantState
);

export default store;

//the ultimate store
