class Player{
    constructor(game) {
        this.game = game
        this.sprite = game.physics.add.sprite(400,400,'dude').setScale(1.5);
        this.level = 0
        this.exp = 0
        this.cursors = this.game.input.keyboard.createCursorKeys()
        this.createStaticFields()
        this.spriteSetup()
        this.uiSetup()
    }

    createStaticFields(){
        this.moveVelocity = 160
    }

    spriteSetup(){
        this.sprite.body.setGravityY(0)
        this.sprite.setBounce(0.2)
        this.sprite.setCollideWorldBounds(true)
        this.setAnimations()
    }
    

    setAnimations(){
        this.game.anims.create({
            key: 'left',
            frames: this.game.anims.generateFrameNumbers('dude',{ start: 6, end:8}),
            frameRate: 10,
            repeat: -1,
        })
    
        this.game.anims.create({
            key: 'right',
            frames: this.game.anims.generateFrameNumbers('dude',{ start: 9, end: 11}),
            frameRate: 10,
            repeat: -1
        })
    
        this.game.anims.create({
            key: 'up',
            frames: this.game.anims.generateFrameNumbers('dude', {start: 3, end: 5}),
            framerate: 10,
            repeat: -1
        })
    
        this.game.anims.create({
            key: 'down',
            frames: this.game.anims.generateFrameNumbers('dude', {start: 0, end: 2}),
            framerate: 10,
            repeat: -1,
        })
    
        this.game.anims.create({
            key: 'idle-down',
            frames: [ {key: 'dude', frame: 1} ],
            framRate: 10
        })

        this.game.anims.create({
            key:'idle-up',
            frames: [ {key: 'dude', frame: 4}],
            frameRate: 10
        })

        this.game.anims.create({
            key:'idle-right',
            frames: [ {key: 'dude', frame: 10}],
            frameRate: 10
        })

        this.game.anims.create({
            key:'idle-left',
            frames: [ {key: 'dude', frame: 7}],
            frameRate: 10
        })
    }

    uiSetup(){
        this.scoreText = this.game.add.text(16, 16, 'Fantasy Cage Match - Test Build', { fontSize: '32px', fill: 'white'})
    }

    update(){
    
        if (this.cursors.left.isDown && this.cursors.up.isDown)
        {
            this.sprite.setVelocityY(-160);
            this.sprite.setVelocityX(-160);
            this.sprite.anims.play('left', true);
        }
        // handle up and left motion
        else if (this.cursors.left.isDown && this.cursors.down.isDown)
        {
            this.sprite.setVelocityY(160);
            this.sprite.setVelocityX(-160);
            this.sprite.anims.play('left', true);
        }
        // handle up and left motion
        else if (this.cursors.right.isDown && this.cursors.up.isDown)
        {
            this.sprite.setVelocityY(-160);
            this.sprite.setVelocityX(160);
            this.sprite.anims.play('right', true);
        }
        // handle up and left motion
        else if (this.cursors.right.isDown && this.cursors.down.isDown)
        {
            this.sprite.setVelocityY(160);
            this.sprite.setVelocityX(160);
            this.sprite.anims.play('right', true);
        }
        else if (this.cursors.left.isDown)
        {
            this.sprite.setVelocityY(0);
            this.sprite.setVelocityX(-160);
            this.sprite.anims.play('left', true);
        }
        else if (this.cursors.right.isDown)
        {
            this.sprite.setVelocityY(0);
            this.sprite.setVelocityX(160);
            this.sprite.anims.play('right', true);
        }
        else if (this.cursors.up.isDown)
        {
            this.sprite.setVelocityX(0);
            this.sprite.setVelocityY(-160);
            this.sprite.anims.play('up', true);
    
        }
        else if (this.cursors.down.isDown)
        {
            this.sprite.setVelocityX(0);
            this.sprite.setVelocityY(160);
            this.sprite.anims.play('down', true);
        }
        else
        {
            this.sprite.anims.stop(1, true);
            this.sprite.setVelocityX(0)
            this.sprite.setVelocityY(0) 
        }
        
           

    }
} 