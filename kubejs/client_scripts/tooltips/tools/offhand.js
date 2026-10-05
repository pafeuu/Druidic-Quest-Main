ItemEvents.tooltip(event => {

    event.addAdvanced("#forge:tools/totems", (item, advanced, text) => {
        text.add(1, Text.of('Only works in the offhand').gray())
    })

    event.addAdvanced("kubejs:basalz_totem", (item, advanced, text) => {
        text.add(2, Text.of('You can see better underground').darkPurple())
    })

    event.addAdvanced("kubejs:blizz_totem", (item, advanced, text) => {
        text.add(2, Text.of('You feel more comfortable in cold biomes').darkPurple())
    })

    event.addAdvanced("kubejs:blaze_totem", (item, advanced, text) => {
        text.add(2, Text.of('You feel more comfortable in hot biomes').darkPurple())
    })

    event.addAdvanced("kubejs:blitz_totem", (item, advanced, text) => {
        text.add(2, Text.of('You feel more powerful during rains and thunderstorms').darkPurple())
    })

})