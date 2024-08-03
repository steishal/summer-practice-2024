document.addEventListener('DOMContentLoaded', function() {
    const addQuestionButton = document.getElementById('addQuestionButton');
    const questionsContainer = document.getElementById('questionsContainer');
    const questionFormsLength = document.getElementById('questionFormsLength').value;
    let questionCounter = parseInt(questionFormsLength); // Parse the value to integer

    addQuestionButton.addEventListener('click', function() {
        questionCounter++;
        const questionTemplate = `
        <div class="mb-3">
            <label for="id_questions-${questionCounter}-name" class="form-label">Question</label>
            <input type="text" id="id_questions-${questionCounter}-name" name="questions-${questionCounter}-name" class="form-control" required>
            <div id="answersContainer${questionCounter}">
                <!-- Answers will be dynamically added here -->
            </div>
            <button type="button" class="btn btn-primary add-answer" data-question="${questionCounter}">Add Answer</button>
        </div>`;

        questionsContainer.insertAdjacentHTML('beforeend', questionTemplate);
    });

    questionsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('add-answer')) {
            const questionNumber = event.target.getAttribute('data-question');
            const answersContainer = document.getElementById(`answersContainer${questionNumber}`);
            const answerTemplate = `
            <div class="mb-2">
                <label for="id_answers-${questionNumber}-name" class="form-label">Answer</label>
                <input type="text" id="id_answers-${questionNumber}-name" name="answers-${questionNumber}-name" class="form-control" required>
                <input type="checkbox" id="id_answers-${questionNumber}-correct" name="answers-${questionNumber}-correct" class="form-check-input">
                <label for="id_answers-${questionNumber}-correct" class="form-label">Correct</label>
            </div>`;

            answersContainer.insertAdjacentHTML('beforeend', answerTemplate);
        }
    });
});

