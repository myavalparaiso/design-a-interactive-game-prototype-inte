// kmso_design_a_intera.js

// Game Configuration
const gameConfig = {
  title: "Interactopia",
  version: "0.1",
  debugMode: true,
  screen: {
    width: 1280,
    height: 720,
  },
};

// Game Mechanics
const gameMechanics = {
  gravity: 0.5,
  playerSpeed: 5,
  jumpForce: 10,
};

// Levels
const levels = [
  {
    id: 1,
    name: "Tutorial",
    terrain: [
      { x: 0, y: 0, w: 1280, h: 100 }, // Ground
      { x: 500, y: 300, w: 200, h: 200 }, // Platform
    ],
    enemies: [],
    powerups: [],
  },
  {
    id: 2,
    name: "Forest",
    terrain: [
      { x: 0, y: 0, w: 1280, h: 100 }, // Ground
      { x: 200, y: 200, w: 100, h: 100 }, // Tree
      { x: 600, y: 300, w: 200, h: 200 }, // Platform
    ],
    enemies: [
      { x: 400, y: 250, type: "Spike" },
    ],
    powerups: [
      { x: 1000, y: 350, type: "Coin" },
    ],
  },
];

// Player
const player = {
  x: 100,
  y: 100,
  w: 50,
  h: 50,
  health: 100,
  score: 0,
};

// UI
const ui = {
  font: "Arial",
  fontSize: 24,
  color: "#FFFFFF",
};

// Audio
const audio = {
  music: "interactopia_theme.mp3",
  soundEffects: {
    jump: "jump.wav",
    coin: "coin.wav",
  },
};

// Integrate all configurations
const game = {
  config: gameConfig,
  mechanics: gameMechanics,
  levels: levels,
  player: player,
  ui: ui,
  audio: audio,
};

// Export the game object
export default game;