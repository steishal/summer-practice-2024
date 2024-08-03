document.addEventListener('DOMContentLoaded', function() {
    const carousel = new bootstrap.Carousel(document.getElementById('testCreationCarousel'));
    const nextButtons = document.querySelectorAll('.next-carousel');
    const prevButton = document.querySelector('.prev-carousel');
    const addQuestionButton = document.getElementById('addQuestionButton');
    const questionsContainer = document.getElementById('questionsContainer');

    let questionCounter = 0;

    addQuestionButton.addEventListener('click', function() {
        questionCounter++;

        const questionTemplate = `
            <div class="mb-3">
                <label for="questionName${questionCounter}" class="form-label">Question</label>
                <input type="text" id="questionName${questionCounter}" name="questions[]" class="form-control" required>
                <div id="answersContainer${questionCounter}">
                    <!-- Answers will be dynamically added here -->
                </div>
                <button type="button" class="btn btn-primary add-answer" data-question="${questionCounter}">Add Answer</button>
            </div>
        `;
        questionsContainer.insertAdjacentHTML('beforeend', questionTemplate);
    });

    questionsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('add-answer')) {
            const questionNumber = event.target.getAttribute('data-question');
            const answersContainer = document.getElementById(`answersContainer${questionNumber}`);

            const answerTemplate = `
                <div class="mb-2">
                    <label for="answerName" class="form-label">Answer</label>
                    <input type="text" id="answerName" name="answers[${questionNumber - 1}][]" class="form-control" required>
                    <input type="checkbox" id="correct_${questionNumber}_${answersContainer.childElementCount}" name="correct[${questionNumber - 1}][${answersContainer.childElementCount}]" class="form-check-input">
                    <label for="correct_${questionNumber}_${answersContainer.childElementCount}" class="form-label">Correct</label>
                </div>
            `;
            answersContainer.insertAdjacentHTML('beforeend', answerTemplate);
        }
    });

    nextButtons.forEach(button => {
        button.addEventListener('click', function() {
            carousel.next();
        });
    });

    prevButton.addEventListener('click', function() {
        carousel.prev();
    });
});
