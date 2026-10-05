ItemEvents.tooltip(event => {

    event.addAdvanced(["solonion:lunchbag",
        "solonion:lunchbox",
        "solonion:golden_lunchbox",
        "kubejs:emerald_lunchbox",
        "supplementaries:sack",
        "irons_spellbooks:copper_spell_book",
        "irons_spellbooks:iron_spell_book",
        "irons_spellbooks:gold_spell_book",
        "irons_spellbooks:rotten_spell_book"], (item, advanced, text) => {
            text.add(1, Text.of("Make sure to empty it before upgrading!").red())
        })
})