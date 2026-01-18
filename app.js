// Cargar los juegos en la página
document.addEventListener('DOMContentLoaded', function() {
    const gamesGrid = document.getElementById('games-grid');
    
    if (games.length === 0) {
        gamesGrid.innerHTML = `
            <div class="empty-state">
                <h2>No hay juegos disponibles aún</h2>
                <p>Agrega tus juegos en el archivo games.js</p>
            </div>
        `;
        return;
    }
    
    games.forEach(game => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
    });
});

function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    
    card.innerHTML = `
        <div class="game-emoji">${game.emoji || '🎲'}</div>
        <div class="game-content">
            <h2 class="game-title">${game.title}</h2>
            <p class="game-description">${game.description}</p>
            <div class="game-meta">
                ${game.players ? `<span class="game-tag">👥 ${game.players}</span>` : ''}
                ${game.duration ? `<span class="game-tag">⏱️ ${game.duration}</span>` : ''}
            </div>
            <a href="${game.link}" target="_blank" rel="noopener noreferrer" class="game-link">
                Jugar Ahora
            </a>
        </div>
    `;
    
    return card;
}
