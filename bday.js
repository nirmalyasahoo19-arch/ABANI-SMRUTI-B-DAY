// Stars Animation

const starsContainer = document.querySelector('.stars');

for(let i=0;i<150;i++){

    const star = document.createElement('div');

    star.classList.add('star');

    star.style.left = Math.random()*100 + '%';
    star.style.top = Math.random()*100 + '%';

    star.style.animationDuration =
    (Math.random()*3+1) + 's';

    starsContainer.appendChild(star);
}


// Confetti Animation

for(let i=0;i<120;i++){

    const confetti = document.createElement('div');

    confetti.classList.add('confetti');

    confetti.style.left =
    Math.random()*100 + 'vw';

    confetti.style.backgroundColor =
    `hsl(${Math.random()*360},100%,50%)`;

    confetti.style.animationDuration =
    (Math.random()*3+2) + 's';

    confetti.style.opacity = Math.random();

    document.body.appendChild(confetti);
}


// Birthday Music Button

function playWish(){

    document.getElementById("song").play();

    alert("🎂 Happiest Birthday Smruti 💖✨");
}
