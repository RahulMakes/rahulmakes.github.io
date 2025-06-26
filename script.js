
document.querySelectorAll(".link")[0].addEventListener("click",()=>{
    window.location.href="TossCoin"
})

document.querySelectorAll(".link")[1].addEventListener("click",()=>{
    window.location.href="AnswerIndia"
})
document.querySelectorAll(".link")[2].addEventListener("click",()=>{
    window.location.href="random"
})
let i = 0;
setInterval(() => {
    document.body.style.background = `linear-gradient(${i}deg,rgb(255, 81, 0) 1%,rgb(125, 240, 163) 100%)`;
    i += 1;
}, 30);
