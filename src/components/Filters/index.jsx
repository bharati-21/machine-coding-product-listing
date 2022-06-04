import React from "react";
import { useFilters } from "../../context/filter-context";
import { SortOptions } from "../SortOptions";

const Filters = ({ showFilters }) => {
	const { brandFilters, sizeFilters, idealForFilters, setFiltersState } =
		useFilters();

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
		<div class={`filters-container ${showFilters ? "show" : "hide"}`}>
			<SortOptions />
			<div className="size-filter-container">
				<h6>Filter By Size</h6>
				<div className="filter-options">
					<label>
						<input
							type="checkbox"
							name="filter-size"
							id="filter-size"
							value="XS"
							checked={sizeFilters["XS"]}
							onChange={changeSizeFilterOptions}
						/>
						XS
					</label>
					<label>
						<input
							type="checkbox"
							name="filter-size"
							id="filter-size"
							value="S"
							checked={sizeFilters["S"]}
							onChange={changeSizeFilterOptions}
						/>
						S
					</label>
					<label>
						<input
							type="checkbox"
							name="filter-size"
							id="filter-size"
							value="M"
							checked={sizeFilters["M"]}
							onChange={changeSizeFilterOptions}
						/>
						M
					</label>
					<label>
						<input
							type="checkbox"
							name="filter-size"
							id="filter-size"
							value="L"
							checked={sizeFilters["L"]}
							onChange={changeSizeFilterOptions}
						/>
						L
					</label>
					<label>
						<input
							type="checkbox"
							name="filter-size"
							id="filter-size"
							value="XL"
							checked={sizeFilters["XL"]}
							onChange={changeSizeFilterOptions}
						/>
						XL
					</label>
				</div>
			</div>
			<div className="brand-filter-container">
				<h6>Filter By Brand</h6>
				<div className="filter-options">
					<label>
						<input
							type="checkbox"
							name="filter-brand"
							id="filter-brand"
							value="LEVI'S"
							checked={brandFilters["LEVI'S"]}
							onChange={changeBrandFilters}
						/>
						LEVI'S
					</label>
					<label>
						<input
							type="checkbox"
							name="filter-brand"
							id="filter-brand"
							value="ONLY"
							checked={brandFilters["ONLY"]}
							onChange={changeBrandFilters}
						/>
						ONLY
					</label>
					<label>
						<input
							type="checkbox"
							name="filter-brand"
							id="filter-brand"
							value="VERO MODA"
							checked={brandFilters["VERO MODA"]}
							onChange={changeBrandFilters}
						/>
						VERO MODA
					</label>
					<label>
						<input
							type="checkbox"
							name="filter-brand"
							id="filter-brand"
							value="ADIDAS"
							checked={brandFilters["ADIDAS"]}
							onChange={changeBrandFilters}
						/>
						ADIDAS
					</label>
					<label>
						<input
							type="checkbox"
							name="filter-brand"
							id="filter-brand"
							value="Aurelia"
							checked={brandFilters["Aurelia"]}
							onChange={changeBrandFilters}
						/>
						Aurelia
					</label>
				</div>
			</div>
			<div className="ideal-for-filter-container">
				<h6>Filter By Ideal For</h6>
				<div className="filter-options">
					<label>
						<input
							type="checkbox"
							name="filter-ideal-for"
							id="filter-ideal-for"
							value="Men"
							checked={idealForFilters["Men"]}
							onChange={changeIdealForFilters}
						/>
						Men
					</label>
					<label>
						<input
							type="checkbox"
							name="filter-ideal-for"
							id="filter-ideal-for"
							value="Women"
							checked={idealForFilters["Women"]}
							onChange={changeIdealForFilters}
						/>
						Women
					</label>
					<label>
						<input
							type="checkbox"
							name="filter-ideal-for"
							id="filter-ideal-for"
							value="Kids"
							checked={idealForFilters["Kids"]}
							onChange={changeIdealForFilters}
						/>
						Kids
					</label>
				</div>
			</div>
			<button onClick={handleClearFilters}>Clear Filters</button>
		</div>
	);
};

export { Filters };
