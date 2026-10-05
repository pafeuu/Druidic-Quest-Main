ItemEvents.tooltip(event => {

    event.addAdvanced("kubejs:broken_key", (item, advanced, text) => {
        if (!event.shift) {
            text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
        } else {
            text.add(1, Text.gold("Right click a spawner to destroy it and obtain infused diamond!"))
        }
    })

    event.addAdvanced("kubejs:twilight_key", (item, advanced, text) => {
        if (!event.shift) {
            text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
        } else {
            text.add(1, Text.gold("Right click a spawner in The Twilight Forest to destroy it and obtain rare items and supplies!"))
        }
    })

    event.addAdvanced("kubejs:overworld_key", (item, advanced, text) => {
        if (!event.shift) {
            text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
        } else {
            text.add(1, Text.gold("Right click a spawner in The Overworld to destroy it and obtain rare items and supplies!"))
        }
    })

    event.addAdvanced("kubejs:nether_key", (item, advanced, text) => {
        if (!event.shift) {
            text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
        } else {
            text.add(1, Text.gold("Right click a spawner in The Nether to destroy it and obtain rare items and supplies!"))
        }
    })
})