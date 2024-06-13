let winnerButton = Math.floor(Math.random() * 3) + 1;

function showAnswer(buttonNumber) {
    let messageElement = document.getElementById("message");
    let currentButton = document.getElementById('HiddenButton' + buttonNumber);
    if (buttonNumber === winnerButton) {
        messageElement.textContent = "Congratulations! You found the winning button!";
        currentButton.classList.remove('btn-primary');
        currentButton.classList.add('btn-success');
    } else {
        messageElement.textContent = "Sorry, this button is not a winner. Please try again.";
        currentButton.classList.remove('btn-primary');
        currentButton.classList.add('btn-danger');
    }
}

