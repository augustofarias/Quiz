<script>
    function submitQuiz() {
        const correctAnswers = {
            q1: "a",
            q2: "a",
            q3: "b",
            q4: "a",
            q5: "c"
        };
        const userAnswers = {
            q1: document.querySelector('input[name="q1"]:checked').value,
            q2: document.querySelector('input[name="q2"]:checked').value,
            q3: document.querySelector('input[name="q3"]:checked').value,
            q4: document.querySelector('input[name="q4"]:checked').value,
            q5: document.querySelector('input[name="q5"]:checked').value
        };
        let score = 0;

        for (const question in correctAnswers) {
            if (correctAnswers[question] === userAnswers[question]) {
                score++;
            }
        }

        const scoreMessage = `Você acertou ${score} de 5 perguntas.`;
        document.getElementById("score").textContent = scoreMessage;
    }
</script>