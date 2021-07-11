export default class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  preload() {
    this.load.image("background", "assets/Background.png");
    this.load.image("board", "assets/board.png");
    this.load.image("bookshelf", "assets/bookshelf.png");
    this.load.image("chair", "assets/Chair.png");
    this.load.image("desk", "assets/desk.png");
    this.load.image("door", "assets/door.png");
    this.load.image("drawer", "assets/drawer.png");
    this.load.image("lock", "assets/lock.png");
  }

  create() {
    this.background = this.add.image(632.5, 300, "background");
    this.door = this.add
      .sprite(199, 386.8, "door")
      .setInteractive({ cursor: "pointer" });
    this.bookshelf = this.add
      .sprite(450, 386.8, "bookshelf")
      .setInteractive({ cursor: "pointer" });
    this.desk = this.add
      .sprite(800, 422, "desk")
      .setInteractive({ cursor: "pointer" });
    this.chair = this.add
      .sprite(800, 440, "chair")
      .setInteractive({ cursor: "pointer" });
    this.drawer = this.add
      .sprite(1100, 430, "drawer")
      .setInteractive({ cursor: "pointer" });
    this.board = this.add
      .sprite(800, 220, "board")
      .setInteractive({ cursor: "pointer" });
    this.lock = this.add.sprite(300, 400, "lock");

    // this.victory = this.add.text(300, 250, "Congrations! You Won!", style);

    this.onHover([
      this.door,
      this.bookshelf,
      this.desk,
      this.chair,
      this.door,
      this.drawer,
      this.board,
    ]);
    this.offHover([
      this.door,
      this.bookshelf,
      this.desk,
      this.chair,
      this.door,
      this.drawer,
      this.board,
    ]);

    this.onClick([
      this.door,
      this.bookshelf,
      this.desk,
      this.chair,
      this.door,
      this.drawer,
      this.board,
    ]);
  }

  onHover(e) {
    for (let i = 0; i < e.length; i++) {
      e[i].on("pointerover", () => {
        if (e[i] === this.desk || e[i] === this.chair) {
          this.desk.setTint(0xffd700);
          this.chair.setTint(0xffd700);
        }
        e[i].setTint(0xffd700);
      });
    }
  }
  offHover(e) {
    for (let i = 0; i < e.length; i++) {
      e[i].on("pointerout", () => {
        if (e[i] === this.desk || e[i] === this.chair) {
          this.desk.clearTint();
          this.chair.clearTint();
        }
        e[i].clearTint();
      });
    }
  }

  onClick(e) {
    for (let i = 0; i < e.length; i++) {
      e[i].on("pointerdown", () => {
        console.log("down");
        if (e[i] === this.drawer) {
          this.lock.destroy();
          console.log(this.lock);
        }
        if (e[i] === this.door && !this.lock.active) {
          const style = {
            font: "65px Arial",
            fill: "#ff0044",
            align: "center",
          };

          this.add.text(300, 250, "Congrations! You Won!", style);
        }
      });
    }
  }
}
