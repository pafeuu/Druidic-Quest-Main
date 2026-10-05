ItemEvents.tooltip(event => {

    // ======================================== AOE tools ===============================================

    event.addAdvanced(["kubejs:primitive_excavator",
        "kubejs:primitive_mining_hammer"], (item, advanced, text) => {
            text.add(1, Text.of("Mines in a 3x3.").blue())
        })

    event.addAdvanced(["kubejs:basic_excavator",
        "kubejs:basic_mining_hammer"], (item, advanced, text) => {
            text.add(1, Text.of("Mines in a 5x5.").blue())
        })

    event.addAdvanced(["kubejs:sturdy_excavator",
        "kubejs:sturdy_mining_hammer"], (item, advanced, text) => {
            text.add(1, Text.of("Mines in a 7x7.").blue())
        })

    event.addAdvanced("kubejs:the_terraformer", (item, advanced, text) => {
        if (!event.shift) {
            text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
        } else {
            text.add(1, Text.green('Right clicking stone and dirt like blocks will turn them into compost!'))
            text.add(2, Text.red('Only works above sea level!'))
        }
    })

})