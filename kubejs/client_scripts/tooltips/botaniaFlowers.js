ItemEvents.tooltip(event => {

    event.addAdvanced(["botania:floating_tigerseye","botania:tigerseye"],
    (item, advanced, text) => {
        text.add(1, Text.of('Scares creepers away and stops them from exploding').blue())
    })
})