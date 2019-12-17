namespace SpriteKind {
    export const object = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Money.vy += -250
    tramp.setKind(SpriteKind.object)
    tramp.x += Math.randomRange(-70, 70)
    tramp.y += Math.randomRange(-50, 60)
})
let tramp: Sprite = null
let Money: Sprite = null
scene.setBackgroundColor(15)
Money = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 5 5 5 5 5 5 5 . . . 
. . . . . 5 . 9 . 9 . . 5 . . . 
5 5 . . 5 5 . 9 . 9 . . 5 . . . 
. 5 5 5 5 . . . . . . . 5 . . . 
. . 5 5 . . . 4 4 4 . 5 5 . . . 
. . 5 5 5 5 5 5 . . . 5 . . . . 
. . 5 5 5 3 3 5 5 . 5 5 5 . . . 
. 5 3 3 3 3 3 3 5 . . . 5 5 . . 
. 5 5 5 3 3 3 5 5 . . . . 5 5 . 
. 5 . 5 5 5 5 5 . . . . . 5 5 . 
. 5 . . . . . . . . . . . 5 . . 
. 5 5 . . . . . . . . . . 5 . . 
. . 5 5 5 5 5 . . . . . 5 5 . . 
. . . . . . 5 5 5 5 5 5 5 . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
scene.cameraFollowSprite(Money)
Money.ay = 100
tramp = sprites.create(img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
8 f f f f f f f 8 f f f f f f f 
f 8 f f f f f 8 f 8 f f f f f 8 
f f 8 f f f 8 f f f 8 f f f 8 f 
f f f 8 f 8 f f f f f 8 f 8 f f 
f f f f 8 f f f f f f f 8 f f f 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.object)
Money.setPosition(300, 400)
tramp.setPosition(300, 520)
game.onUpdate(function () {
    Money.x += controller.dx()
})
