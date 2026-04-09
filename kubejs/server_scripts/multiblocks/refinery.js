ServerEvents.recipes(event=>{

    event.custom({
        "type": "immersiveengineering:refinery",
        "catalyst": {
            "item": "minecraft:bone_meal"
        },
        "energy": 80,
        "input0": {
            "amount": 8,
            "tag": "forge:plantoil"
        },
        "input1": {
            "amount": 8,
            "tag": "forge:ethanol"
        },
        "result": {
            "amount": 16,
            "fluid": "immersiveengineering:biodiesel"
        }
    })
})