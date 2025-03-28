const btn = document.getElementById('greet-btn');
const greeting = document.querySelector('h2');
const quotebtn = document.getElementById('quote-btn');
const quotePara = document.getElementById('quote');

// Array of multiple greeting messages
const greetings = [
    "Hello, World!",
    "Good day to you!",
    "Hey there, buddy!",
    "Stay positive, stay happy!",
    "Wishing you a great day!",
    "Keep smiling!",
    "You got this!"
];

const handleGreeting = () =>{
    // const message = prompt("Enter a new greeting msg:");
    // if(message){
    //     greeting.textContent = message;
    // }
    const randomIndex = Math.floor(Math.random() * greetings.length);
    greeting.textContent = greetings[randomIndex];
}

const fetchRandomQuotes = async () =>{
    try{
        const response = await fetch('https://corsproxy.io/?url=https://zenquotes.io/api/random');

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const quote = await response.json();
        // console.log(quote);
        quotePara.textContent =  `${quote[0].q} - ${quote[0].a}`;
    }catch(error){
        quotePara.textContent = "Failed to load Quote. Try again!";
        console.error("Error fetching quote:", error);
    }
}
btn.addEventListener('click', handleGreeting);
quotebtn.addEventListener('click', fetchRandomQuotes);