const RATES ={
    usd: 1.07,
    nok: 11.01	
};
function convert({eur, currency}){
    if (!RATES[currency]){
        return null;
    }
    return eur*RATES[currency];
}