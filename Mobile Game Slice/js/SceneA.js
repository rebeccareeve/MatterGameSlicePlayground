class SceneA extends BaseScene { // Trim Trail
  constructor() {
    super('SceneA')
  }

  preload() {
    super.preload()
    this.load.image('post', 'assets/wood.png');
  }

  create() {
    super.create()
    var bod = Phaser.Physics.Matter.Matter.Bodies;
    this.createPosts();
    this.createChain();
  }

  createPosts() {
    this.post = this.matter.add.sprite(200, 735, 'post').setScale(2).setStatic(true);
    this.post = this.matter.add.sprite(300, 730, 'post').setScale(2.5).setStatic(true);
    this.post = this.matter.add.sprite(400, 735, 'post').setScale(2).setStatic(true);
    this.post = this.matter.add.sprite(500, 725, 'post').setScale(3).setStatic(true);
    this.post = this.matter.add.sprite(600, 730, 'post').setScale(2.5).setStatic(true);
    this.post = this.matter.add.sprite(700, 705, 'post').setScale(2.5, 5).setStatic(true);
    this.bridge = this.matter.add.sprite(800, 686, 'post').setScale(2, 7).setStatic(true);
    this.bridge = this.matter.add.sprite(1300, 686, 'post').setScale(2, 7).setStatic(true);
  }

  createChain() {
    var group = this.matter.world.nextGroup(true);
    var chain = this.matter.add.stack(800, 600, 14, 1, 0, 0, function(x, y) { //this.matter.add. stack or pyramid (x, y, columns, rows, columnGap, rowGap, callback)
      return Phaser.Physics.Matter.Matter.Bodies.rectangle(x - 20, y, 53, 20, {
        collisionFilter: {
          group: group
        },
        chamfer: 5,
        density: 0.005,
        frictionAir: 0.05
      });
    });
    this.matter.add.chain(chain, 0.3, 0, -0.3, 0, {
      stiffness: 1,
      length: 2
    });
    this.matter.add.worldConstraint(chain.bodies[0], 2, 0.9, {
      pointA: {
        x: 805,
        y: 620
      },
      pointB: {
        x: -25,
        y: 0
      }
    });
    this.matter.add.worldConstraint(chain.bodies[chain.bodies.length - 1], 2, 0.9, {
      pointA: {
        x: 1295,
        y: 620
      },
      pointB: {
        x: 25,
        y: 0
      }
    });
  }
}
