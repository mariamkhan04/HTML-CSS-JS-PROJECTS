// inefficient counter code -- full Dom re rendering
// let count = 0;
// const btn = document.getElementById('btn');

// btn.addEventListener("click", () => {
//     count++;
//     btn.innerText = `Count : ${count}`;
// })

// efficient code 

let count = 0;
const countSpan = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

incrementBtn.addEventListener("click",()=>{
    count++;
    countSpan.innerText = `${count}`;
})

decrementBtn.addEventListener("click",()=>{
    count--;
    countSpan.innerText = `${count}`;
})

resetBtn.addEventListener("click",()=>{
    count=0;
    countSpan.innerText = `${count}`;
})