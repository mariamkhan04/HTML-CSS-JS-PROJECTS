const btn = document.getElementById('greet-btn');
const greeting = document.querySelector('h2');
const quotebtn = document.getElementById('quote-btn');
const quotePara = document.getElementById('quote');

const handleGreeting = () =>{
    const message = prompt("Enter a new greeting msg:");
    if(message){
        greeting.textContent = message;
    }
}

const fetchRandomQuotes = async () =>{
    try{
        const response = await fetch('http://api.quotable.io/random');
        const quote = await response.json();
        quotePara.textContent = quote.content;
    }catch(error){
        quotePara.textContent = "Failed to load Quote. Try again!";
        console.error("Error fetching quote:", error);
    }
}
btn.addEventListener('click', handleGreeting);
quotebtn.addEventListener('click', fetchRandomQuotes);