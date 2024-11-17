const diceBtn = document.getElementById("dice-div")
const adviceText = document.getElementById("advice-text")
const quoteText = document.getElementById("quote-text")

function getQuote(){
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
                  adviceText.textContent = `ADVICE #${data.slip.id}`,
                  quoteText.textContent = `"${data.slip.advice}"`}
    )}

diceBtn.addEventListener("click", getQuote)

getQuote()