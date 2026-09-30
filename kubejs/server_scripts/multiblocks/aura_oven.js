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
                "count": outputAmount
            },
            "processing_time": ProcessingTime,
            "aura_cost": AuraCost,
            "result_fluid": {
                "fluid": "kubejs:liquid_coal_essence",
                "amount": FluidAmount
            }
        })
    }
    function tagAuraOven(input,output,outputAmount,ProcessingTime,AuraCost,FluidAmount)
    {
        event.custom({
            "type": "naturesaura_plus:oven",
            "ingredient": {
                "tag": input
            },
            "result": {
                "item": output,
                "count": outputAmount
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
        1,
        600,
        100,
        250
    )
    
    tagAuraOven("minecraft:logs",
        "minecraft:charcoal",
        1,
        400,
        50,
        100
    )
})