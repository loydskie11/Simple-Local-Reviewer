 
class Food {
    
    cookFood(choice) {
        
        switch (choice) {
            case 1:
                window.alert("You have selected Spaghetti. Enjoy your meal!");
                return{
                    name: "Spaghetti",
                    ingredients: ["pasta", "tomato sauce", "meatballs"],
                    price: 12.99
                }
                break;
            case 2:
                window.alert("You have selected Fried Chicken. Enjoy your meal!");
                return{
                    name: "Fried Chicken",
                    ingredients: ["chicken", "flour", "oil"],
                    price: 10.99
                } 
                break;
            case 3:
                window.alert("You have selected Burrito. Enjoy your meal!");
                return{
                    name: "Burrito",
                    ingredients: ["tortilla", "rice", "beans", "meat"],
                    price: 9.99
                }
                break;
            default:
                window.alert("Invalid choice. Please select a valid option.");
        }
        
    }
}

function foodFactory() {
    let choice = parseInt(window.prompt("Welcome to the Food Factory! Please select an option from the menu.\n1. Spaghetti\n2. Fried Chicken\n3. Burrito"));   
    const food = new Food();
    food.cookFood(choice);
}


function drinkFactory() {
    window.alert("Welcome to the Drink Factory! Please select an option from the menu.");
}

function dessertFactory() {
    window.alert("Welcome to the Dessert Factory! Please select an option from the menu.");
}

