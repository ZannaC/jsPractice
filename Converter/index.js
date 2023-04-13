const valueInputNode = document.querySelector('.js-value-input');
const currencySelectorNode = document.querySelector('.js-currency-selector');
const outputNode = document.querySelector('.js-output');

function getInput(){
    return{
        eur: Number(valueInputNode.value),
        currency: currencySelectorNode.value
    }
}

function render(result){
    outputNode.innerText = result;
  
}
valueInputNode.addEventListener('input', function(){
    const result = convert(getInput());
    render(result);
});
currencySelectorNode.addEventListener('change', function(){
    const result = convert(getInput());
    render(result);
});




// const valueInputNode = document.querySelector('.js-value-input');
// const currencySelectorNode = document.querySelector('.js-currency-selector');
// const outputNode = document.querySelector('.js-output');

// valueInputNode.addEventListener('input', function(){
//     const eur = Number(valueInputNode.value);
//     const currency = currencySelectorNode.value;
//     const result = convert(eur, currency);

//     outputNode.innerText = result;
  
// })

// currencySelectorNode.addEventListener('change', function(){
//     const eur = Number(valueInputNode.value);
//     const currency = currencySelectorNode.value;
//     const result = convert(eur, currency);

//     outputNode.innerText = result;

// })