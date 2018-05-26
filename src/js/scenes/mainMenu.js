let startButton, menubg;
class MainMenu extends Phaser.Scene{
    constructor() {
        super({key: "MainMenu"});
    }

    create()
    {
        
        this.menubg = this.add.image(400,400,'menubg');
        this.startButton = this.add.sprite(400, 400, 'startbutton').setInteractive();

        this.anims.create({
            key:'click',
            frames: [ {key: 'startbutton', frame: 1}],
            frameRate: 10
        })

        this.startButton.on('pointerdown', function startGame(pointer){
            this.startButton.anims.play('click',true);
        }, this);
        this.startButton.on('pointerup', function(){
            this.scene.start('Game')
        }, this);

    }
    
}