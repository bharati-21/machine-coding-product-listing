import React from "react";
import { useFilters } from "../../context/filter-context";

const Filters = () => {
	const {
		sortBy,
		brandFilters,
		sizeFilters,
		idealForFilters,
		setFiltersState,
	} = useFilters();

	const changeSortOptions = (event) => {
		setFiltersState({
			action: { type: "SET_SORT_BY", payload: event.target.value },
		});
	};

	const changeSizeFilterOptions = (event) => {
		setFiltersState({
			action: {
				type: "SET_SIZE_FILTERS",
				payload: event.target.value,
			},
		});
	};

	const changeBrandFilters = (event) => {
		setFiltersState({
			action: {
				type: "SET_BRAND_FILTERS",
				payload: event.target.value,
			},
		});
	};

	const changeIdealForFilters = (event) => {
		setFiltersState({
			action: {
				type: "SET_IDEAL_FOR_FILTERS",
				payload: event.target.value,
			},
		});
	};

	const handleClearFilters = (event) =>
		setFiltersState({ action: { type: "CLEAR_FILTERS" } });

	return (
		<div>
			<div className="price-sorting-container">
				<h6>Sort By Price</h6>
				<div className="sorting-options">
					<label>
						Low to High
						<input
							type="radio"
							name="sort-price"
							id="sort-price"
							value="LOW_TO_HIGH"
							checked={sortBy === "LOW_TO_HIGH"}
							onChange={changeSortOptions}
						/>
					</label>
					<label>
						High to Low
						<input
							type="radio"
							name="sort-price"
							id="sort-price"
							value="HIGH_TO_LOW"
							checked={sortBy === "HIGH_TO_LOW"}
							onChange={changeSortOptions}
						/>
					</label>
				</div>
			</div>
			<div className="size-filter-container">
				<h6>Filter By Size</h6>
				<div className="filter-options">
					<label>
						XS
						<input
							type="checkbox"
							name="filter-size"
							id="filter-size"
							value="XS"
							checked={sizeFilters["XS"]}
							onChange={changeSizeFilterOptions}
						/>
					</label>
					<label>
						S
						<input
							type="checkbox"
							name="filter-size"
							id="filter-size"
							value="S"
							checked={sizeFilters["S"]}
							onChange={changeSizeFilterOptions}
						/>
					</label>
					<label>
						M
						<input
							type="checkbox"
							name="filter-size"
							id="filter-size"
							value="M"
							checked={sizeFilters["M"]}
							onChange={changeSizeFilterOptions}
						/>
					</label>
					<label>
						L
						<input
							type="checkbox"
							name="filter-size"
							id="filter-size"
							value="L"
							checked={sizeFilters["L"]}
							onChange={changeSizeFilterOptions}
						/>
					</label>
					<label>
						XL
						<input
							type="checkbox"
							name="filter-size"
							id="filter-size"
							value="XL"
							checked={sizeFilters["XL"]}
							onChange={changeSizeFilterOptions}
						/>
					</label>
				</div>
			</div>
			<div className="brand-filter-container">
				<h6>Filter By Brand</h6>
				<div className="filter-options">
					<label>
						LEVI'S
						<input
							type="checkbox"
							name="filter-brand"
							id="filter-brand"
							value="LEVI'S"
							checked={brandFilters["LEVI'S"]}
							onChange={changeBrandFilters}
						/>
					</label>
					<label>
						ONLY
						<input
							type="checkbox"
							name="filter-brand"
							id="filter-brand"
							value="ONLY"
							checked={brandFilters["ONLY"]}
							onChange={changeBrandFilters}
						/>
					</label>
					<label>
						VERO MODA
						<input
							type="checkbox"
							name="filter-brand"
							id="filter-brand"
							value="VERO MODA"
							checked={brandFilters["VERO MODA"]}
							onChange={changeBrandFilters}
						/>
					</label>
					<label>
						ADIDAS
						<input
							type="checkbox"
							name="filter-brand"
							id="filter-brand"
							value="ADIDAS"
							checked={brandFilters["ADIDAS"]}
							onChange={changeBrandFilters}
						/>
					</label>
					<label>
						Aurelia
						<input
							type="checkbox"
							name="filter-brand"
							id="filter-brand"
							value="Aurelia"
							checked={brandFilters["Aurelia"]}
							onChange={changeBrandFilters}
						/>
					</label>
				</div>
			</div>
			<div className="ideal-for-filter-container">
				<h6>Filter By Ideal For</h6>
				<div className="filter-options">
					<label>
						Men
						<input
							type="checkbox"
							name="filter-ideal-for"
							id="filter-ideal-for"
							value="Men"
							checked={idealForFilters["Men"]}
							onChange={changeIdealForFilters}
						/>
					</label>
					<label>
						Women
						<input
							type="checkbox"
							name="filter-ideal-for"
							id="filter-ideal-for"
							value="Women"
							checked={idealForFilters["Women"]}
							onChange={changeIdealForFilters}
						/>
					</label>
					<label>
						Kids
						<input
							type="checkbox"
							name="filter-ideal-for"
							id="filter-ideal-for"
							value="Kids"
							checked={idealForFilters["Kids"]}
							onChange={changeIdealForFilters}
						/>
					</label>
				</div>
			</div>
			<button onClick={handleClearFilters}>Clear Filters</button>
		</div>
	);
};

export { Filters };
