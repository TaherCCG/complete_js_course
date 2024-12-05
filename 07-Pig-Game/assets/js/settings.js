function startGame() {
  // Get player names from the input fields
  const player1Name = document.getElementById('name1').value || 'Player 1';
  const player2Name = document.getElementById('name2').value || 'Player 2';

  // Store names in localStorage for the game to use
  localStorage.setItem('player1Name', player1Name);
  localStorage.setItem('player2Name', player2Name);

  // Redirect to game.html
  window.location.href = 'game.html';
}
