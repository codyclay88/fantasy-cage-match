This is....

# Fantasy Cage Match!
A game that pits you (or a much more handsome digital representation of you) against hordes of enemies in a fight to the death! (And then immediate resurrection!). 

## Attack System

## Leveling System
I envision a "passive" levelling system, where you player increases his/her skill stats not by allocating points to some skill, but instead by actually using the weapon they want to get better at. So if you want your character to have better magic skills, then actually give the character a staff and let him fight with it, and your character will suck with it at first, but over time they will get better with it. 


Git flow and commands:

To create a new branch
`git branch <BRANCH_NAME>`

To see all branches 
`git branch`

To checkout a branch 
`git checkout <BRANCH_NAME>`

To commit changes locally
`git add .`
`git commit -m "message text"`

To push local repository to remote repository
`git push origin <BRANCH_NAME>`


# Current Build Notes

## Branch: Classes

In this branch I have recoded the game YET AGAIN. I have decided to forego scenes for now in lew of setting up some classes. This will allow us in the future to have a much more condensed ``main.js`` and in theory, much more condensed ``<SCENE_NAME>.js`` in general.

### Fixed Animation!

I finally figured out how to stop the animation on whatever current frame it is on in Phaser 3! Many things are called differently in Phaser 3 vs. Phaser 2, and all the current documentation on Phaser's website is still for Phaser 2.

However, there are still phaser 3 examples found at https://labs.phaser.io 

I used these examples along with some googling to figure out how to properly code this game. We could now effectively code classes for enemies, structures, or whatever. This could also eventually be ported to TypeScript interfaces, but I'm going to make sure I have a firm handle on Classes before I move onto that.

### Notes:
Things are really starting to click with JavaScript. This has been an awesome exercise.

At this point, what would you like me to begin working on? Attacks? Experience gains / leveling system? Sprites? Multiplayer?

Let me know what you think the next step is for Fantasy Cage Match, and I'll get started on it. I'm just so stoked to have the basic movements down.