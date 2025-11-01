ServerEvents.recipes(event=>{

    event.recipes.create.mixing("immersiveengineering:redstone_acid",[
    "2x minecraft:redstone_block",
    "2x thermal:sulfur",
    "forbidden_arcanus:arcane_crystal_dust"])

    event.custom({
        "type": "immersiveengineering:mixer",
        "energy": 16000,
        "fluid": {
            "amount": 1000,
            "tag": "minecraft:water"
        },
        "inputs": [
            {
            "item": "minecraft:redstone_block"
            },
            {
            "item": "minecraft:redstone_block"
            },
            {
            "item": "thermal:sulfur_dust"
            },
            {
            "item": "thermal:sulfur_dust"
            },
            {
            "item": "forbidden_arcanus:arcane_crystal_dust"
            },
        ],
        "result": {
            "amount": 1000,
            "fluid": "immersiveengineering:redstone_acid"
        }
    })
})