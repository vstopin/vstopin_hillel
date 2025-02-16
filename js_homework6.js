var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн",

  addService: function(serviceName, price) {
    this[serviceName] = price;
  },

  price: function() {
    return Object.values(this)
      .filter(value => typeof value === 'string')
      .map(price => parseInt(price.replace(/\D/g, '')))
      .reduce((total, price) => total + price, 0) + " грн";
  },

  minPrice: function() {
    let min = Infinity;
    for (let price of Object.values(this)) {
      let numericPrice = typeof price === "string" ? parseInt(price.replace(/\D/g, '')) : price;
      if (numericPrice < min) {
        min = numericPrice;
      }
    }
    return min + " грн";
  },

  maxPrice: function() {
    let max = -Infinity;
    for (let price of Object.values(this)) {
      let numericPrice = typeof price === "string" ? parseInt(price.replace(/\D/g, '')) : price;
      if (numericPrice > max) {
        max = numericPrice;
      }
    }
    return max + " грн";
  }
};

services.addService('Розбити скло', '200 грн');

console.log("Загальна вартість послуг: " + services.price()); // 440 грн
console.log("Мінімальна ціна: " + services.minPrice()); // 60 грн
console.log("Максимальна ціна: " + services.maxPrice()); // 200 грн
