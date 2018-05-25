export default class BootScene extends Phaser.Scene
{
    constructor()
    {
        super({key: 'boot'})
    }

    preload()
    {
        this.load.image('loading', 'assets/loading.png');

    }
    create()
    {
        this.scene.start('Preload');    
    }
}