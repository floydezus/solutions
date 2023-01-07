/** This is a description of the checkPrices function. 
* @constructor
 * @param {string[]} products - Names of an items for sale.
 * @param {number[]} productPrices - Price of products.
 * @param {string[]} productSold - Names of a products sold.
 * @param {number[]} soldPrice - Contains the sale price recorded for productSold.
 * @returns {number}The number of sale prices that were entered incorrectly.
*/
  
function checkPrices(products, productPrices, productSold, soldPrice) {
    const productsWithPrices = products.reduce((acc, current, i) => 
      Object.assign(acc, {[current]: productPrices[i]}), 
    {})
    let countError = 0;
    for (let i = 0; i < productSold.length; i++) {
      if (productsWithPrices[productSold[i]] !== soldPrice[i]) {
        countError++;
      }
    }
    return countError;
}

export default checkPrices;