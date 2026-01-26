// Estado actual del filtro
let currentFilter = 'todos';

// Cargar los juegos en la página
document.addEventListener('DOMContentLoaded', function () {
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

    // Configurar filtros
    setupFilters();

    // Renderizar juegos
    renderGames();
});

function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Actualizar botones activos
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Actualizar filtro y renderizar
            currentFilter = this.dataset.filter;
            renderGames();
        });
    });
}

function renderGames() {
    const gamesGrid = document.getElementById('games-grid');
    gamesGrid.innerHTML = '';

    // Filtrar juegos según categoría
    const filteredGames = currentFilter === 'todos'
        ? games
        : games.filter(game => game.category === currentFilter);

    if (filteredGames.length === 0) {
        gamesGrid.innerHTML = `
            <div class="empty-state">
                <h2>No hay juegos en esta categoría</h2>
                <p>Prueba con otro filtro</p>
            </div>
        `;
        return;
    }

    filteredGames.forEach(game => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
    });
}

function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';

    // Determinar el badge de categoría
    const categoryBadge = game.category === 'privado'
        ? '<span class="category-badge private">🔒 Privado</span>'
        : '<span class="category-badge public">🌐 Público</span>';

    card.innerHTML = `
        <div class="game-emoji">${game.emoji || '🎲'}</div>
        ${categoryBadge}
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
