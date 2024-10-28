namespace SpriteKind {
    export const door = SpriteKind.create()
    export const door1 = SpriteKind.create()
    export const enemylvl2 = SpriteKind.create()
    export const downdoor0 = SpriteKind.create()
    export const boss_stage_1 = SpriteKind.create()
}
namespace StatusBarKind {
    export const enemyhealth1 = StatusBarKind.create()
    export const bosshealth = StatusBarKind.create()
}
statusbars.onZero(StatusBarKind.bosshealth, function (status) {
    sprites.destroy(mySprite4, effects.fire, 5000)
    pause(500)
    effects.starField.startScreenEffect()
    game.showLongText("that was a hard adventure", DialogLayout.Bottom)
    game.setGameOverMessage(true, "victory!!")
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile3, function (sprite, location) {
    game.showLongText("get ready for a boss fight", DialogLayout.Full)
    mySprite.y += 219
    mySprite4 = sprites.create(assets.image`monster3`, SpriteKind.boss_stage_1)
    tiles.placeOnRandomTile(mySprite4, sprites.swamp.swampTile13)
    statusbar4 = statusbars.create(20, 4, StatusBarKind.bosshealth)
    statusbar4.value = 22
    statusbar4.attachToSprite(mySprite4)
    pause(2000)
    mySprite4.follow(mySprite, 89)
})
statusbars.onZero(StatusBarKind.enemyhealth1, function (status) {
    sprites.destroyAllSpritesOfKind(SpriteKind.enemylvl2, effects.spray, 5000)
    pause(5000)
    tiles.setCurrentTilemap(tilemap`level2-3`)
    mySprite.setPosition(43, 3)
    mainhealth.value += 20
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.saplingPine, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level-2 forest abyss`)
    mySprite.setPosition(7, 3)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.shrub, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.placeOnRandomTile(mySprite, sprites.castle.shrub)
    }
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(mySprite4)
    game.splash("next level?")
    tiles.placeOnRandomTile(mySprite, sprites.castle.rock0)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemylvl2, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        statusbar3.value += -3
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.boss_stage_1, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        statusbar4.value += -3
        mainhealth.value += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`teleporter1`, function (sprite, location) {
    mySprite4 = sprites.create(assets.image`monster3`, SpriteKind.enemylvl2)
    statusbar3 = statusbars.create(15, 3, StatusBarKind.enemyhealth1)
    statusbar3.attachToSprite(mySprite4)
    statusbar3.value = 16
    game.splash("get ready to battle!")
    tiles.placeOnRandomTile(mySprite, sprites.skillmap.islandTile7)
    tiles.placeOnRandomTile(mySprite4, sprites.swamp.swampTile1)
    pause(500)
    mySprite4.follow(mySprite, 74)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    pause(112)
    mainhealth.value += -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.door1, function (sprite, otherSprite) {
    game.showLongText("If stuck on one tile island press A", DialogLayout.Bottom)
    game.showLongText("To attack press B", DialogLayout.Bottom)
    sprites.destroyAllSpritesOfKind(SpriteKind.door1)
    tiles.setCurrentTilemap(tilemap`battle-1`)
    game.splash("battle!!!", "get ready. then press A to begin.")
    tiles.placeOnRandomTile(mySprite, sprites.castle.shrub)
    mySprite4 = sprites.create(assets.image`monster`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(mySprite4, sprites.swamp.swampTile13)
    statusbar2 = statusbars.create(15, 3, StatusBarKind.EnemyHealth)
    statusbar2.attachToSprite(mySprite4)
    mainhealth.value = 100
    statusbar2.value = 15
    mySprite4.follow(mySprite, 58)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.door, function (sprite, otherSprite) {
    tiles.setCurrentTilemap(tilemap`forest level-1 stage-2`)
    mySprite.setPosition(0, 39)
    mySprite3 = sprites.create(assets.image`door1`, SpriteKind.door1)
    mySprite3.setPosition(251, 25)
    sprites.destroyAllSpritesOfKind(SpriteKind.door)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile19, function (sprite, location) {
    mySprite.setPosition(62, -3)
    tiles.setCurrentTilemap(tilemap`level-3`)
})
sprites.onOverlap(SpriteKind.enemylvl2, SpriteKind.Player, function (sprite, otherSprite) {
    pause(110)
    mainhealth.value += -1
})
sprites.onOverlap(SpriteKind.boss_stage_1, SpriteKind.Player, function (sprite, otherSprite) {
    pause(138)
    mainhealth.value += -2
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    game.splash("you escaped the spirits lair", "and moved on to level 2")
    tiles.setCurrentTilemap(tilemap`level-2 sky forest`)
    mainhealth.value += 24
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        statusbar2.value += -3
    }
})
let mySprite3: Sprite = null
let statusbar2: StatusBarSprite = null
let statusbar3: StatusBarSprite = null
let statusbar4: StatusBarSprite = null
let mySprite4: Sprite = null
let mainhealth: StatusBarSprite = null
let mySprite: Sprite = null
game.splash("have fun out there")
tiles.setCurrentTilemap(tilemap`forest-1`)
mySprite = sprites.create(assets.image`cat`, SpriteKind.Player)
mySprite.setPosition(106, 3)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
let mySprite2 = sprites.create(assets.image`door1`, SpriteKind.door)
mainhealth = statusbars.create(45, 3, StatusBarKind.Health)
mainhealth.attachToSprite(mySprite)
mySprite2.setPosition(251, 232)
game.onUpdate(function () {
    characterAnimations.runFrames(
    mySprite,
    [img`
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 f . f d f 
        . f 2 2 2 2 2 2 b b f f d f 
        . f b d d d d d d b b d b f 
        . f d d d d d b d d f f f . 
        . f d f f f d f f d f . . . 
        . f f . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . 
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e b f b . 
        f d d f d d f d d f f d f . 
        f b d d b b d d 2 b f d f . 
        . f 2 2 2 2 2 2 d b d b f . 
        . f d d d d d d d f f f . . 
        . f d b d f f f d f . . . . 
        . . f f f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 b f f d f 
        . f 2 2 2 2 2 2 d b b d b f 
        . f d d d d d d d f f f f . 
        . . f d b d f d f . . . . . 
        . . . f f f f f f . . . . . 
        `],
    5000,
    characterAnimations.rule(controller.dx())
    )
})
game.onUpdate(function () {
    characterAnimations.runFrames(
    mySprite,
    [img`
        . . . . e e e . . . . e e e 
        . . . . c d d c . . c d d c 
        . . . . c b d d f f d d b c 
        . . . . c 3 b d b d d b 3 c 
        . . . . f b 3 d d d d 3 b f 
        . . . . e d d d d d d d d e 
        b f b . e d f d d d d f d e 
        f d f . f d d f d d f d d f 
        f d f . f 2 d d b b d d b f 
        f d f f b b 2 2 2 2 2 2 f . 
        f b d b b d d d d d d b f . 
        . f f f d d b d d d d d f . 
        . . . f d f f d f f f d f . 
        . . . f f . . f f . . f f . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . e e e . . . . e e e 
        . . . . c d d c . . c d d c 
        . . . . c b d d f f d d b c 
        . . . . c 3 b d b d d b 3 c 
        . . . . f b 3 d d d d 3 b f 
        . . . . e d d d d d d d d e 
        . b f b e d f d d d d f d e 
        . f d f f d d f d d f d d f 
        . f d f b 2 d d b b d d b f 
        . f b d b d 2 2 2 2 2 2 f . 
        . . f f f d d d d d d d f . 
        . . . . f d f f f d b d f . 
        . . . . f f . . f f f f . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . e e e . . . . e e e 
        . . . . c d d c . . c d d c 
        . . . . c b d d f f d d b c 
        . . . . c 3 b d b d d b 3 c 
        . . . . f b 3 d d d d 3 b f 
        . . . . e d d d d d d d d e 
        b f b . e d f d d d d f d e 
        f d f . f d d f d d f d d f 
        f d f f b 2 d d b b d d b f 
        f b d b b d 2 2 2 2 2 2 f . 
        . f f f f d d d d d d d f . 
        . . . . . f d f d b d f . . 
        . . . . . f f f f f f . . . 
        `],
    5000,
    controller.dx()
    )
})
