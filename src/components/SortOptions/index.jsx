import React from "react";
import { useFilters } from "../../context";

const SortOptions = () => {
	const { sortBy, setFiltersState } = useFilters();
	const changeSortOptions = (event) => {
		setFiltersState({
			action: { type: "SET_SORT_BY", payload: event.target.value },
		});
	};

	return (
		<div className="price-sorting-container">
			<h6>Sort By Price</h6>
			<div className="sorting-options">
				<label>
					<input
						type="radio"
						name="sort-price"
						id="sort-price"
						value="LOW_TO_HIGH"
						checked={sortBy === "LOW_TO_HIGH"}
						onChange={changeSortOptions}
					/>
					Low to High
				</label>
				<label>
					<input
						type="radio"
						name="sort-price"
						id="sort-price"
						value="HIGH_TO_LOW"
						checked={sortBy === "HIGH_TO_LOW"}
						onChange={changeSortOptions}
					/>
					High to Low
				</label>
			</div>
		</div>
	);
};

export { SortOptions };
