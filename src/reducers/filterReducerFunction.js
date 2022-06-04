export const filterReducerFunction = (state, { action: { type, payload } }) => {
	switch (type) {
		case "SET_BRAND_FILTERS":
			return {
				...state,
				brandFilters: {
					...state.brandFilters,
					[payload]: !state.brandFilters[payload],
				},
			};

		case "SET_SIZE_FILTERS":
			return {
				...state,
				sizeFilters: {
					...state.sizeFilters,
					[payload]: !state.sizeFilters[payload],
				},
			};
		case "SET_IDEAL_FOR_FILTERS":
			return {
				...state,
				idealForFilters: {
					...state.idealForFilters,
					[payload]: !state.idealForFilters[payload],
				},
			};
		case "SET_SORT_BY":
			return { ...state, sortBy: payload };
		case "CLEAR_FILTERS":
			return {
				...state,
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
			};
		default:
			return state;
	}
};
