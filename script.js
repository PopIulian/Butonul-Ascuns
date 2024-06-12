let winnerButton = Math.floor(Math.random() * 3) + 1;
function ShowAnswer(buttonNumber) {
    let messageElement = document.getElementById("message");
    let currentButton = document.getElementById('HiddenButton' + buttonNumber);
        if (buttonNumber === winnerButton) {
            messageElement.textContent = "Felicitări! Ai găsit butonul câștigător!";
            currentButton.classList.remove('btn-primary');
            currentButton.classList.add('btn-success');
        } else {
            messageElement.textContent = "Ne pare rău, acest buton nu este câștigător. Încearcă din nou.";
            currentButton.classList.remove('btn-primary');
            currentButton.classList.add('btn-danger');
        }
}