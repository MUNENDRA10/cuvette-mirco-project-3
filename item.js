const data = require('./food.json');


function fooddata(){
    const food = data.filter((item)=> (item.foodname));
    return food;
}

fooddata(data);

// const food = data.filter((item)=> (item.foodname));
// console.log("\nlist all the food items\n",food)

// const vegetable = data.filter((item)=> (item.category==='Vegetable'));
// console.log("\nlist all the food items with category vegetablesn\n",vegetable);

// const fruit = data.filter((item)=> (item.category==='Fruit'));
// console.log("\nlist all the food items with category fruit\n",fruit);

// const protien = data.filter((item)=> (item.protiens));
// console.log("\nlist all the food items with category protien\n",protien);

// const nuts = data.filter((item)=> (item.category==='Nuts'));
// console.log("\nlist all the food items with category nuts\n",nuts);

// const grain = data.filter((item)=> (item.category==='Grain'));
// console.log("\nlist all the food items with category grains\n",grain);

// const dairy = data.filter((item)=> (item.category==='Dairy'));
// console.log("\nlist all the food items with category dairy\n",dairy);

// const above100 = data.filter((item)=> (item.calorie>100));
// console.log("\nlist all the food items with calorie above 100\n",above100);

// const below100 = data.filter((item)=> (item.calorie<100));
// console.log("\nlist all the food items with calorie below 100\n",below100);

// const protiendes = data.sort((a, b) => b.protiens - a.protiens);
// console.log("\nlist all the food items with highest protien content to lowest\n",protiendes);

// const cab = data.sort((a, b) => a.cab - b.cab);
// console.log("\nlist all the food items with lowest cab content to highest\n",cab);