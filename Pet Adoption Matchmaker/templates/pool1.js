document.addEventListener("DOMContentLoaded", function() {
    const pollForm = document.getElementById("pollForm");
    const resultDiv = document.getElementById("result");
    const summaryDiv = document.getElementById("summary");
    const summaryList = document.getElementById("summaryList");

    let pollResponses = [];

    pollForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const day = document.getElementById("day").value;
        const satisfaction = document.querySelector('input[name="satisfaction"]:checked').value;
        const feedback = document.getElementById("feedback").value;

        const response = {
            day,
            satisfaction,
            feedback
        };

        pollResponses.push(response);

        displayResult(response);
        updateSummary();
        pollForm.reset();
    });

    function displayResult(response) {
        resultDiv.innerHTML = `
            <h3>Thank you for your response!</h3>
            <p>Day: ${response.day}</p>
            <p>Satisfaction: ${response.satisfaction}</p>
            <p>Feedback: ${response.feedback}</p>
        `;
    }

    function updateSummary() {
        summaryList.innerHTML = "";
        pollResponses.forEach((response, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${index + 1}. ${response.day}: ${response.satisfaction} - ${response.feedback}`;
            summaryList.appendChild(listItem);
        });
    }
});
