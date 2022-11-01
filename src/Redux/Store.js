import { createStore }  from "redux"
import rootReducer from "./Reducers"

    const saveToLocalStorage = (state) => {
        try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("persistantState", serialisedState);
        } catch (e) {
        }
    }
  
    const loadFromLocalStorage = () => {
        try {
        const serialisedState = localStorage.getItem("persistantState");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
        } catch (e) {
        return undefined;
        }
    }

    const store = createStore(rootReducer, loadFromLocalStorage())
    store.subscribe(() => saveToLocalStorage(store.getState()));

    export default store;