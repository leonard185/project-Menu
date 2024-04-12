
document.addEventListener("DOMContentLoaded", function() {
    var items = document.querySelectorAll('.item');

    items.forEach(function(item) {
        item.addEventListener('click', function() {
            var image = this.querySelector('img');
            var p = this.querySelector('p');

            if (image.style.display === 'none') {
                image.style.display = 'block';
                p.style.display = 'none';
            } else {
                image.style.display = 'none';
                p.style.display = 'block';
            }
        });
    });
});

function calculatePrice() {
    var mealPrice = 1000;
    var mealName = document.getElementById("selectedMeal").innerText;
    var age = parseInt(document.getElementById("age").value);

    // Logic to determine meal price based on selected meal
    if (mealName.includes("Turkey")) {
        mealPrice = 1500; // Price for Roast Turkey
    } else if (mealName.includes("Salmon")) {
        mealPrice = 500; // Price for Grilled Salmon
    } else if (mealName.includes("Roast")) {
        mealPrice = 1500;
    } else if (mealName.includes("Potatoes")) {
        mealPrice = 500;
    } else if (mealName.includes("chickenTenders")) {
        mealPrice = 700;
    } else if (mealName.includes("macAndCheese")) {
        mealPrice = 800;
    }
    // Add more meal prices if needed

    // Applying discounts based on age
    if (age < 14) {
        mealPrice *= 0.8; // 20% discount for age under 14
    } else if (age >= 60) {
        mealPrice *= 0.85; // 15% discount for age over 60
    }

    // Display total price
    document.getElementById("totalPrice").innerText = "Total Price: " + mealPrice.toFixed(2) + "ksh";
    
    // Log the value of mealName
    console.log("Meal Name:", mealName);
}

function selectMeal(mealName) {
    document.getElementById("selectedMeal").innerText = "Selected Meal: " + mealName;
}