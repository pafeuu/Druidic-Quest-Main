ItemEvents.tooltip(event => {

    function lunchBoxTooltip(id, slots) {
        event.addAdvanced(id, (item, advanced, text) => {
            text.add(1, Text.of(slots + " Slots").white())
        })
    }

    lunchBoxTooltip("solonion:lunchbag", 5)
    lunchBoxTooltip("solonion:lunchbox", 9)
    lunchBoxTooltip("solonion:golden_lunchbox", 14)
    lunchBoxTooltip("kubejs:emerald_lunchbox", 18)
    lunchBoxTooltip("kubejs:life_lunchbox", 18)
})