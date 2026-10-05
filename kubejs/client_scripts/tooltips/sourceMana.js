ItemEvents.tooltip(event => {

    event.addAdvanced(["#dq:source_storage"], (item, advanced, text) => {
        text.add(1, Text.of("Right click a source jar to fill it").aqua())
    })

    function sourceJars(id, storageAmount) {
        event.addAdvanced([id], (item, advanced, text) => {
            text.add(1, Text.of(`Holds ${storageAmount} Source`).aqua())
            text.add(2, Text.of("Will not charge items in your inventory!").red())
        })
    }
    
    function sourceItemStorage(id, storageAmount) {
        event.addAdvanced([id], (item, advanced, text) => {
            text.add(1, Text.of(`Holds ${storageAmount} Source`).aqua())
        })
    }


    sourceJars("ars_nouveau:source_jar", "10 000")
    sourceJars("druidic_quest_core:big_source_jar", "100 000")
    sourceJars("druidic_quest_core:huge_source_jar", "1 000 000")
    sourceJars("ars_nouveau:creative_source_jar", "infinite")
    sourceItemStorage("botania:mana_tablet","500 000")
    sourceItemStorage("botania:mana_ring","500 000")
    sourceItemStorage("botania:mana_ring_greater","2 000 000")
    sourceItemStorage("naturesaura_plus:aura_mana_holder","2 000 000")


})