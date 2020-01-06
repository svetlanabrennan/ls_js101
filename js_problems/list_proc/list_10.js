/*

PROBLEM
  functions takes two arguments: inventory & list of transactions
  return true only if sum of quantity values of the item's transactions is greater than 0


*/

function transactionsFor(inventoryItem, transactions) {
  let result = transactions.filter(element => {
    return element.id === inventoryItem;
  });
  return result;
}

function isItemAvailable(item, transactions) { using forEach
  let filtered = transactionsFor(item, transactions)
  
  let inTotal = 0;
  let outTotal = 0;
  
  filtered.forEach(element => {
    if (element.movement === "in") {
      inTotal += element.quantity;
    } else {
      outTotal += element.quantity;
    }
  });
  return inTotal > outTotal;
}

function isItemAvailable(item, transactions) { //  using reduce
  let filtered = transactionsFor(item, transactions)
  filtered = filtered.reduce(
    (acc, value) => {
      if (value.movement === "in") {
        return acc + value.quantity;
      } else {
        return acc - value.quantity;
      }
    }, 0);
  return filtered > 0;
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true