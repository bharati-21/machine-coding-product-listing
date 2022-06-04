const getFilteredProductsBySize = (sizeFilters, products) => {
	if (Object.values(sizeFilters).every((size) => !size)) return products;
	const filteredProducts = [];
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
		filteredProducts.push(...productssWithSize);
	}
	return filteredProducts;
};

const getFilteredProductsByBrand = (brandFilters, products) => {
	if (Object.values(brandFilters).every((brand) => !brand)) return products;
	const filteredProducts = [];
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
		filteredProducts.push(...productssWithBrand);
	}
	return filteredProducts;
};

const getFilteredProductsByIdealFor = (idealForFilters, products) => {
	if (Object.values(idealForFilters).every((idealFor) => !idealFor))
		return products;
	const filteredProducts = [];
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
		filteredProducts.push(...productsWithIdealFor);
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

const getSortedFilteredData = (
	products,
	idealForFilters,
	brandFilters,
	sizeFilters,
	sortBy
) => {
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
	return sortedProducts;
};

export { getSortedFilteredData };
