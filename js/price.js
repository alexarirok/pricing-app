//  grab everthing 
const priceInput = document.querySelector('[name=price]');
const quantityInput = document.querySelector('[name=quantity]');
const total = document.querySelector('.total');
const quantityLabel = document.querySelector('.quantity-label');

//  create function that we need
function calculatePriceCost() {
    const price = priceInput.value;
    const quantity = quantityInput.value;
    const cost = price * quantity;
    console.log(cost);
    total.innerText = '$' + cost.toFixed(2);

}

function updateQuantityLabel() {
    const quantity = quantityInput.value;
    quantityLabel.innerText = quantity;
}

// on first run 
calculatePriceCost();

//  create event listners
priceInput.addEventListener('input', calculatePriceCost);
quantityInput.addEventListener('input', calculatePriceCost);
quantityInput.addEventListener('input', updateQuantityLabel);

