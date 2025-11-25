ServerEvents.recipes(event=>{

    event.recipes.create.mixing("immersiveengineering:redstone_acid",[
    "2x minecraft:redstone_block",
    "2x thermal:sulfur_dust",
    "forbidden_arcanus:arcane_crystal_dust",
    Fluid.of('minecraft:water', 1000)]).heated()

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

    event.recipes.create.mixing("forbidden_arcanus:corrupt_soul",[
    "forbidden_arcanus:soul",
    "forbidden_arcanus:rune",
    Fluid.of("sophisticatedcore:xp_still", 2000)]).heated()

    event.recipes.create.mixing("forbidden_arcanus:enchanted_soul",[
    "forbidden_arcanus:corrupt_soul",
    "forbidden_arcanus:rune",
    Fluid.of("sophisticatedcore:xp_still", 4000)]).heated()

    
})