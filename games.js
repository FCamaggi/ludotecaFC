// Aquí defines tus juegos
// Puedes agregar o editar juegos fácilmente en este array

const games = [
    {
        title: "Mente Vacuna",
        description: "Piensa como el rebaño. Responde preguntas en secreto y gana puntos si tu respuesta coincide con la mayoría. El primero en conseguir 8 puntos sin tener la vaca rosa gana. ¡Piensa colectivo, no individual!",
        emoji: "🐮",
        link: "https://mentevacuna.netlify.app/",
        players: "3-10 jugadores",
        duration: "15-30 min",
        category: "publico"
    },
    {
        title: "Agent Avenue",
        description: "Dos espías se enfrentan en un vecindario pacífico. Recluta a los vecinos como agentes y descubre la identidad de tu rival antes que él descubra la tuya. Cada barbacoa es una oportunidad para reunir pistas secretas.",
        emoji: "🕵️",
        link: "https://agentavenue.netlify.app/",
        players: "2 jugadores",
        duration: "20-40 min",
        category: "publico"
    },
    {
        title: "Foxy",
        description: "Lleva la cuenta mental de cuántos animales han aparecido. En cada turno, suma el total acumulado de los animales mostrados en la carta actual. Apuesta x2 si estás muy seguro. Gana puntos acertando sin pasarte del número real.",
        emoji: "🦊",
        link: "https://foxydigital.netlify.app/",
        players: "2-5 jugadores",
        duration: "15-25 min",
        category: "publico"
    },
    {
        title: "Fun Facts",
        description: "Responde preguntas personales con números. Luego, entre todos, intenten ordenar las respuestas de menor a mayor sin revelarlas. ¿Qué tan bien se conocen? Cooperen para ganar puntos en 8 rondas y superen su récord.",
        emoji: "🎉",
        link: "https://funfactsdig.netlify.app/",
        players: "3-8 jugadores",
        duration: "20-30 min",
        category: "publico"
    },
    {
        title: "M4TCH!",
        description: "En tu turno, elige: descarta una carta que coincida en color o número, o guárdala en tu colección si NO coincide (pero roba otra carta). Tu colección suma puntos, tu mano resta. Sé el primero en llegar a 50 puntos.",
        emoji: "🎴",
        link: "https://m4tch.netlify.app/",
        players: "2-6 jugadores",
        duration: "15-30 min",
        category: "publico"
    },
    {
        title: "OutFox The Fox",
        description: "Es como Trivia, pero te damos todas las respuestas. Ordena 5 elementos de una lista Top 5, pero cuidado: el Zorro creó una respuesta falsa. Atrápalo clasificándola correctamente. Dobla la apuesta en la respuesta que creas mejor colocada.",
        emoji: "🦊",
        link: "https://outfox-the-fox-game.netlify.app/",
        players: "2-10 jugadores",
        duration: "45 min",
        category: "publico"
    },
    {
        title: "TOP TEN",
        description: "Juego cooperativo: cada jugador recibe un número secreto del 1 (mínimo) al 10 (máximo). Responde un tema según tu intensidad. El CAP'TEN ordena todas las respuestas de menor a mayor. Sobrevivan 5 rondas sin perder fichas de unicornio.",
        emoji: "🦄",
        link: "https://toptendigital.netlify.app/",
        players: "4-9 jugadores",
        duration: "30-45 min",
        category: "publico"
    },
    {
        title: "El Espía",
        description: "Todos conocen la ubicación secreta, excepto uno: el espía. Los jugadores hacen preguntas relacionadas con el lugar mientras el espía intenta adivinar dónde están sin ser descubierto. 8 minutos para identificar al impostor.",
        emoji: "🕵️‍♂️",
        link: "https://ubicacionsecreta.netlify.app/",
        players: "3-8 jugadores",
        duration: "8 min/ronda",
        category: "publico"
    },
    {
        title: "Paren La Nave",
        description: "Trivia espacial de estimación numérica. Responde preguntas intentando acercarte lo más posible al número correcto sin pasarte. 8 rondas de diversión galáctica en tiempo real con multijugador.",
        emoji: "🚀",
        link: "https://paren-la-nave.netlify.app/",
        players: "2-8 jugadores",
        duration: "20-30 min",
        category: "publico"
    },
    {
        title: "A Little Wordy",
        description: "Descifra la palabra secreta de tu oponente usando pistas estratégicas (Vanilla o Spicy). Cada pista cuesta Berry Tokens que van a tu rival. Gana solo si adivinas teniendo MÁS tokens que él. Equilibra información vs recursos.",
        emoji: "🔤",
        link: "https://alittlewordy.netlify.app/",
        players: "2 jugadores",
        duration: "20-30 min",
        category: "publico"
    },
    {
        title: "Medium",
        description: "Juego social de lectura mental. Tú y tu compañero reciben cartas con palabras. Piensen en la palabra que las conecta y ¡díganla al mismo tiempo! Acumulen tokens Mind Meld (7-6-5), Telepathy (4-3) y Psychic Link (2-1). Cuando sucede, se siente como magia.",
        emoji: "🔮",
        link: "https://mediumdigital.netlify.app/medi",
        players: "2-6 jugadores",
        duration: "30-45 min",
        category: "publico"
    },
    {
        title: "My Favourite Things",
        description: "No conoces el valor de tus propias cartas. Otros escriben sus favoritos en tus cartas. Luego juegas bazas sin saber tu número, adivinando cuán favorito es cada ítem. El 💔 (lo que menos gusta) vence al #1 (favorito).",
        emoji: "❤️",
        link: "https://myfavouritethings.netlify.app/",
        players: "3-6 jugadores",
        duration: "30-40 min",
        category: "publico"
    },
    {
        title: "Wits & Wagers",
        description: "Trivia de estimación y apuestas. Escribe tu respuesta numérica, luego colócala en el tablero. Apuesta fichas en la respuesta que creas más cercana (puede ser la tuya o la de otros). Gana apostando sabiamente, no sabiendo todo.",
        emoji: "🎰",
        link: "https://witsandwages.netlify.app/",
        players: "4-20 jugadores",
        duration: "25 min",
        category: "publico"
    },
    {
        title: "Green Team Wins",
        description: "Juego de equipos cooperativo/competitivo potenciado por IA. Trabaja con tu equipo verde para superar desafíos mientras compites contra otros equipos. Estrategia, comunicación y toma de decisiones en tiempo real.",
        emoji: "🟢",
        link: "https://greenteamwins.netlify.app/",
        players: "Variable",
        duration: "Variable",
        category: "publico"
    },
    {
        title: "Monikers",
        description: "Adivina nombres en 3 rondas con reglas diferentes. Ronda 1: describe con cualquier palabra o gesto. Ronda 2: solo UNA palabra como pista. Ronda 3: solo gestos, sin hablar (Charades). 283 cartas de celebridades, personajes ficticios y figuras históricas.",
        emoji: "🎭",
        link: "https://monikersdigital.netlify.app/",
        players: "4+ jugadores",
        duration: "30-60 min",
        category: "publico"
    },
    {
        title: "Impostor",
        description: "¿Quién es el impostor? La mayoría conoce la palabra secreta, pero los impostores no. Cada jugador da pistas para demostrar que sabe la palabra, mientras los impostores intentan pasar desapercibidos. Descubre quién miente antes de que te descubran.",
        emoji: "🎭",
        link: "https://aistudio.google.com/apps/drive/1g_Zj8s7oy5Y_25oCH2ER5bm4DP5RqcYB?showPreview=true&showAssistant=true",
        players: "Ilimitado",
        duration: "5-10 min",
        category: "privado"
    },
    {
        title: "In a Nutshell",
        description: "El juego de las definiciones perfectas. Oculta el mayor número de palabras de tu definición para que tus compañeros adivinen el concepto. ¿Puedes explicar algo complejo de forma simple? Múltiples modos de juego para diferentes dinámicas.",
        emoji: "🥜",
        link: "https://aistudio.google.com/apps/drive/1rN9sRNFF99j-xKLL2cBGl4kfS2GFZegH?showPreview=true&showAssistant=true",
        players: "Variable",
        duration: "Variable",
        category: "privado"
    },
    {
        title: "El Artista Falso",
        description: "Todos dibujan juntos en un mismo lienzo, pero hay un impostor que no sabe qué están dibujando. Contribuye lo suficiente para no ser descubierto, pero no tanto como para revelar tu identidad. ¿Arte o engaño?",
        emoji: "🎨",
        link: "https://aistudio.google.com/apps/drive/1LflzGZ4ilNU0ORKuHbdvSRyGsuiQ1MRp?showPreview=true&showAssistant=true",
        players: "3-10 jugadores",
        duration: "5-10 min",
        category: "privado"
    }
];
