namespace SpriteKind {
    export const object = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.object, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Money.vy += -250
    tramp.setKind(SpriteKind.object)
})
let tramp: Sprite = null
let Money: Sprite = null
scene.setBackgroundColor(1)
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
Money.top = 150
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
Money.setPosition(76, 38)
tramp.setPosition(78, 101)
Money.ay = 145
scene.cameraFollowSprite(Money)
game.onUpdate(function () {
    Money.x += controller.dx()
})
