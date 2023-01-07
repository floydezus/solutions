import checkPrices from "./utils/checkPrices.js";
import example from "./example.js";

console.log("Test data: " + JSON.stringify(example));

const {products, productPrices, productSold, soldPrice} = example;

const countError = checkPrices(
    products,
	productPrices,
	productSold,
	soldPrice
);

console.log("Number of errors in pricing: ", countError);