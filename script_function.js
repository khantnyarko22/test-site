let currentPassageIndex = 0;
let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let reviewMode = false;

const passageContainer = document.getElementById('passage-container');
const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn'); // Add reference to back button
const resultContainer = document.getElementById('result');

function loadPassageAndQuestion() {
    const currentPassage = quizData[currentPassageIndex].passage;
    const currentQuestionData = quizData[currentPassageIndex].questions[currentQuestionIndex];

    passageContainer.innerHTML = currentPassage;
    questionContainer.innerHTML = `<h3>${currentQuestionData.question}</h3>`;
    optionsContainer.innerHTML = '';

    currentQuestionData.options.forEach((option, index) => {
        const optionElement = document.createElement('button');
        optionElement.textContent = option;
        optionElement.classList.add('option-btn');
        optionElement.addEventListener('click', () => {
            if (!answered) {
                checkAnswer(index);
                answered = true;
            }
        });
        optionsContainer.appendChild(optionElement);
    });

    nextButton.style.display = 'none';
    backButton.style.display = reviewMode ? 'block' : 'none'; // Show back button only in review mode
}

function checkAnswer(selectedOption) {
    const correctOption = quizData[currentPassageIndex].questions[currentQuestionIndex].answer;
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons[selectedOption].classList.add('selected');

    if (selectedOption === correctOption) {
        optionButtons[selectedOption].classList.add('correct-answer');
        score++;
    } else {
        optionButtons[selectedOption].classList.add('wrong-answer');
        optionButtons[correctOption].classList.add('correct-answer');
    }

    disableOptions(); // Disable all options after answering
    showNextButton();
}

function showNextButton() {
    nextButton.style.display = 'block';
}

function disableOptions() {
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        button.disabled = true;
    });
}

nextButton.addEventListener('click', () => {
    answered = false;
    nextButton.style.display = 'none';
    currentQuestionIndex++;
    reviewMode = false;

    // Check if there are more questions in the current passage
    if (currentQuestionIndex < quizData[currentPassageIndex].questions.length) {
        resetOptions();
        loadPassageAndQuestion();
    } else {
        // Move to the next passage if available, or show the result
        currentQuestionIndex = 0;
        currentPassageIndex++;
        if (currentPassageIndex < quizData.length) {
            resetOptions();
            loadPassageAndQuestion();
        } else {
            showResult();
        }
    }
});

backButton.addEventListener('click', () => {
    currentQuestionIndex--;
    if (currentQuestionIndex < 0) {
        currentPassageIndex--;
        currentQuestionIndex = quizData[currentPassageIndex].questions.length - 1;
    }
    reviewMode = true;
    resetOptions();
    loadPassageAndQuestion();
});

function resetOptions() {
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        button.classList.remove('selected', 'correct-answer', 'wrong-answer');
        button.disabled = false;
    });
}

function showResult() {
    questionContainer.innerHTML = '';
    optionsContainer.innerHTML = '';
    resultContainer.textContent = `You scored ${score} out of ${calculateTotalQuestions()}.`;
    resultContainer.style.display = 'block';
    passageContainer.style.display = 'none'; // Hide the passage container
    nextButton.style.display = 'none';
    backButton.style.display = 'none';
}

function calculateTotalQuestions() {
    let totalQuestions = 0;
    quizData.forEach(passage => {
        totalQuestions += passage.questions.length;
    });
    return totalQuestions;
}

loadPassageAndQuestion();