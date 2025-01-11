const questions = [
    'Você sabia que você é a mulher mais gostosa do mundo, certo?',
    'Você sabia que todos os dias eu me sinto honrada por ser sua namorada?',
    'Você sabia que eu realmente te acho uma gostosa falando sobre pp?',
    'Você sabia que o meu futuro é todo planejado com você? Sem você eu não existo.',
    'Você sabia que você é um sonho que se realizou?',
    'Você sabia que desde aquela noite de junho, do dia 3 às 21:00h, você mudou completamente a minha vida para melhor? Me lembro da sensação de frio na barriga, a felicidade, você é tão linda.',
    'E por último, você sabia que quando eu te observo eu me sinto tão orgulhosa de você, minha princesa?'
];

let currentQuestion = 0;
let correctAnswers = 0;

function startGame() {
    const name = prompt('Coloca seu nome aqui e da OK, mo nenem');
    if (name.trim().toUpperCase() === 'CAMILY') {
        document.getElementById('welcome').style.display = 'none';
        document.getElementById('questions').style.display = 'block';
        showQuestion();
    } else {
        alert('Esse site é feito para o meu mo, vaza se não for ela.');
    }
}

function showQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById('question-text').textContent = questions[currentQuestion];
    } else {
        endGame();
    }
}

function answerQuestion(answer) {
    if (answer) {
        correctAnswers++;
        currentQuestion++;
        showQuestion();
    } else {
        alert('Se você está falando que "não", para de ser tonta e coloca que sim, é tudo verdade!');
        currentQuestion = 0;
        correctAnswers = 0;
        showQuestion();
    }
}

function endGame() {
    if (correctAnswers === questions.length) {
        window.location.href = 'final.html';
    } else {
        alert('Para desbloquear a mensagem especial, responda todas as perguntas com "Sim".');
        window.location.reload();
    }
}
