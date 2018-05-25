
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    scene: [Preload, MainMenu, Game ],
    title: 'Fantasy Cage Match',
    physics:{
        default:'arcade',
        arcade:{
            gravity: {y: 0}
        }
    }

}

let game = new Phaser.Game(config);