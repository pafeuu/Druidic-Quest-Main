ItemEvents.tooltip(event => {

    event.addAdvanced("kubejs:golden_magic_feather", (item, advanced, text) => {
        if (!event.shift) {
            text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
        } else {
            text.add(1, Text.gold('You can insta mine obsidian by right clicking'))
        }
    })
    
    event.addAdvanced("kubejs:fiery_magic_feather", (item, advanced, text) => {
        if (!event.shift) {
            text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
        } else {
            text.add(1, Text.gold('You can insta mine obsidian by right clicking'))
            text.add(2, Text.red('Right clicking netherrack in the nether will cause an explosion!'))
        }
    })

    event.addAdvanced("kubejs:rainbow_magic_feather", (item, advanced, text) => {
        if (!event.shift) {
            text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
        } else {
            text.add(1, Text.gold('You can insta mine obsidian by right clicking'))
            text.add(2, Text.red('Right clicking netherrack in the nether will cause an explosion!'))
            text.add(3, Text.lightPurple('Right clicking bedrock on the nether roof will destroy it!'))
            text.add(3, Text.darkGreen('Right clicking Maze Blocks will destroy it!'))
        }
    })

})