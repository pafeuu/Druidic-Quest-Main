ServerEvents.recipes(event => {

    event.custom({
        "type": "botania:terra_plate",
        "ingredients": [
            {
                "item": "kubejs:wrought_iron_ingot"
            },
            {
                "item": "thermal:coal_coke_block"
            }
        ],
        "mana": 500000,
        "result": {
            "item": "druidic_quest_core:steel_ingot"
        }
    })
})