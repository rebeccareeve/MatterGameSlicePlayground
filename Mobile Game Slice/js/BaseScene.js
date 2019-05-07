console.log("hello");

class BaseScene extends Phaser.Scene {
  constructor(id) {
    super(id)
    this.id = id;
  }

  preload() {
    this.load.image('park', 'assets/background.png');
    this.load.image('exit', 'assets/exit.png');
    this.load.spritesheet(
      'player',
      'assets/player.png', {
        frameWidth: 32,
        frameHeight: 32,
        margin: 1,
        spacing: 2
      }
    );
  }

  create() {
    this.matter.world.setBounds(0, 0, 1800, 755);
    this.matter.add.mouseSpring();
    this.matter.world.on('collisionstart', this.handleCollision, this);
    this.matter.world.on('collisionactive', this.handleCollision, this);

    this.add.image(0, 0, 'park', null).setOrigin(0, 0).setScale(1.35);

    var bod = Phaser.Physics.Matter.Matter.Bodies;
    var floor = bod.rectangle(0, 1000, 400, 400);
    this.matter.world.add(floor);

    this.player = new Player(this, 100, 100);

    this.exit = this.matter.add.sprite(1550, 725, 'exit');
    this.exit.setStatic(true);
    this.exit.label = 'exit';

    var camera = this.cameras.getCamera("");
    camera.zoom = 2;
    camera.startFollow(this.player.sprite);
    camera.setBounds(0, 0, 1800, 800);

    this.keys = this.input.keyboard.addKeys({
      space: Phaser.Input.Keyboard.KeyCodes.SPACE
    });
  }

  update(time, delta) {
    if (Phaser.Input.Keyboard.JustDown(this.keys.space)) {
      this.changeScene();
    }
    this.player.update();
  }

  handleCollision(event) {
    event.pairs.forEach(this.matchCollisionPair, this);
  }
  matchCollisionPair(pair) {
    const bodyA = pair.bodyA;
    const bodyB = pair.bodyB;
    let myPair = [null, null];
    if (bodyA.gameObject && bodyA.gameObject.label) {
      this.sortCollisionObjects(bodyA.gameObject.label, myPair)
    }
    if (bodyB.gameObject && bodyB.gameObject.label) {
      this.sortCollisionObjects(bodyB.gameObject.label, myPair)
    }
    if (myPair[0] == 'player' && myPair[1] == 'exit') {
      this.changeScene();
    }
  }
  sortCollisionObjects(label, arr) {
    switch (label) {
      case 'player':
        arr[0] = 'player';
        break
      case 'exit':
        arr[1] = 'exit';
        break
    }
  }
  changeScene() {
    switch (this.id) {
      case 'SceneA':
        this.scene.start('SceneC');
        break
      case 'SceneC':
        this.scene.start('SceneD');
        break
      case 'SceneD':
        this.scene.start('SceneE');
        break
      case 'SceneE':
        this.scene.start('SceneA');
        break
    }
  }
}
