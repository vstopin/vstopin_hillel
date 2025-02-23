var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн"
};

services['Розбити скло'] = "200 грн";

function price() {
  let total = 0;
  for (let service in services) {
    total += parseInt(services[service]);
  }
  return total + " грн";
}

function minPrice() {
  let prices = Object.values(services).map(price => parseInt(price));
  return Math.min(...prices) + " грн";
}

function maxPrice() {
  let prices = Object.values(services).map(price => parseInt(price));
  return Math.max(...prices) + " грн";
}

console.log(price());
console.log(minPrice()); 
console.log(maxPrice());
