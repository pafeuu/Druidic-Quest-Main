ServerEvents.recipes(event => {

    function simpleAuraOven(input,output,outputAmount,ProcessingTime,AuraCost,FluidAmount)
    {
        event.custom({
            "type": "naturesaura_plus:oven",
            "ingredient": {
                "item": input
            },
            "result": {
                "item": output,
                "count": 1
            },
            "processing_time": ProcessingTime,
            "aura_cost": AuraCost,
            "result_fluid": {
                "fluid": "kubejs:liquid_coal_essence",
                "amount": FluidAmount
            }
        })
    }
    function tagAuraOven(input,output,count,ProcessingTime,AuraCost,FluidAmount)
    {
        event.custom({
            "type": "naturesaura_plus:oven",
            "ingredient": {
                "tag": input
            },
            "result": {
                "item": output,
                "count": count
            },
            "processing_time": ProcessingTime,
            "aura_cost": AuraCost,
            "result_fluid": {
                "fluid": "kubejs:liquid_coal_essence",
                "amount": FluidAmount
            }
        })
    }
    
    simpleAuraOven("minecraft:coal",
        "thermal:coal_coke",
        600,
        100,
        250
    )

    simpleAuraOven("minecraft:coal_block",
        "thermal:coal_coke_block",
        6000,
        800,
        2500
    )
    
    tagAuraOven("minecraft:logs",
        "minecraft:charcoal",
        1,
        400,
        50,
        100
    )
})