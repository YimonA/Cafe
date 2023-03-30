import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "./reducer";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [coffeeList, setCoffeeList] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(`https://api.sampleapis.com/coffee/hot`);
    const data = await api.json();
    setCoffeeList(data);
    setLoading(false);
  };

  const initialState = {
    coffeeTypes: [],
    cart: [],
  };

  /*
  useEffect(() => {
    dispatch({ type: "GET_PRODUCTS", payLoad: productList });
    const filter = productList?.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
    );
    dispatch({ type: "GET_PRODUCTS", payLoad: filter });
  }, [productList, search]);
  
  */

  const [state, dispatch] = useReducer(reducer, initialState);

  const data = { search, setSearch, state, dispatch, loading,coffeeList };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useContextCustom = () => useContext(StateContext);
