document.addEventListener("DOMContentLoaded", function() {
    const feedbackForm = document.getElementById("feedbackForm");
    const resultDiv = document.getElementById("result");
    let ratings = {
        cleanliness: 0,
        food: 0,
        staff: 0
    };

    document.querySelectorAll('.rating').forEach(ratingElement => {
        ratingElement.addEventListener('click', function(event) {
            if (event.target.classList.contains('star')) {
                const value = parseInt(event.target.getAttribute('data-value'));
                const category = ratingElement.id;

                ratings[category] = value;
                updateRatingDisplay(ratingElement, value);
            }
        });
    });

    feedbackForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const room = document.getElementById("room").value;
        const additionalFeedback = document.getElementById("additionalFeedback").value;

        const feedbackData = {
            name,
            room,
            cleanliness: ratings.cleanliness,
            food: ratings.food,
            staff: ratings.staff,
            additionalFeedback
        };

        console.log("Feedback submitted:", feedbackData);

        displayResult(feedbackData);
        feedbackForm.reset();
        resetRatings();
    });

    function updateRatingDisplay(ratingElement, value) {
        ratingElement.querySelectorAll('.star').forEach(star => {
            const starValue = parseInt(star.getAttribute('data-value'));
            if (starValue <= value) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }

    function resetRatings() {
        ratings = {
            cleanliness: 0,
            food: 0,
            staff: 0
        };
        document.querySelectorAll('.rating').forEach(ratingElement => {
            updateRatingDisplay(ratingElement, 0);
        });
    }

    function displayResult(feedbackData) {
        resultDiv.innerHTML = `
            <h3>Thank you for your feedback, ${feedbackData.name}!</h3>
            <p>Room Number: ${feedbackData.room}</p>
            <p>Room Cleanliness: ${feedbackData.cleanliness} Stars</p>
            <p>Food Quality: ${feedbackData.food} Stars</p>
            <p>Staff Behavior: ${feedbackData.staff} Stars</p>
            <p>Additional Feedback: ${feedbackData.additionalFeedback}</p>
        `;
    }
});