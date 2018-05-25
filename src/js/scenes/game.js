class Game extends Phaser.Scene{
    constructor() {
        super({key: 'Game'});
    }

    create(){
        this.add.image(400,400,'background')

        this.player = new Player(this);

    }

    update(){
        this.player.update()
    }

}