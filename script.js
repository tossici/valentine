const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const mainContent = document.getElementById('main-content');
const successMessage = document.getElementById('success-message');
const questionText = document.getElementById('question');

let scaleFactor = 1;
const phrases = ":(";
let phraseIndex = 0;

noBtn.addEventListener('click', () => {
    // Ingrandisce il pulsante SI
    scaleFactor += 0.5;
    yesBtn.style.transform = `scale(${scaleFactor})`;
    
    // Cambia il testo della domanda
    questionText.innerText = phrases[phraseIndex];
    phraseIndex = (phraseIndex + 1) % phrases.length;

    // Muove il pulsante NO casualmente
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener('click', () => {
    mainContent.classList.add('hidden');
    successMessage.classList.remove('hidden');
});
