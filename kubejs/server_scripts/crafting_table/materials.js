ServerEvents.recipes(event=>{

    event.shaped("thermal:junk_net",
        [
            "TST",
            "SSS",
            "TST"
        ],
        {
            S:"minecraft:string",
            T:"#forge:plates/tin"
        }
    )

    event.shapeless("thermal:aquachow",["minecraft:slime_ball","minecraft:wheat"])
    event.shapeless("thermal:deep_aquachow",["minecraft:slime_ball","minecraft:rotten_flesh"])
})