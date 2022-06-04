import React, { useState } from "react";
import { Filters } from "../../components/Filters";
import { useProducts, useFilters } from "../../context";
import { getSortedFilteredData } from "../../utils/getSortedFilteredData";

const ProductListing = () => {
	const { productsLoading, products } = useProducts();
	const { sortBy, sizeFilters, brandFilters, idealForFilters } = useFilters();

	const sortedProducts = getSortedFilteredData(
		products,
		idealForFilters,
		brandFilters,
		sizeFilters,
		sortBy
	);

	const [showFilters, setShowFilters] = useState(false);

	const productsMapping = sortedProducts.map((product) => (
		<div className="card card-prodcut" key={product._id}>
			<div className="card-header">
				<img
					src={product.productImage}
					alt={`${product.product}`}
					className="product-img"
				/>
			</div>
			<div className="card-main">
				<h6 className="card-title">{product.product}</h6>
				<p className="product-price">₹ {product.price}</p>
				<div className="product-info">
					<p className="product-ideal-for">
						Ideal For: <span>{product.idealFor}</span>
					</p>
					<p className="product-size">
						Size: <span>{product.size}</span>
					</p>
					<p className="product-brand">
						Brand: <span>{product.brand}</span>
					</p>
				</div>
			</div>
		</div>
	));

	const toggleShowFilters = (event) =>
		setShowFilters((prevShowFilters) => !prevShowFilters);

	return (
		<section>
			{productsLoading ? (
				<h3 className="success-color">Loading Products...</h3>
			) : (
				<>
					<div className="products-grid">
						<div className="filters-wrapper">
							<button
								onClick={toggleShowFilters}
								className="btn-show-filters"
							>
								{showFilters ? "Hide Filters" : "Show Filters"}
							</button>
							<Filters showFilters={showFilters} />
						</div>
						{sortedProducts.length ? (
							<div className="products-wrapper">
								<h3>Products</h3>
								<div className="product-mapping">
									{productsMapping}
								</div>
							</div>
						) : (
							<h3>No products found</h3>
						)}
					</div>
				</>
			)}
		</section>
	);
};

export { ProductListing };
