const players = [
    'players/player-1.png',
    'players/player-2.png',
    'players/player-3.png',
    'players/player-4.png',
    'players/player-5.png',
    'players/player-6.png',
    'players/player-7.png',
    'players/player-8.png',
    'players/player-9.png',
    'players/player-10.png',
    'players/player-11.png',
    'players/player-12.png',
];
let playerIndex = 0;
const imgElement = document.getElementById('slide-img-set');
setInterval(() => {
    if (playerIndex >= players.length) {
        playerIndex = 0;
    }
    const playerUrl = players[playerIndex];
    imgElement.setAttribute('src', playerUrl)
    playerIndex++;
}, 1500);
