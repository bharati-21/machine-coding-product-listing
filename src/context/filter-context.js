import { createContext, useContext, useReducer } from "react";
import { filterReducerFunction } from "../reducers/filterReducerFunction";

const FiltersContext = createContext();
const { Provider } = FiltersContext;

const FiltersProvider = ({ children }) => {
	const getInitialState = () => ({
		sortBy: "",
		brandFilters: {
			ONLY: false,
			"VERO MODA": false,
			ADIDAS: false,
			"LEVI'S": false,
			Aurelia: false,
		},
		sizeFilters: {
			XS: false,
			S: false,
			M: false,
			L: false,
			XL: false,
		},
		idealForFilters: {
			Men: false,
			Women: false,
			Kids: false,
		},
	});

	const [filtersState, setFiltersState] = useReducer(
		filterReducerFunction,
		getInitialState()
	);

	return (
		<Provider value={{ ...filtersState, setFiltersState }}>
			{children}
		</Provider>
	);
};

const useFilters = () => useContext(FiltersContext);

export { useFilters, FiltersProvider };
