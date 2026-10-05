ItemEvents.tooltip(event => {

    event.addAdvanced("#forge:flowers/golden", (item, advanced, text) => {
        text.add(1, Text.of('Golden Flower').gold())
    })
    event.addAdvanced("#forge:flowers/pure", (item, advanced, text) => {
        text.add(1, Text.of('Pure Flower').white())
    })
    event.addAdvanced("#forge:flowers/ebony", (item, advanced, text) => {
        text.add(1, Text.of('Ebony Flower').darkPurple())
    })
    event.addAdvanced("#forge:flowers/cobalt", (item, advanced, text) => {
        text.add(1, Text.of('Cobalt Flower').darkAqua())
    })
    event.addAdvanced("#forge:flowers/crimson", (item, advanced, text) => {
        text.add(1, Text.of('Crimson Flower').darkRed())
    })
    event.addAdvanced("#forge:flowers/lush", (item, advanced, text) => {
        text.add(1, Text.of('Lush Flower').lightPurple())
    })
})