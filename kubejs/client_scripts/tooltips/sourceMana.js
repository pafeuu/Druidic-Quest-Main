ItemEvents.tooltip(event => {

    event.addAdvanced(["#dq:source_storage"], (item, advanced, text) => {
        text.add(1, Text.of("Right click a source jar to fill it").aqua())
    })

    function sourceJars(id, storageAmount) {
        event.addAdvanced([id], (item, advanced, text) => {
            text.add(1, Text.of(`Holds ${storageAmount} Source`).aqua())
        })
    }


    sourceJars("ars_nouveau:source_jar", "10 000")
    sourceJars("druidic_quest_core:big_source_jar", "100 000")
    sourceJars("druidic_quest_core:huge_source_jar", "1 000 000")
    sourceJars("ars_nouveau:creative_source_jar", "infinite")


})