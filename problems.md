# Current issues.
This is where I am going to list any problems I run into while coding and can't seem to figure out on my own.

## texture loading problem. 5/24 @ 12:53AM
I know I am extremely close. I got the game to load once with the background and the player character on screen, but now when I try to load the game, I get:

``Uncaught TypeError: Cannot read property 'texture' of undefined``

It seems that my splash.js state, is not loading or passing my sprites properly.

Also, I had to recode a ton of stuff AGAIN today because I was still using a ton of Phaser 2 syntax with Phaser 3. Things will get alot better when they actually publish Phaser 3 docs on Phaser.io. All API docs are currently for 2.x.x

Much too tired to try to figure this out tonight. However, once we have this figured out, the code will be much more modular and we will be able to easily add other scenes like ``main menu`` or possibly a ``Game Over`` screen.

That is all.
Lukas.


