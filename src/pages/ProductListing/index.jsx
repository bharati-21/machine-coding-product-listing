import React, { useState } from "react";
import { Filters } from "../../components/Filters";
import { useProducts } from "../../context";
import { useFilters } from "../../context/filter-context";

const ProductListing = () => {
	const { productsLoading, products } = useProducts();
	const { sortBy, sizeFilters, brandFilters, idealForFilters } = useFilters();

	const getFilteredProductsBySize = (sizeFilters, products) => {
		if (Object.values(sizeFilters).every((size) => !size)) return products;
		let filteredProducts = [];
		for (const size in sizeFilters) {
			const sizeSelected = sizeFilters[size];
			const productssWithSize = products.filter((product) =>
				sizeSelected &&
				!filteredProducts.find(
					(filteredProduct) => filteredProduct._id === product._id
				) &&
				product.size === size
					? true
					: false
			);
			filteredProducts = [...filteredProducts, ...productssWithSize];
		}
		return filteredProducts;
	};

	const getFilteredProductsByBrand = (brandFilters, products) => {
		if (Object.values(brandFilters).every((brand) => !brand))
			return products;
		let filteredProducts = [];
		for (const brand in brandFilters) {
			const brandSelected = brandFilters[brand];
			const productssWithBrand = products.filter((product) =>
				brandSelected &&
				!filteredProducts.find(
					(filteredProduct) => filteredProduct._id === product._id
				) &&
				product.brand === brand
					? true
					: false
			);
			filteredProducts = [...filteredProducts, ...productssWithBrand];
		}
		return filteredProducts;
	};

	const getFilteredProductsByIdealFor = (idealForFilters, products) => {
		if (Object.values(idealForFilters).every((idealFor) => !idealFor))
			return products;
		let filteredProducts = [];
		for (const idealFor in idealForFilters) {
			const idealForSelected = idealForFilters[idealFor];
			const productsWithIdealFor = products.filter((product) =>
				idealForSelected &&
				!filteredProducts.find(
					(filteredProduct) => filteredProduct._id === product._id
				) &&
				product.idealFor === idealFor
					? true
					: false
			);
			filteredProducts = [...filteredProducts, ...productsWithIdealFor];
		}
		return filteredProducts;
	};

	const getSortedProducts = (sortBy, products) => {
		if (!sortBy) return products;
		return sortBy === "LOW_TO_HIGH"
			? [...products].sort(
					(productA, productB) => productA.price - productB.price
			  )
			: [...products].sort(
					(productA, productB) => productB.price - productA.price
			  );
	};

	const productsFilteredByIdealFor = getFilteredProductsByIdealFor(
		idealForFilters,
		products
	);

	const productsFilteredByBrand = getFilteredProductsByBrand(
		brandFilters,
		productsFilteredByIdealFor
	);
	const productsFilteredBySize = getFilteredProductsBySize(
		sizeFilters,
		productsFilteredByBrand
	);
	const sortedProducts = getSortedProducts(sortBy, productsFilteredBySize);

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
