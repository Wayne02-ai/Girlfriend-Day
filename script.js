const startBtn = document.getElementById("startBtn");
const website = document.getElementById("website");
const hero = document.querySelector(".hero");
const song = document.getElementById("song");

startBtn.addEventListener("click", () => {

    hero.style.display = "none";
    website.classList.remove("hidden");

    song.play();

});

const slides = document.querySelectorAll(".slide");

let current = 0;

setInterval(() => {

    slides[current].classList.remove("active");

    current++;

    if(current >= slides.length){
        current = 0;
    }

    slides[current].classList.add("active");

},3000);
// ❤️ Floating Hearts

function createHeart(){

const heart=document.createElement("div");

heart.classList.add("heart");

const hearts=["❤️","💜","💕","💖"];

heart.innerHTML=hearts[Math.floor(Math.random()*hearts.length)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.animationDuration=(4+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,500);
// Relationship Timer

const relationshipDate = new Date("June 5, 2026 00:00:00");

function updateTimer(){

const now = new Date();

const diff = now - relationshipDate;

const days = Math.floor(diff/(1000*60*60*24));

document.getElementById("timer").innerHTML =
"❤️ Together for " + days + " beautiful days ❤️";

}

setInterval(updateTimer,1000);

updateTimer();