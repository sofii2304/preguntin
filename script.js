// Pantalla de Inicio
document.getElementById('start-btn').addEventListener('click', function() {
    playerName = document.getElementById('player-name').value;
    if (playerName) {
        startScreen.classList.add('hidden');
        categoryScreen.classList.remove('hidden');
    } else {
        alert('Por favor ingresa tu nombre');
    }
});
