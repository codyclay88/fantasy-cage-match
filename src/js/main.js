import Player from "./characters/Player.js"

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    parent: "#canvas",
    scene: {
        preload: preload,
        create: create,
        update: update
    }

}

const game = new Phaser.Game(config)

function preload(){
    this.load.spritesheet('dude', 
        'assets/sprite.png',
        { frameWidth: 16, frameHeight: 32 }
    );
    this.load.image('background', 'assets/map.png');
}

function create(){
    this.add.image(400,400,'background')
    
    this.player = new Player(this)

    setupCollision(this)
}

function update(){
    this.player.update()
}

function setupCollision(game) {
    
}
