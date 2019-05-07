class SceneE extends BaseScene { // Sand Pit
  constructor() {
    super('SceneE')
  }

  preload() {
    super.preload()
    this.load.image('sandPit', 'assets/sandpit.png');
    this.load.image('brick1', 'assets/brick1.png');
    this.load.image('brick2', 'assets/brick2.png');
    this.load.image('brick3', 'assets/brick3.png');
    this.load.image('brick4', 'assets/brick4.png');
    this.load.image('brick5', 'assets/brick5.png');
    this.load.image('brick6', 'assets/brick6.png');
    this.load.image('brick7', 'assets/brick7.png');
    this.load.image('brick8', 'assets/brick8.png');
    this.load.image('brick9', 'assets/brick9.png');
  }

  create() {
    super.create()
    this.sandPit = this.matter.add.sprite(800, 715, 'sandPit').setScale(1.2).setStatic(true);
    this.brick = this.matter.add.sprite(820, 700, 'brick1').setScale(0.5);
    this.brick = this.matter.add.sprite(830, 700, 'brick2').setScale(0.5);
    this.brick = this.matter.add.sprite(840, 700, 'brick3').setScale(0.5);
    this.brick = this.matter.add.sprite(850, 700, 'brick4').setScale(0.5);
    this.brick = this.matter.add.sprite(825, 650, 'brick5').setScale(0.5);
    this.brick = this.matter.add.sprite(835, 650, 'brick6').setScale(0.5);
    this.brick = this.matter.add.sprite(845, 650, 'brick7').setScale(0.5);
    this.brick = this.matter.add.sprite(822, 600, 'brick8').setScale(0.5);
    this.brick = this.matter.add.sprite(842, 600, 'brick9').setScale(0.5);
  }
}
