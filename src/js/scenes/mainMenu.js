let startButton, menubg;
class MainMenu extends Phaser.Scene{
    constructor() {
        super({key: "MainMenu"});
    }

    create()
    {
        
        this.menubg = this.add.image(400,400,'menubg');
        this.startButton = this.add.sprite(400, 400, 'startbutton').setInteractive();

        this.startButton.on('pointerdown', function startGame(pointer){
            this.scene.start('Game');
        }, this);

    }
    
}