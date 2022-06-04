import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context";
import { FiltersProvider } from "./context/filter-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ProductsProvider>
			<FiltersProvider>
				<App />
			</FiltersProvider>
		</ProductsProvider>
	</React.StrictMode>
);
