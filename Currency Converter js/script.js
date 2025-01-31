const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";

const dropdowns =  document.querySelectorAll(".dropdown select");
const btn =document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
let amountInput = document.querySelector(".amount input");
const exchangeRateMsg = document.querySelector(".msg");

// console.log(dropdowns);

for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOpt = document.createElement("option");
        newOpt.innerText = currCode;
        newOpt.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newOpt.selected = "selected";
        } else if(select.name === "to" && currCode === "PKR"){
            newOpt.selected = "selected";
        }
        select.appendChild(newOpt);
    }

    select.addEventListener("change",(evt) => {
        updateFlag(evt.target); // target - jo change kara woh change kahan pr aaya 
    })
}

const updateFlag = (element) => {
    let currCode = element.value; //extract currCode from element
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
} 

const getExchangeRate = async () => {
    let fromValue = fromCurr.value.toLowerCase();
    let toValue = toCurr.value.toLowerCase();
    let amount = parseFloat(amountInput.value);
    amount = (isNaN(amount) || amount <= 0) ? 1 : amount;
    amountInput.value = amount; // Ensure valid amount

    try {
        const response = await fetch(`${BASE_URL}${fromValue}.json`); //api ko req send ki
        const data = await response.json();
        const exchangeRate = data[fromValue][toValue];
        if (exchangeRate) {
            let convertedAmount = (amount * exchangeRate).toFixed(2);
            exchangeRateMsg.innerText = `${amount} ${fromValue.toUpperCase()} = ${convertedAmount} ${toValue.toUpperCase()}`;
        } else {
            exchangeRateMsg.innerText = "Exchange rate not available.";
        }
    } catch (error) {
        exchangeRateMsg.innerText = "Error fetching exchange rate.";
    }
};
//Event Listener for conversion button
btn.addEventListener("click",async (evt) => {
    evt.preventDefault();
    await getExchangeRate();
});

// Fetch exchange rate on page load
window.addEventListener("load", getExchangeRate);