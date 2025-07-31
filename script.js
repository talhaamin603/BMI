let height=document.querySelector ("#height");
let weight=document.querySelector ("#weight");
let calculateBtn=document.querySelector("#calculateBtn");
let result=document.querySelector("#result");
let category=document.querySelector("#category");

function bmi(height, weight) {
    return (weight / ((height / 100) * (height / 100))).toFixed(2);
}

calculateBtn.addEventListener("click", function() {
     let h = parseFloat(height.value);
    let w = parseFloat(weight.value);
     // Check for valid input
    if (!h || !w) {
        result.innerHTML = "Please enter valid height and weight!";
        return;
    }
    else if (h <= 0 || w <= 0) {
        result.innerHTML = "Height and weight must be positive numbers.";
        return;}
    result.innerHTML=bmi(h, w );
     
    if (result.innerHTML < 18.5) {
        category.innerHTML = "Category: Underweight";
    }
    else if (result.innerHTML >= 18.5 && result.innerHTML < 24.9) {
        category.innerHTML = "Category: Normal weight";
    } else if (result.innerHTML >= 25 && result.innerHTML < 29.9) {
        category.innerHTML = "Category: Overweight";
    } else {
        category.innerHTML = "Category: Obesity";
    }

});

