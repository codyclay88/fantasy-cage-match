class Preload extends Phaser.Scene
{
    constructor()
    {
        super({key: 'Preload'})
    }

    preload(){
        var progress = this.add.graphics();

        this.load.on('progress',function (value){
            progress.clear();
            progress.fillStyle(0xffffff, 1);
            progress.fillRect(0, 270, 800 * value, 60)
        });

        this.load.on('complete', function (){
            progress.destroy();
        });
        
        this.load.image('menubg', 'assets/mainmenu.png');
        this.load.image('startbutton', 'assets/startbutton.png');
        this.load.image('background', 'assets/map.png');
        this.load.spritesheet('dude', 'assets/sprite.png',
            {frameWidth: 16, frameHeight: 20});
    }

    create(){
        this.scene.start('MainMenu')
    }
}
//     preload()
//     {
//         this.load.image('menubg', 'assets/mainmenu.png');
//         this.load.image('startbutton', 'assets/startbutton.png');
//         this.load.image('background', 'assets/map.png');
//         this.load.spritesheet('dude', 'assets/sprite.png', 
//             {frameWidth: 16, frameHeight: 20});
//         this.add.image(this.centerX(), this.centerY(), 'loading');
//         this.createProgressbar(this.centerX(), this.centerY() +200);

//     }
//     centerX()
//     {
//         return this.sys.game.config.width / 2;
//     }
//     centerY()
//     {
//         return this.sys.game.config.height / 2;
//     }

//     createProgressbar (x, y)
//     {
//         let width = 400
//         let height = 20;
//         let xStart = x - width / 2;
//         let yStart = y - height / 2;

//         let borderOffset = 2;

//         let borderRect = new Phaser.Geom.Rectangle(
//             xStart - borderOffset,
//             yStart - borderOffset,
//             width + borderOffset * 2,
//             height + borderOffset *2);
        
//             let progressbar = this.add.graphics();
 
//             /**
//              * Updates the progress bar.
//              * 
//              * @param {number} percentage 
//              */
//             let updateProgressbar = function (percentage)
//             {
//                 progressbar.clear();
//                 progressbar.fillStyle(0xffffff, 1);
//                 progressbar.fillRect(xStart, yStart, percentage * width, height);
//             };
     
//             this.load.on('progress', updateProgressbar);
     
//             this.load.once('complete', function ()
//             {
     
//                 this.load.off('progress', updateProgressbar);
//                 this.scene.start('MainMenu');
     
//             }, this);
//     }
// }