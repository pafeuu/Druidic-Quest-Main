ServerEvents.recipes(e => {

    const cooking = e.recipes.farmersdelight.cooking

    cooking(["minecraft:apple",
        "#forge:dusts/gold",
        "#forge:dusts/gold",
        "#forge:dusts/gold",
        "#forge:dusts/gold",
        "immersive_weathering:golden_moss_clump"],"minecraft:golden_apple",10,200).id("minecraft:golden_apple")
   
    cooking(["immersive_weathering:moss_clump",
        "#forge:dusts/gold",
        "#forge:dusts/gold",
        "#forge:dusts/gold",
        "#forge:dusts/gold",
        "minecraft:oxeye_daisy"],"immersive_weathering:golden_moss_clump",10,200).id("immersive_weathering:golden_moss_clump")
    
    cooking(["immersive_weathering:moss_clump",
        "#forge:dusts/gold",
        "#forge:dusts/gold",
        "#forge:dusts/gold",
        "#forge:dusts/gold",
        "fruitsdelight:melon_jelly"],"immersive_weathering:golden_moss_clump",10,200)
    
    cooking(["minecraft:carrot",
        "#forge:dusts/gold"],"minecraft:golden_carrot",2,100).id("minecraft:golden_carrot")
    
    cooking(["minecraft:golden_apple",
        "naturesaura:tainted_gold_block",
        "fruitsdelight:apple_jelly",
        "minecraft:enchanted_book",
        "vintagedelight:ghost_pepper",
        "vintagedelight:nut_mash_mason_jar"],"minecraft:enchanted_golden_apple",20,200).id("forbidden_arcanus:enchanted_golden_apple") 

    e.remove({id:"biomeswevegone:golden_apple_from_green_apple"})
    
    cooking(["kubejs:aquatic_spice",
        "kubejs:aquatic_spice",
        "kubejs:underground_spice",
        "kubejs:underground_spice",
        "kubejs:nether_spice",
        "enchanted_golden_apple"],"enigmaticlegacy:forbidden_fruit",100,200)
    
    cooking(["kubejs:cosmic_spice",
        "kubejs:cosmic_spice",
        "kubejs:heavenly_spice",
        "kubejs:heavenly_spice",
        "enigmaticlegacy:astral_dust",
        "golden_apple"],"enigmaticlegacy:astral_fruit",100,200)

    cooking(["kubejs:cosmic_spice",
        "kubejs:cosmic_spice",
        "kubejs:heavenly_spice",
        "kubejs:heavenly_spice",
        "enigmaticlegacy:astral_dust",
        "honey_bottle"],"enigmaticlegacy:ichor_bottle",100,200)
    
    e.custom(
        {
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
            {
            "type": "l2library:potion",
            "potion": "minecraft:water"
            },
            {
            "item": "minecraft:sugar"
            },
            {
            "item": "fruitsdelight:lemon_slice"
            },
            {
            "item": "fruitsdelight:lemon_slice"
            },
            {
            "item": "fruitsdelight:lemon_slice"
            },
            {
            "item": "fruitsdelight:lemon_slice"
            },
            {
            "item": "fruitsdelight:lemon_slice"
            },
            {
            "item": "fruitsdelight:lemon_slice"
            }
        ],
        "result": {
            "item": "fruitsdelight:lemon_juice"
        }
    }
    )

    e.custom(
        {
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
            {
            "type": "l2library:potion",
            "potion": "minecraft:water"
            },
            {
            "item": "minecraft:sugar"
            },
            {
            "item": "fruitsdelight:orange_slice"
            },
            {
            "item": "fruitsdelight:orange_slice"
            },
            {
            "item": "fruitsdelight:orange_slice"
            },
            {
            "item": "fruitsdelight:orange_slice"
            },
            {
            "item": "fruitsdelight:orange_slice"
            },
            {
            "item": "fruitsdelight:orange_slice"
            }
        ],
        "result": {
            "item": "fruitsdelight:orange_juice"
        }
    }
    )
})
