const data = require('./food.json');

function allfooditem(type) {
    if(type === 'allfood'){
    const food = data.filter((item) => item.foodname);
    console.log('List all the food items:\n', food);
}
else if(type === 'protiens'){
    const food = data.filter((item) => item.protiens);
    console.log('list all the food items with category protien:\n', food);
    }
}

function categories(category) {
  const food = data.filter((item) => (item.category === category));
  console.log(`List all the food items with category ${category}:\n`, food);
}

function calorieabove100() {
  const food = data.filter((item) => item.calorie > 100);
  console.log('List all the food items with calories above 100:\n', food);
}

function caloriebelow100() {
  const food = data.filter((item) => item.calorie < 100);
  console.log(`List all the food items with calories below 100:\n`, food);
}

function protienhightolow() {
  const hightolow = data.slice().sort((a, b) => b.protiens - a.protiens);
  console.log('List all the food items with the highest protein content to lowest:\n', hightolow);
}

function cablowtohigh() {
  const lowtohigh = data.slice().sort((a, b) => a.cab - b.cab);
  console.log('List all the food items with the lowest carb content to highest:\n', lowtohigh);
}

// for print the data according to you by using this

allfooditem('allfood');
categories('Vegetable');
categories('Fruit');
allfooditem('protiens');
categories('Nuts');
categories('Grain');
categories('Dairy');
calorieabove100();
caloriebelow100();
protienhightolow();
cablowtohigh();