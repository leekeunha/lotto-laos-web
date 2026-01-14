let GameConfig = {
  type: Phaser.AUTO,
  width: 860,
  height: "100vh",
  disableContextMenu: true,
  backgroundColor: "#000000",
  parent: "phaser-game",
  dom: { createContainer: true },
  scale: { mode: Phaser.Scale.NONE, autoCenter: Phaser.Scale.autoCenter },
  scene: [LoadingScene, TitleScene, GameScene],
};

let game = new Phaser.Game(GameConfig);
