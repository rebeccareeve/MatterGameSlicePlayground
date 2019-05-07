class SceneD extends BaseScene { // Swing
  constructor() {
    super('SceneD')
  }

  preload() {
    super.preload()
    this.load.image('boat', 'assets/boat.png');
  }

  create() {
    super.create()
    var bod = Phaser.Physics.Matter.Matter.Bodies;
    var boatSwing = this.matter.add.image(700, 600, 'boat', null, {
      shape: 'rectangle'
    }).setScale(0.4);

    this.matter.add.worldConstraint(boatSwing, 250, 0.1, {
      pointA: {
        x: 800,
        y: 400
      },
      pointB: {
        x: -150,
        y: -20
      },
    });
    this.matter.add.worldConstraint(boatSwing, 250, 0.1, {
      pointA: {
        x: 840,
        y: 400
      },
      pointB: {
        x: 150,
        y: -20
      }
    });
  }
}
