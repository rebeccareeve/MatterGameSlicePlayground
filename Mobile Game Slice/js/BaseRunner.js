class BaseRunner extends BaseScene {
  constructor(id) {
    super(id);
  }

  preload() {
    super.preload();
  }

  create() {
    super.create();
    this.createRunnerBody();
  }

  update(time, delta) {
    super.update(time, delta);
    if (this.player.direction) {
      this.player.moveRight = true;
    } else {
      this.player.moveLeft = true;
    }
  }

  createRunnerBody() {
    const Bodies = Phaser.Physics.Matter.Matter.Bodies;
    const {
      width: w,
      height: h,
      x: x,
      y: y
    } = this.player.sprite;

    this.player.sensors = {
      left: Bodies.rectangle(x - w + 7, y, 4, 2, {
        isSensor: true
      }),
      right: Bodies.rectangle(x + w - 7, y, 4, 2, {
        isSensor: true
      })
    };

    const compoundBody = Phaser.Physics.Matter.Matter.Body.create({
      parts: [this.player.sprite.body, this.player.sensors.left, this.player.sensors.right]
    });

    this.player.sprite.setExistingBody(compoundBody);

    this.matterCollision.addOnCollideStart({
      objectA: [this.player.sensors.left, this.player.sensors.right],
      callback: this.onSensorCollision,
      context: this
    });
    this.player.direction = true;
  }

  onSensorCollision() {
    this.player.direction = !this.player.direction;
  }
}
