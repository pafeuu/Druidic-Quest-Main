const featherDelay = 12000
EntityJSEvents.modifyEntity((event) => {
    event.modify("alexsmobs:sunbird", (builder) => {
        builder.tick((entity) => {
            let featherTime = entity.persistentData.getInt('FeatherTime')
            if (featherTime === 0) {
                featherTime = featherDelay + Utils.random.nextInt(featherDelay)
            } else {
                featherTime--
                if (featherTime <= 0) {
                    entity.block.popItemFromFace(Item.of('kubejs:sunbird_feather'), 'up')
                    featherTime = featherDelay + Utils.random.nextInt(featherDelay)
                }
            }
            entity.persistentData.putInt('FeatherTime', featherTime)
        })
    })
})

//attributes Startup Script
EntityJSEvents.attributes(event => {
    
    const BaseHealthChange = [
        ["minecraft:zombie",30],
        ["minecraft:creeper",15]
    ]
    
    BaseHealthChange.forEach(([mobId,health]) => {
        event.modify(mobId, attribute => {
            //Overwrite health of a mob
            attribute.add("minecraft:generic.max_health", health)
        })    
    });
    
    
    
})
