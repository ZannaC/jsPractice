const Operations = {
sum: '+',
subtraction: '-',
multiply: '*',
division: '/'
};
function calculate ({a, b, operation}) {
let result = null;

switch (operation){
case Operations.sum:
    result = sum(a, b);
    break;

case Operations.subtraction:
    result = subtraction(a, b);
    break;

case Operations.multiply:
        result = multiply(a, b);
    break;

case Operations.division:
        result = division(a, b);
    break;

default:
        break;

}

return result;
}