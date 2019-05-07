class SceneC extends BaseScene { // Slide
  constructor() {
    super('SceneC')
  }

  preload() {
    super.preload()
    this.load.image('AB', 'assets/ABlue.png');
    this.load.image('BB', 'assets/BBlue.png');
    this.load.image('CB', 'assets/CBlue.png');
    this.load.image('DB', 'assets/DBlue.png');
    this.load.image('ZB', 'assets/ZBlue.png');
    this.load.image('MB', 'assets/MBlue.png');
    this.load.image('XB', 'assets/XBlue.png');
    this.load.image('YB', 'assets/YBlue.png');
    this.load.image('IY', 'assets/IYellow.png');
    this.load.image('KY', 'assets/KYellow.png');
    this.load.image('RY', 'assets/RYellow.png');
    this.load.image('TY', 'assets/TYellow.png');
    this.load.image('VY', 'assets/VYellow.png');
    this.load.image('QY', 'assets/QYellow.png');
    this.load.image('slide', 'assets/seeSawBar.png')
  }

  create() {
    super.create()
    var bod = Phaser.Physics.Matter.Matter.Bodies;
    this.AB = this.matter.add.sprite(700, 725, 'AB').setScale(0.25).setStatic(true);
    this.KY = this.matter.add.sprite(765, 725, 'KY').setScale(0.25).setStatic(true);
    this.DB = this.matter.add.sprite(830, 725, 'DB').setScale(0.25).setStatic(true);
    this.TY = this.matter.add.sprite(895, 725, 'TY').setScale(0.25).setStatic(true);
    this.CB = this.matter.add.sprite(765, 660, 'CB').setScale(0.25).setStatic(true);
    this.IY = this.matter.add.sprite(830, 660, 'IY').setScale(0.25).setStatic(true);
    this.BB = this.matter.add.sprite(895, 660, 'BB').setScale(0.25).setStatic(true);
    this.ZB = this.matter.add.sprite(830, 595, 'ZB').setScale(0.25).setStatic(true);
    this.RY = this.matter.add.sprite(895, 595, 'RY').setScale(0.25).setStatic(true);
    this.MB = this.matter.add.sprite(895, 530, 'MB').setScale(0.25).setStatic(true);
    this.XB = this.matter.add.sprite(960, 725, 'XB').setScale(0.25).setStatic(true);
    this.QY = this.matter.add.sprite(960, 660, 'QY').setScale(0.25).setStatic(true);
    this.YB = this.matter.add.sprite(960, 595, 'YB').setScale(0.25).setStatic(true);
    this.VY = this.matter.add.sprite(960, 530, 'VY').setScale(0.25).setStatic(true).setDepth(2);

    this.slide = this.matter.add.sprite(1178, 628, 'slide').setScale(0.5).setStatic(true).setDepth(1);
    this.slide.setRotation(Phaser.Math.DegToRad(30));
  }
}
