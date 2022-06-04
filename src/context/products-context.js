import { createContext, useContext, useEffect, useState } from "react";
import { data } from "../data";

const ProductsContext = createContext();
const { Provider } = ProductsContext;

const ProductsProvider = ({ children }) => {
	const getInitialState = () => ({
		productsLoading: true,
		productsError: null,
		products: [],
	});

	const [productsState, setProductsState] = useState(getInitialState);

	useEffect(() => {
		let timeoutId = setTimeout(() => {
			setProductsState((prevProductsState) => ({
				...prevProductsState,
				productsLoading: false,
				products: data.data,
				productsError: null,
			}));
		}, 800);

		return () => clearTimeout(timeoutId);
	}, []);

	return <Provider value={{ ...productsState }}>{children}</Provider>;
};

const useProducts = () => useContext(ProductsContext);

export { useProducts, ProductsProvider };
