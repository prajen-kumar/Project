  
        // Game variables
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        let attemptCount = 0;
        let gameWon = false;

        // Function to check the player's guess
        function checkGuess() {
            const playerGuess = parseInt(document.getElementById('guessInput').value);
            const resultDiv = document.getElementById('result');
            const attemptsDiv = document.getElementById('attempts');
            const gameStatusDiv = document.getElementById('gameStatus');
            
            // Validate input
            if (isNaN(playerGuess) || playerGuess < 1 || playerGuess > 10) {
                resultDiv.innerHTML = "Please enter a valid number between 1 and 10!";
                alert("Enter a Valid Input!");
                resetGame();
                return;
               
            }
            
            // If game is already won, don't allow more guesses
            if (gameWon) {
                resultDiv.innerHTML = "Game is over! Click 'New Game' to play again.";
                alert("Game Over");
                resetGame();
                return;
            }
            
            // Increment attempt counter
            attemptCount++;
            
            // Check the guess using if/else logic
            if (playerGuess === randomNumber) {
                resultDiv.innerHTML = "🎉 Correct! You guessed it!";
                gameStatusDiv.innerHTML = "Congratulations! You won the game!";
                gameWon = true;
            } else if (playerGuess < randomNumber) {
                resultDiv.innerHTML = "Too low! Try a higher number.";
            } else {
                resultDiv.innerHTML = "Too high! Try a lower number.";
            }
            
            // Display number of attempts
            attemptsDiv.innerHTML = "Attempts: " + attemptCount;
            
            // Clear the input field for next guess
            document.getElementById('guessInput').value = '';
        }

        // Function to reset the game
        function resetGame() {
            randomNumber = Math.floor(Math.random() * 10) + 1;
            attemptCount = 0;
            gameWon = false;
            
            // Clear all display elements
            document.getElementById('result').innerHTML = '';
            document.getElementById('attempts').innerHTML = '';
            document.getElementById('gameStatus').innerHTML = '';
            document.getElementById('guessInput').value = '';
            
            console.log("New game started! Secret number is: " + randomNumber);
        }

        // Allow Enter key to submit guess
        document.getElementById('guessInput').addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                checkGuess();
            }
        });

        // Initialize game
        console.log("Game started! Secret number is: " + randomNumber);
    