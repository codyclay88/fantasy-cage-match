var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    physics:{
        default:'arcade',
        arcade:{
            gravity:{y: 0}
        }
    },

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var cursors;
var weapon;
var firebutton;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.spritesheet('dude', 
        'assets/sprite.png',
        { frameWidth: 16, frameHeight: 32 }
    );
    this.load.image('map', 'assets/map.png');
}

function create ()
{
    this.add.image(400,400,'map');
    
    player = this.physics.add.sprite(400,400,'dude').setScale(2);
    player.setCollideWorldBounds(true);

    cursors = this.input.keyboard.createCursorKeys();

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude',{ start: 6, end:8}),
        frameRate: 10,
        repeat: -1,
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude',{ start: 9, end: 11}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'up',
        frames: this.anims.generateFrameNumbers('dude', {start: 3, end: 5}),
        framerate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'down',
        frames: this.anims.generateFrameNumbers('dude', {start: 0, end: 2}),
        framerate: 10,
        repeat: -1,
    })

    this.anims.create({
        key: 'face',
        frames: [ {key: 'dude', frame: 1} ],
        framRate: 20
    })

    weapon = game.add.weapon(30, 'bullet');
    weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    weapon.bulletSpeed = 500;
    weapon.fireRate = 100;
}

function update ()
{
    if (cursors.left.isDown)
    {
        player.setVelocityX(-160);
        player.anims.play('left', true);

    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);
        player.anims.play('right', true);

    }
    else if (cursors.up.isDown)
    {
        player.setVelocityY(-160);
        player.anims.play('up', true);

    }
    else if (cursors.down.isDown)
    {
        player.setVelocityY(160);
        player.anims.play('down', true);
    }
    else
    {
        player.setVelocityX(0);
        player.setVelocityY(0);
        player.anims.play('face', true);

    }
}