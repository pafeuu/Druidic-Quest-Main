ServerEvents.recipes(event => {

    event.custom({
        "type": "wizards_reborn:alchemy_machine",
        "outputItem": {
            "item": "wizards_reborn:arcacite",
            "count": 3
        },
        "steam": 500,
        "wissen": 2000,
        "ingredients": [
            { item: "wizards_reborn:scorched_calx" },
            { item: "wizards_reborn:scorched_calx" },
            { item: "thermal:ruby" },
            { item: "minecraft:quartz" },
            { item: "minecraft:quartz" },
        ],
        "fluidIngredients": [
            {
                "name": "wizards_reborn:alchemy_oil",
                "amount": 1000
            }
        ]
    }).id("wizards_reborn:alchemy_machine/arcacite")

    event.custom({
        "type": "wizards_reborn:alchemy_machine",
        "outputItem": {
            "item": "wizards_reborn:arcacite",
            "count": 1
        },
        "steam": 500,
        "wissen": 2000,
        "ingredients": [
            { item: "wizards_reborn:scorched_calx" },
            { item: "rubinated_nether:ruby" },
            { item: "rubinated_nether:ruby" },
            { item: "minecraft:quartz" },
            { item: "minecraft:quartz" },
        ],
        "fluidIngredients": [
            {
                "name": "wizards_reborn:alchemy_oil",
                "amount": 1000
            }
        ]
    })

    event.custom({
        "type": "wizards_reborn:alchemy_machine",
        "outputItem": {
            "item": "wizards_reborn:arcacite_polishing_mixture",
            "count": 1
        },
        "steam": 500,
        "wissen": 2000,
        "ingredients": [
            { item: "wizards_reborn:arcacite" },
            { item: "minecraft:flint" },
            { item: "minecraft:flint" },
            { item: "ars_nouveau:earth_essence" },
            { item: "ars_nouveau:earth_essence" }
        ]
    }).id("wizards_reborn:alchemy_machine/arcacite_polishing_mixture")

    event.custom({
        "type": "wizards_reborn:alchemy_machine",
        "outputItem": {
            "item": "wizards_reborn:enchanted_calx",
            "count": 2
        },
        "steam": 500,
        "wissen": 2000,
        "ingredients": [
            { item: "wizards_reborn:alchemy_calx" },
            { item: "wizards_reborn:alchemy_calx" },
            { item: "minecraft:lapis_lazuli" },
            { item: "minecraft:lapis_lazuli" },
            { item: "create:experience_block" },
            { item: "create:experience_block" }
        ],
        "fluidIngredients": [
            {
                "name": "wizards_reborn:alchemy_oil",
                "amount": 500
            },
            {
                "name": "wizards_reborn:wissen_tea",
                "amount": 500
            }
        ]
    }).id("wizards_reborn:alchemy_machine/enchanted_calx")

    event.custom({
        "type": "wizards_reborn:alchemy_machine",
        "outputItem": {
            "item": "wizards_reborn:distant_calx",
            "count": 2
        },
        "steam": 750,
        "wissen": 2500,
        "ingredients": [
            { item: "wizards_reborn:alchemy_calx" },
            { item: "wizards_reborn:alchemy_calx" },
            { item: "minecraft:ender_eye" },
            { item: "minecraft:ender_eye" },
            { item: "aether:zanite_gemstone" },
            { item: "aether:zanite_gemstone" }
        ],
        "fluidIngredients": [
            {
                "name": "wizards_reborn:alchemy_oil",
                "amount": 500
            },
            {
                "name": "wizards_reborn:mor_brew",
                "amount": 500
            }
        ]
    }).id("wizards_reborn:alchemy_machine/distant_calx")
    function alchemyMachine(output, amount, items, wissen, oil) {
        event.custom({
            "type": "wizards_reborn:alchemy_machine",
            "outputItem": {
                "item": output,
                "count": amount
            },
            "steam": 100,
            "wissen": wissen,
            "ingredients": items,
            "fluidIngredients": [
                {
                    "name": "wizards_reborn:alchemy_oil",
                    "amount": oil
                }
            ]
        })
    }

    function alchemyEffectPowders(output, items, wissen, oil) {
        event.custom({
            "type": "wizards_reborn:alchemy_machine",
            "outputItem": output,
            "steam": 100,
            "wissen": wissen,
            "ingredients": items,
            "fluidIngredients": [
                {
                    "name": "wizards_reborn:alchemy_oil",
                    "amount": oil
                }
            ]
        })
    }

    alchemyMachine("kubejs:primitive_alchemical_dust", 1, [
        { item: "wizards_reborn:arcanum_dust" },
        { item: "thermal:lapis_dust" },
        { item: "kubejs:infused_emerald" }
    ], 500, 100)

    alchemyMachine("kubejs:basic_alchemical_dust", 1, [
        { item: "kubejs:primitive_alchemical_dust" },
        { item: "wizards_reborn:alchemy_calx" },
        { tag: "forge:dusts/gold" },
        { item: "kubejs:infused_diamond" }
    ], 1500, 200)

    alchemyMachine("kubejs:improved_alchemical_dust", 1, [
        { item: "kubejs:basic_alchemical_dust" },
        { item: "wizards_reborn:natural_calx" },
        { tag: "forge:dusts/silver" },
        { item: "thermal:sapphire" }
    ], 2500, 300)

    alchemyMachine("kubejs:improved_alchemical_dust", 1, [
        { item: "kubejs:basic_alchemical_dust" },
        { item: "wizards_reborn:scorched_calx" },
        { tag: "forge:dusts/silver" },
        { item: "thermal:sapphire" }
    ], 3000, 400)

    alchemyMachine("kubejs:advanced_alchemical_dust", 1, [
        { item: "kubejs:improved_alchemical_dust" },
        { item: "wizards_reborn:enchanted_calx" },
        { item: "ars_nouveau:abjuration_essence" },
        { item: "thermal:ruby" }
    ], 4500, 500)

    alchemyMachine("kubejs:ultimate_alchemical_dust", 1, [
        { item: "kubejs:advanced_alchemical_dust" },
        { item: "wizards_reborn:distant_calx" },
        { tag: "forge:dusts/silver" },
        { item: "thermal:sapphire" },
        { item: "thermal:ruby" }
    ], 5000, 1000)

    alchemyEffectPowders(Item.of('naturesaura:effect_powder', 12, '{effect:"naturesaura:ore_spawn"}').toJson(), [
        { item: "wizards_reborn:natural_calx" },
        { item: "wizards_reborn:natural_calx" },
        { item: "wizards_reborn:arcanum_dust" },
        { item: "wizards_reborn:arcanum_dust" },
        { item: "kubejs:basic_alchemical_dust" },
        { item: "quark:diamond_heart" }
    ], 100, 100)

    alchemyEffectPowders(Item.of('naturesaura:effect_powder', 20, '{effect:"naturesaura:nether_grass"}').toJson(), [
        { item: "wizards_reborn:scorched_calx" },
        { item: "wizards_reborn:scorched_calx" },
        { item: "minecraft:blaze_powder" },
        { item: "minecraft:dead_bush" }
    ], 100, 100)

    alchemyEffectPowders(Item.of('naturesaura:effect_powder', 64, '{effect:"naturesaura:cache_recharge"}').toJson(), [
        { item: "wizards_reborn:alchemy_calx" },
        { item: "wizards_reborn:alchemy_calx" },
        { item: "quark:sturdy_stone" },
        { item: "quark:sturdy_stone" }
    ], 100, 100)

    alchemyEffectPowders(Item.of('naturesaura:effect_powder', 64, '{effect:"naturesaura:plant_boost"}').toJson(), [
        { item: "wizards_reborn:natural_calx" },
        { item: "wizards_reborn:natural_calx" },
        { item: "minecraft:bone_meal" },
        { item: "minecraft:bone_meal" },
        { item: "thermal:compost" },
        { item: "thermal:compost" }
    ], 100, 100)

    alchemyEffectPowders(Item.of('naturesaura:effect_powder', 32, '{effect:"naturesaura:animal"}').toJson(), [
        { item: "wizards_reborn:natural_calx" },
        { item: "wizards_reborn:natural_calx" },
        { item: "minecraft:potato" },
        { item: "minecraft:potato" },
        { item: "minecraft:wheat" },
        { item: "minecraft:wheat" }
    ], 100, 100)


})