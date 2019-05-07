var config = {
  type: Phaser.AUTO,
  width: 1800,
  height: 800,
  backgroundColor: '#000000',
  parent: 'phaser-example',
  physics: {
    default: 'matter',
    matter: {
      gravity: {
        y: 0.8
      },
      debug: true,
      debugBodyColor: 0xffffff,
      wireframes: false
    }
  },
  scene: [SceneA, SceneC, SceneD, SceneE],
  plugins: {
    scene: [{
      plugin: PhaserMatterCollisionPlugin, // The plugin class
      key: "matterCollision", // Where to store in Scene.Systems, e.g. scene.sys.matterCollision
      mapping: "matterCollision" // Where to store in the Scene, e.g. scene.matterCollision
    }]
  },
  callbacks: {
    postBoot: function() {
      resize();
    }
  }
};

var game = new Phaser.Game(config);

function resize() {
  var canvas = document.querySelector("canvas");
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var windowRatio = windowWidth / windowHeight;
  var gameRatio = game.config.width / game.config.height;

  if (windowRatio < gameRatio) {
    canvas.style.width = windowWidth + "px";
    canvas.style.height = (windowWidth / gameRatio) + "px";
  } else {
    canvas.style.width = (windowHeight * gameRatio) + "px";
    canvas.style.height = windowHeight + "px";
  }
}
