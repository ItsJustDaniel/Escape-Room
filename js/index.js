import MainScene from "./MainScene.js";

const config = {
  type: Phaser.AUTO,
  width: 1265,
  height: 600,
  scene: [MainScene],
  parent: "escape-room",
};

let game = new Phaser.Game(config);
