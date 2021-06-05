

// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Soda",
		lactosefree: true,
		nutfree: true,
		organic: false,
		dogfood: false,
		babyfood: false,
		price: 1
	},
	{
		name: "Mango",
		lactosefree: true,
		nutfree: true,
		organic: true,
		dogfood: false,
		babyfood: false,
		price: 2
	},
	{
		name: "Cucumber",
		lactosefree: true,
		nutfree: true,
		organic: true,
		dogfood: false,
		babyfood: false,
		price: 2
	},
	{
		name: "Baby Milk",
		lactosefree: false,
		nutfree: true,
		organic: false,
		dogfood: false,
		babyfood: true,
		price: 3
	},
	{
		name: "Strawberry puree",
		lactosefree: true,
		nutfree: true,
		organic: true,
		dogfood: false,
		babyfood: true,
		price: 4
	},
	{
		name: "Organic Dog Food",
		lactosefree: false,
		nutfree: true,
		organic: true,
		dogfood: true,
		babyfood: false,
		price: 5
	},
	{
		name: "Regular Dog Food",
		lactosefree: false,
		nutfree: true,
		organic: false,
		dogfood: true,
		babyfood: false,
		price: 6
	},
	{
		name: "Peanut Butter",
		lactosefree: true,
		nutfree: false,
		organic: false,
		dogfood: false,
		babyfood: false,
		price: 6
	},
	{
		name: "Trail Mix",
		lactosefree: true,
		nutfree: false,
		organic: true,
		dogfood: false,
		babyfood: false,
		price: 9
	},
	{
		name: "Cheese",
		lactosefree: false,
		nutfree: true,
		organic: false,
		dogfood: false,
		babyfood: false,
		price: 9
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	//let product_prices = [];
	for (let i=0; i<prods.length; i++) {

		if ((restriction == "Lactose Free") && (prods[i].lactosefree == true)){
			product_names.push(prods[i].name);
			product_names.push(prods[i].price);
		}
		else if ((restriction == "Nut Free") && (prods[i].nutfree == true)){
			product_names.push(prods[i].name);
			product_names.push(prods[i].price);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
			product_names.push(prods[i].price);
		}
		else if ((restriction == "Dog Food") && (prods[i].dogfood == true)){
			product_names.push(prods[i].name);
			product_names.push(prods[i].price);
		}
		else if ((restriction == "Baby Food") && (prods[i].babyfood == true)){
			product_names.push(prods[i].name);
			product_names.push(prods[i].price);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
			product_names.push(prods[i].price);
		}
	
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	var totalPrice = 0;
	
	for (let i=0; i<chosenProducts.length; i++) {
		var thenum = chosenProducts[i].replace( /^\D+/g, '');
		totalPrice = parseInt(totalPrice) + parseInt(thenum);
	}
	return totalPrice;
}




























// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

/*
var products = [
	{
		name: "Mango",
		lactosefree: true,
		nutfree: true,
		organic: true,
		price: 0.95
	},
	{
		name: "Bread",
		lactosefree: true,
		nutfree: true,
		organic: false,
		price: 3.45
	},
	{
		name: "Peanut Butter",
		lactosefree: true,
		nutfree: false,
		organic: false,
		price: 5.00
	},
	{
		name: "Soda",
		lactosefree: true,
		nutfree: true,
		organic: false,
		price: 10.00
	},
	{
		name: "Trail Mix",
		lactosefree: true,
		nutfree: false,
		organic: true,
		price: 10.00
	},
	{
		name: "Cucumber",
		lactosefree: true,
		nutfree: true,
		organic: true,
		price: 10.00
	},
	{
		name: "Cheese",
		lactosefree: false,
		nutfree: true,
		organic: false,
		price: 10.00
	},
	{
		name: "Strawberry",
		lactosefree: true,
		nutfree: true,
		organic: true,
		price: 10.00
	},
	{
		name: "Donut",
		lactosefree: false,
		nutfree: false,
		organic: false,
		price: 10.00
	},
	{
		name: "Milk",
		lactosefree: false,
		nutfree: true,
		organic: true,
		price: 10.00
	}
];
	

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {

		/*switch (restriction) {
  			case 7:
				  if(prods[i].lactosefree == true && prods[i].nutfree == true && prods[i].organic == true){
					product_names.push(prods[i].name);
				  }
				  break;
   			case 7:
				  if(prods[i].lactosefree == true && prods[i].nutfree == true && prods[i].organic == true){
					product_names.push(prods[i].name);
				  }
				  break;
			case 7:
					if(prods[i].lactosefree == true && prods[i].nutfree == true && prods[i].organic == true){
					  product_names.push(prods[i].name);
					}
				break;
			case 7:
				  if(prods[i].lactosefree == true && prods[i].nutfree == true && prods[i].organic == true){
					product_names.push(prods[i].name);
				  }
				  break;
			 case 7:
				  if(prods[i].lactosefree == true && prods[i].nutfree == true && prods[i].organic == true){
					product_names.push(prods[i].name);
				  }
				  break;
			case 7:
				  if(prods[i].lactosefree == true && prods[i].nutfree == true && prods[i].organic == true){
					product_names.push(prods[i].name);
				  }
				  break;
			case 7:
				  if(prods[i].lactosefree == true && prods[i].nutfree == true && prods[i].organic == true){
					product_names.push(prods[i].name);
				  }
				  break;
			default: 
				if(prods[i].lactosefree == true && prods[i].nutfree == true && prods[i].organic == true){
				product_names.push(prods[i].name);
			  }
}*/



/*

		if ((restriction == "Lactose Free") && (prods[i].lactosefree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Nut Free") && (prods[i].nutfree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}

*/