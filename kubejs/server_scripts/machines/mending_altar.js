ServerEvents.recipes(event=>{

    event.remove({type:"aether:repairing"})
    Ingredient.of("#minecraft:pickaxes").itemIds.forEach(item => {
        event.custom({
        "type": "aether:repairing",
        "ingredient": {
            "item": item
        },
        "repairTime": 1200
    })
    })

    Ingredient.of("#minecraft:axes").itemIds.forEach(item => {
        event.custom({
        "type": "aether:repairing",
        "ingredient": {
            "item": item
        },
        "repairTime": 1200
    })
    })

    Ingredient.of("#minecraft:shovels").itemIds.forEach(item => {
        event.custom({
        "type": "aether:repairing",
        "ingredient": {
            "item": item
        },
        "repairTime": 400
    })
    })

    Ingredient.of("#minecraft:swords").itemIds.forEach(item => {
        event.custom({
        "type": "aether:repairing",
        "ingredient": {
            "item": item
        },
        "repairTime": 800
    })
    })

    Ingredient.of("#minecraft:hoes").itemIds.forEach(item => {
        event.custom({
        "type": "aether:repairing",
        "ingredient": {
            "item": item
        },
        "repairTime": 800
    })
    })

    Ingredient.of("#forge:armors/boots").itemIds.forEach(item => {
        event.custom({
        "type": "aether:repairing",
        "ingredient": {
            "item": item
        },
        "repairTime": 1600
    })
    })

    Ingredient.of("#forge:armors/helmets").itemIds.forEach(item => {
        event.custom({
        "type": "aether:repairing",
        "ingredient": {
            "item": item
        },
        "repairTime": 2000
    })
    })

    Ingredient.of("#forge:armors/chestplates").itemIds.forEach(item => {
        event.custom({
        "type": "aether:repairing",
        "ingredient": {
            "item": item
        },
        "repairTime": 3200
    })
    })

    Ingredient.of("#forge:armors/leggings").itemIds.forEach(item => {
        event.custom({
        "type": "aether:repairing",
        "ingredient": {
            "item": item
        },
        "repairTime": 2800
    })
    })
    
    
})