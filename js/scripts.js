const wordText = document.querySelector(".word"),
    hintText = document.querySelector(".hint span"),
    refreshBtn = document.querySelector(".refresh-word"),
    checkWordBtn = document.querySelector(".check-word"),
    inputField = document.querySelector("input"),
    timeText = document.querySelector(".time b")
let result, timer

const initTimer = (maxTime) => {
    clearInterval(timer)

    timer = setInterval(() => {
        if (maxTime > 0) {
            maxTime--
            return (timeText.innerHTML = maxTime)
        }
        clearInterval(timer)
        alert(`⌛️ Time off ${result.toUpperCase()} was the correct word! 🤷🏻‍♀️`)
        initGame()
    }, 1000)
}

const initGame = () => {
    initTimer(30)
    let randomObj = words[Math.floor(Math.random() * words.length)]
    let shuffledWord = randomObj.word
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("")
    wordText.innerHTML = shuffledWord
    hintText.innerHTML = randomObj.hint
    result = randomObj.word.toLowerCase()
    inputField.value = ""
    inputField.setAttribute("maxlength", result.length)
}
initGame()
const checkWord = () => {
    const userAnswer = inputField.value.toLocaleLowerCase()
    if (!userAnswer) return alert("Please enter a value 🤪")
    if (userAnswer !== result) return alert("Oops 😞! Try again")
    alert(`Congrats 🥳 ${result.toUpperCase()} is the correct word!`)
    initGame()
}
refreshBtn.addEventListener("click", initGame)
checkWordBtn.addEventListener("click", checkWord)
